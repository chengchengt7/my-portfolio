import "./page.css";
import Link from "next/link";
import type { Metadata } from "next";

const screenshots = ["/Fora/1.png", "/Fora/2.png", "/Fora/3.png", "/Fora/4.png", "/Fora/5.png"];

export const metadata: Metadata = { title: "Fora Case Study — Chengcheng Teng" };

export default function Page() {
  return (
    <article className="case-study fora-case-study" id="top">
      <header className="case-study-header">
        <Link className="back-link" href="/#projects">
          ← Back to projects
        </Link>
        <p className="case-study-eyebrow">
          Front-end development / Product design
        </p>
        <h1>Fora — Discover edible wild plants</h1>
        <p>
          A foraging companion that helps you identify wild plants from photos
          and learn about their edibility, preparation, and precautions.
        </p>
      </header>

      <div
        className="fora-screenshots"
        role="region"
        aria-label="Fora app screenshots"
        tabIndex={0}
      >
        {screenshots.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Fora app preview, screen ${index + 1} of 5`}
            width={1179}
            height={2556}
          />
        ))}
      </div>

      <section aria-labelledby="introduction">
        <h2 id="introduction">Introduction</h2>
        <figure className="case-study-figure case-study-narrow fora-introduction-image">
          <img
            src="/Fora/introduction.jpeg"
            alt="Plants gathered on my first guided foraging walk, laid out on a kitchen counter"
            width={4028}
            height={2744}
            loading="lazy"
          />
          <figcaption>
            My first nyttevekstvandring found (exclude the potatoes).
          </figcaption>
        </figure>
        <p>
          Fora began with my first nyttevekstvandring, a guided walk to discover
          edible wild plants. Having spent my whole life in cities, I knew very
          little about the plants around me. That walk opened my eyes to a world
          I had barely noticed and sparked a new interest in foraging. I wanted
          to keep exploring, but I wished I had a guide alongside me to help me
          understand what I was looking at and whether it was edible.
        </p>
        <p>
          When I went out on my own, I found myself switching between a plant
          identification app and internet searches to learn about edibility,
          preparation, and precautions. What started as curiosity became a
          scattered search for answers. I wanted to bring those steps together
          in one place, making it easier for a beginner like me to learn about a
          plant while still out in the field.
        </p>
        <p>
          That idea became Fora. It uses the Pl@ntNet API for plant
          identification and Gemini AI to present information about edibility
          and considerations for consumption. My aim is to help new foragers
          build their knowledge and enjoy discovering the plants around them,
          with information that supports further learning and verification.
        </p>
        <div className="case-study-actions case-study-narrow">
          <a href="#demo-video" className="button secondary">
            Jump to Demo video
          </a>
        </div>
      </section>
      <section aria-labelledby="ideate">
        <h2 id="ideate">Ideate</h2>
        <p>
          I focused on a simple question: how could I help a beginner from
          spotting an unfamiliar plant to learning about it and make decision to
          forage it, without switching between sources? I mapped out three
          steps: capture, identify, and explore. The flow brings plant matches
          and edibility information together, while giving users a way to add
          more photos when identification is uncertain. This helped me define
          the screens and decisions needed to keep the experience
          straightforward, with a reminder to verify before consuming.
        </p>
        <figure className="case-study-figure fora-flow-chart">
          <a
            href={"/Fora/flow-chart.png"}
            target="_blank"
            rel="noreferrer"
            aria-label="Open the Fora user flow at full size (opens in a new tab)"
          >
            <img
              src="/Fora/flow-chart.png"
              alt="Fora user flow: capture or upload a photo, identify the plant, add photos if confidence is low, then review matches and explore edibility information."
              width={3904}
              height={2560}
              loading="lazy"
            />
          </a>
          <figcaption>User flow — From capture to discovery</figcaption>
        </figure>
      </section>
      <section aria-labelledby="design">
        <h2 id="design">Design</h2>
        <p>
          As a personal hobby project with a simple interface, Fora gave me room
          to design directly in code. I used Figma only for experimenting the
          layout of the plant card.
        </p>
        <figure className="case-study-figure fora-design-image">
          <a
            href={"/Fora/card-design-progress.png"}
            target="_blank"
            rel="noreferrer"
            aria-label="View plant card design iterations at full size (opens in a new tab)"
          >
            <img
              src="/Fora/card-design-progress.png"
              alt="Five plant card layouts exploring the placement of plant names, edibility labels, photos, and confidence scores"
              width={3860}
              height={709}
              loading="lazy"
            />
          </a>
          <figcaption>Exploring plant card layouts in Figma.</figcaption>
        </figure>
        <p>
          The logo started with sketches by hand. Once I had settled on a
          direction, I used GPT to create a digital version based on my original
          idea.
        </p>
        <figure className="case-study-figure case-study-narrow fora-logo">
          <a
            href={"/Fora/logo.png"}
            target="_blank"
            rel="noreferrer"
            aria-label="View the logo design process at full size (opens in a new tab)"
          >
            <img
              src="/Fora/logo.png"
              alt="Fora logo development, from hand-drawn sketches to digital versions featuring a plant inside a magnifying glass"
              width={2672}
              height={800}
              loading="lazy"
            />
          </a>
          <figcaption>
            Logo design: from hand-drawn ideas to a digital identidy.
          </figcaption>
        </figure>
      </section>
      <section aria-labelledby="technical-solutions">
        <h2 id="technical-solutions">Technical Solutions & Key Challenges</h2>
        <p>
          I built Fora with TypeScript and Vite (before learning React and
          Next.js), separating screen components, API requests, and response
          mapping in a clear file structure. A central controller coordinates
          navigation and keeps captured photos available when users need to
          improve a match. I used TypeScript types and mapping functions to turn
          data from the three APIs into a consistent format for the interface.
        </p>
        <h3>Handling uncertain identification</h3>
        <p>
          During MVP testing, I've found that a single photo does not always
          produce a match, so I set a 20% confidence threshold, Fora asks for
          another photo while preserving earlier images for the next request.
          This threshold controls the interface flow; it does not establish that
          a plant is safe to eat.
        </p>
        <h3>Reducing wait times</h3>
        <p>
          The results screen sometimes took 5 to 20 seconds to appear. To reduce
          the wait, I show plant candidates first, then load edibility
          information and Norwegian names at the same time. Each card updates as
          the information arrives.
        </p>

        <h3>Handling missing information</h3>
        <p>
          If edibility information cannot be loaded, the card shows “unknown.”
          If no Norwegian name is found, it still shows the scientific name. If
          the app cannot access the user's location, it searches Pl@ntNet's
          worldwide plant collection instead of a regional one.
        </p>
      </section>
      <section aria-labelledby="demo-video">
        <h2 id="demo-video">Product Presentation</h2>
        <p>
          Watch Fora in action, from identifying a plant to exploring its
          edibility information.
        </p>
        <video
          src="/Fora/fora-walk-through.webm"
          className="demo-video"
          controls
          playsInline
          preload="metadata"
          aria-label="Fora product walkthrough"
        />
      </section>
      <section>
        <h2>Final Thoughts</h2>
        <ul className="case-study-list">
          <li>
            I experienced the full product cycle: identifying a pain point,
            defining the problem, designing, building, integrating APIs,
            deploying, and testing and iterating.
          </li>
          <li>
            Poor signal in the forest made offline access a clear priority for
            the next version.
          </li>
          <li>
            Working with LLMs taught me to question their accuracy. A curated
            database of local edible plants could provide a more reliable source
            for future versions.
          </li>
          <li>
            I set the MVP's identification confidence threshold at 20% to show
            more potential matches. This is a low threshold, not a safety
            rating, and needs further evaluation.
          </li>
          <li>
            A save feature would let me return to plants I've found and get to
            know local species over time.
          </li>
        </ul>
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
