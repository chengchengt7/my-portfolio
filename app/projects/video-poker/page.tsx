import "./page.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Poker Case Study — Chengcheng Teng",
  description:
    "What I learned building a video poker game with React, TypeScript, and Zustand, with examples of the code behind each round.",
};

export default function Page() {
  return (
    <article className="case-study poker-case-study" id="top">
      <header className="case-study-header">
        <Link className="back-link" href="/#projects">
          ← Back to projects
        </Link>
        <p className="case-study-eyebrow">Front-end development</p>
        <h1>Video Poker Game</h1>
        <p>
          A school project working with components, shared state, and game logic
          in React, TypeScript and Zustand.
        </p>
        <div className="poker-actions">
          <a
            className="button"
            href="https://video-poker-game.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Play game ↗
          </a>
          <a
            className="button secondary"
            href="https://github.com/chengchengt7/school-260910-video-poker"
            target="_blank"
            rel="noreferrer"
          >
            View code ↗
          </a>
        </div>
      </header>

      <figure className="case-study-figure poker-hero">
        <img
          src="/video-poker/deal%20with%20match.png"
          alt="A straight held before the draw, with the matching payout highlighted"
          width={2880}
          height={1556}
          fetchPriority="high"
        />
        <figcaption>
          The table highlights the current hand and bet so the player can see
          what that hand would pay.
        </figcaption>
      </figure>

      <section aria-labelledby="brief">
        <h2 id="brief">The assignment</h2>
        <p>
          The assignment requires building a video poker game using React,
          TypeScript, Zustand, and React Router. The player bets credits,
          receives five cards, and chooses which ones to keep before drawing
          replacements. The final hand decides the payout.
        </p>
        <p>
          I started by learning the game rules and drawing wireframes on paper.
          Then I built the game in small steps, starting with player management
          and betting before moving on to dealing, holding cards, and
          calculating winnings.
        </p>
      </section>

      <section aria-labelledby="architecture">
        <h2 id="architecture">Deciding where state should live</h2>
        <p>
          One challenge was making sure players could continue their round after
          visiting the Rules page or reloading the browser. Saving their credits
          alone was not enough. I also needed to preserve their hand, held
          cards, remaining deck, bet, and current phase of the round.
        </p>
        <p>
          I kept this data in a Zustand store so it could be shared across
          components, and used its persist middleware to save it to localStorage
          between visits. The player-name input, however, stays in local React
          state until the form is submitted. Working through this distinction
          helped me understand which state belongs in a shared store and which
          can stay inside a component.
        </p>
        <figure className="case-study-figure poker-narrow">
          <img
            src="/video-poker/players.png"
            alt="Player selection showing saved credit balances and the active player"
            width={2880}
            height={1376}
            loading="lazy"
          />
          <figcaption>
            Each player has a saved balance. Switching to another player starts
            a fresh round.
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="challenges">
        <h2 id="challenges">Working through a round in code</h2>
        <h3>Checking whether the player can deal</h3>
        <p>
          I used two phases, <code>deal</code> and <code>draw</code>, to keep
          track of what the player can do. Before dealing, the store checks that
          the previous round is finished, a player exists, and they can afford
          the bet. If any of these checks fail, nothing changes and the player
          cannot deal.
        </p>
        <figure className="poker-code">
          <figcaption>
            <a href="https://github.com/chengchengt7/school-260910-video-poker/blob/main/src/stores/GlobalStore.ts">
              GlobalStore.ts
            </a>{" "}
            · Excerpt from dealCards
          </figcaption>
          <pre
            tabIndex={0}
            aria-label="Code checking whether a round can start"
          >
            <code>
              {`if (
  state.gamePhase !== "deal" ||
  !activePlayer ||
  activePlayer.coins < state.currentBet
) {
  return state;
}`}
            </code>
          </pre>
        </figure>
        <p>
          Once these checks pass, the action deducts the bet, deals five cards
          from a shuffled deck (Fisher-Yates method), and changes the phase to{" "}
          <code>draw</code>. Keeping these changes together in the store makes
          it easier to follow what happens when the player clicks Deal.
        </p>
        <h3>Replacing cards without repeating them</h3>
        <p>
          After dealing, I save the rest of the shuffled deck. When the player
          draws, held cards stay in their positions and the other cards are
          replaced from that saved deck. Taking the next card each time means a
          card cannot be dealt twice in the same round.
        </p>
        <figure className="poker-code">
          <figcaption>
            <a href="https://github.com/chengchengt7/school-260910-video-poker/blob/main/src/stores/GlobalStore.ts">
              GlobalStore.ts
            </a>{" "}
            · Excerpt from drawCards
          </figcaption>
          <pre
            tabIndex={0}
            aria-label="Code keeping held cards and replacing the others"
          >
            <code>{`const hand = state.hand.map((card, index) => {
  if (state.heldCardIndexes.includes(index)) return card;

  const replacementCard = state.deck[nextCardIndex];
  nextCardIndex += 1;
  return replacementCard;
});`}</code>
          </pre>
        </figure>
        <p>
          Here, <code>nextCardIndex</code> starts at zero before the loop and
          only increases when a replacement is used. After the draw, I remove
          those cards from the saved deck, evaluate the final hand, and add any
          winnings to the player’s balance.
        </p>
        <div className="poker-screenshots">
          <figure className="case-study-figure">
            <img
              src="/video-poker/start.png"
              alt="New round with five face-down cards and 100 credits"
              width={2880}
              height={1556}
              loading="lazy"
            />
            <figcaption>
              A new player starts with 100 credits and chooses a bet before
              dealing.
            </figcaption>
          </figure>
          <figure className="case-study-figure">
            <img
              src="/video-poker/game-over.png"
              alt="Completed straight with a 16-credit payout and 104 credits remaining"
              width={2880}
              height={1554}
              loading="lazy"
            />
            <figcaption>
              This straight pays 16 credits on a four-credit bet.
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="payouts">
        <h2 id="payouts">Using the same payout data in two places</h2>
        <p>
          I defined the payouts in one array, which the table component uses to
          render its rows. The function below looks up the winnings in that same
          array.
        </p>
        <figure className="poker-code">
          <figcaption>
            <a href="https://github.com/chengchengt7/school-260910-video-poker/blob/main/src/game/payouts.ts">
              payouts.ts
            </a>{" "}
            · The payout calculation
          </figcaption>
          <pre
            tabIndex={0}
            aria-label="Code looking up winnings in the shared payout data"
          >
            <code>{`export function getPayout(hand: PokerHand | null, bet: BetAmount): number {
  if (!hand) return 0;

  const payout = payouts.find((item) => item.hand === hand);
  return payout?.credits[bet - 1] ?? 0;
}`}</code>
          </pre>
        </figure>
        <p>
          Bets range from one to five, so <code>bet - 1</code> selects the
          matching position in the credits array. A hand that does not win
          returns zero. I kept this function separate from the React components
          so I could read the calculation without also working through the table
          markup.
        </p>
      </section>

      <section aria-labelledby="reflection">
        <h2 id="reflection">What I learned</h2>
        <p>
          This was my first complete React project, and building a working game
          helped me understand how components and state work together. Breaking
          the interface into reusable parts made the project easier to manage. I
          also learned why it helps to plan how the screens, state, and game
          rules connect before starting to code.
        </p>
        <p>
          Once the main game worked, I added sound and card animations, then
          tested the deployed site on my phone to improve the layout on smaller
          screens. Taking the project from paper sketches to a playable game
          gave me more confidence in using React and a clearer idea of how to
          approach my next project.
        </p>
      </section>

      <footer className="case-study-footer">
        <Link className="back-link" href="/#projects">
          ← Back to projects
        </Link>
        <a className="back-link" href="#top">
          Back to top ↑
        </a>
      </footer>
    </article>
  );
}
