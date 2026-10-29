import Link from "next/link";
import type { Metadata } from "next";
const introductionImage = "/Fora/introduction.jpeg";
const screenOne = "/Fora/1.png";
const screenTwo = "/Fora/2.png";
const screenThree = "/Fora/3.png";
const screenFour = "/Fora/4.png";
const screenFive = "/Fora/5.png";
const flowChart = "/Fora/flow-chart.png";
const walkthroughVideo = "/Fora/fora-walk-through.webm";
const logoProgress = "/Fora/logo.png";
const cardDesignProgress = "/Fora/card-design-progress.png";
import "./page.css";

const screenshots = [screenOne, screenTwo, screenThree, screenFour, screenFive];

export const metadata: Metadata = { title: "Fora Case Study — Chengcheng Teng" };

export default function Page() {
  return (
    <main className="fora-case-study" id="top">
      <header className="fora-header">
        <Link className="fora-back" href="/#projects">
          ← Back to projects
        </Link>
        <p className="fora-eyebrow">Product design / Development case study</p>
        <h1>Fora — Discover edible wild plants</h1>
        <p>A foraging companion inspired by a first walk into the wild.</p>
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
        <figure className="fora-introduction-image">
          <img
            src={introductionImage}
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
        <div className="fora-introduction-actions">
          <a href="#demo-video" className="fora-demo-link">Jump to Demo video</a>
        </div>
      </section>
      <section aria-labelledby="ideate">
        <h2 id="ideate">Ideate</h2>
        <p>
          I focused on a simple question: how could I help a beginner move from
          spotting an unfamiliar plant to learning about it, without switching
          between apps? I mapped out three steps: capture, identify, and explore.
          The flow brings plant matches and edibility information together, while
          giving users a way to add more photos when identification is uncertain.
          This helped me define the screens and decisions needed to keep the
          experience straightforward, with a reminder to verify before consuming.
        </p>
        <figure className="fora-flow-chart">
          <a href={flowChart} target="_blank" rel="noreferrer" aria-label="Open the Fora user flow at full size (opens in a new tab)">
            <img
              src={flowChart}
              alt="Fora user flow: capture or upload a photo, identify the plant, add photos if confidence is low, then review matches and explore edibility information."
              width={3904}
              height={2560}
              loading="lazy"
            />
          </a>
          <figcaption>Flow cahrt - From capture to discovery</figcaption>
        </figure>
      </section>
      <section aria-labelledby="design">
        <h2 id="design">Design</h2>
        <p>
          As a personal hobby project with a simple interface, Fora gave me room
          to design directly in code. I used Figma only for the plant card,
          comparing different ways to arrange the plant names, edibility label,
          and identification confidence before choosing a layout.
        </p>
        <figure className="fora-design-image">
          <a href={cardDesignProgress} target="_blank" rel="noreferrer" aria-label="View plant card design iterations at full size (opens in a new tab)">
            <img
              src={cardDesignProgress}
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
          direction, I used GPT to turn the concept into a digital image,
          keeping my original idea as the starting point.
        </p>
        <figure className="fora-logo">
          <a href={logoProgress} target="_blank" rel="noreferrer" aria-label="View the logo design process at full size (opens in a new tab)">
            <img
              src={logoProgress}
              alt="Fora logo development, from hand-drawn sketches to digital versions featuring a plant inside a magnifying glass"
              width={2672}
              height={800}
              loading="lazy"
            />
          </a>
          <figcaption>From hand-drawn ideas to a digital logo generated with GPT.</figcaption>
        </figure>
      </section>
      <section aria-labelledby="demo-video">
        <h2 id="demo-video">Product Presentation</h2>
        <p>Watch Fora in action, from identifying a plant to exploring its edibility information.</p>
        <video
          src={walkthroughVideo}
          className="fora-demo-video"
          controls
          playsInline
          preload="metadata"
          aria-label="Fora product walkthrough"
        />
      </section>
      <section>
        <h2>Final Thoughts</h2>
        <ul className="fora-final-thoughts">
          <li>
            I experienced the full product cycle: identifying a pain point,
            defining the problem, designing, building, integrating APIs,
            deploying, and testing and iterating.
          </li>
          <li>
            Poor signal in the forest made offline access a clear priority
            for the next version.
          </li>
          <li>
            Working with LLMs taught me to question their accuracy. A curated
            database of local edible plants could provide a more reliable
            source for future versions.
          </li>
          <li>
            I set the MVP’s identification confidence threshold at 20% to show
            more potential matches. This is a low threshold, not a safety
            rating, and needs further evaluation.
          </li>
          <li>
            A save feature would let me revisit discoveries and gradually
            become more familiar with local species.
          </li>
        </ul>
      </section>

      <footer className="fora-footer">
        <Link className="fora-back" href="/#projects">← Back to projects</Link>
        <a className="fora-back" href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
