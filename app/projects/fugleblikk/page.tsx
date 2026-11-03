import "./fugleblikk.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fugleblikk Case Study — Chengcheng Teng",
  description:
    "Designing and building an interactive bird globe: from a personal love of nature to a visual experience powered by Next.js, MapLibre and biodiversity data.",
};

const chapters = [
  ["idea", "The idea"],
  ["data", "The data"],
  ["experience", "Building the map"],
  ["architecture", "Architecture"],
  ["challenges", "Challenges"],
  ["reflection", "Reflection"],
];

const mobileScreens = [
  { src: "search-phone.PNG", alt: "Northern Lapwing preview card on the mobile bird map", caption: "Discover and listen" },
  { src: "detail-phone.PNG", alt: "Azure Tit species page with a two-column photo gallery on mobile", caption: "Explore a species" },
  { src: "migration-phone.PNG", alt: "Mobile migration view with the timeline below the globe", caption: "Follow a journey" },
];

export default function Page() {
  return (
    <article className="case-study fugleblikk-case-study" id="top">
      <header className="case-study-header">
        <Link className="back-link" href="/#projects">
          ← Back to projects
        </Link>
        <p className="case-study-eyebrow">
          Front-end development / Product design
        </p>
        <h1>Fugleblikk — Explore birdlife in norway</h1>
        <p>
          An interactive globe that turns Norway's bird observations into a
          visual invitation to explore, listen, and learn.
        </p>
        <div className="fugleblikk-actions">
          <a
            className="button"
            href="https://fugleblikk.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Visit site ↗
          </a>
          <a
            className="button secondary"
            href="https://github.com/chengchengt7/fugleblikk"
            target="_blank"
            rel="noreferrer"
          >
            View code ↗
          </a>
        </div>
      </header>

      <figure className="case-study-figure fugleblikk-hero">
        <img
          src="/Fugleblikk/bird-hero.png"
          alt="Bird cutouts arranged across Norway's satellite map, with a Black Redstart preview card open"
          width={2880}
          height={1556}
          fetchPriority="high"
        />
        <figcaption>
          A map to explore through birds, photographs, sound, and migration.
        </figcaption>
      </figure>

      <dl className="fugleblikk-facts">
        <div>
          <dt>Project</dt>
          <dd>Personal project</dd>
        </div>
        <div>
          <dt>My role</dt>
          <dd>Product design & front-end development</dd>
        </div>
        <div>
          <dt>Built with</dt>
          <dd>Next.js, React, TypeScript, MapLibre</dd>
        </div>
      </dl>

      <nav className="fugleblikk-chapters" aria-label="Case study sections">
        {chapters.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>

      <section aria-labelledby="idea">
        <h2 id="idea">From an open assignment to a hobby project</h2>
        <p>
          Fugleblikk began as a school assignment to build a website where users
          could search for information from an API. I saw an opportunity to
          combine my love of nature, biodiversity, and data visualization into a
          way to explore the birdlife around us.
        </p>
        <p>
          Inspired by the geographic exploration of{" "}
          <a href="https://radio.garden/" target="_blank" rel="noreferrer">
            Radio Garden
          </a>{" "}
          and{" "}
          <a
            href="https://earth.nullschool.net/"
            target="_blank"
            rel="noreferrer"
          >
            Earth Nullschool
          </a>
          , I imagined bird photographs forming a living mosaic across Norway.
          Rather than needing to know a bird's name before searching, visitors
          could start with its shape, listen to its call, and discover where it
          had been observed. That idea grew into a personal project: making
          Norway's birdlife easier to explore through sight, sound, and place.
        </p>
      </section>

      <section aria-labelledby="data">
        <h2 id="data">Connecting the data before building the map</h2>
        <p>
          I started with the data each bird would need. Artskart supplied
          observations from Norway, and Artsdatabanken's Artsnavn helped me
          match synonyms and subspecies to one accepted species ID. I then added
          English names and photographs from iNaturalist, recordings from
          Xeno-canto, descriptions from Wikipedia, and habitat information from
          Artsdatabanken.
        </p>
        <p>
          Before introducing a map, I tested the API results in a simple
          collection of bird cards. This let me check species matching, missing
          photos, and playable recordings separately from the map logic. With
          the cards working, I used Python and rembg to remove photo backgrounds
          and generate bird cutouts.
        </p>
        <figure className="case-study-figure fugleblikk-narrow">
          <img
            src="/Fugleblikk/card%20%26%20cutout.png"
            alt="An early Bohemian Waxwing card beside its transparent bird cutout"
            width={1426}
            height={752}
            loading="lazy"
          />
          <figcaption>
            Testing API returns as bird card and then generate bird cutout.
          </figcaption>
        </figure>
        <p>
          The collection also needed a clear rule for inclusion. I kept each
          species' latest usable observation from the previous twelve complete
          calendar months, checking its date and location. I used each species'
          official ID to avoid listing the same bird twice under different
          names.
        </p>
      </section>

      <section aria-labelledby="experience">
        <h2 id="experience">Placing birds on a map</h2>
        <p>
          I then introduced MapLibre for the interactive globe and MapTiler for
          satellite imagery. Exact observation coordinates made birds overlap,
          so I assigned them to grid positions while minimizing their total
          distance from the recorded locations. This made the mosaic readable,
          with a tradeoff: the cutouts represent the collection, not precise
          sighting locations.
        </p>
        <p>
          I kept search and map selection connected to the same bird card. A
          search result moves the map to its bird, rather than introducing a
          separate results view.
        </p>
        <figure className="case-study-figure">
          <img
            src="/Fugleblikk/search.png"
            alt="Searching for Rødtoppfuglekonge focuses the map on its bird card"
            width={2880}
            height={1556}
            loading="lazy"
          />
          <figcaption>
            Search and map selection open the same bird card.
          </figcaption>
        </figure>
        <p>
          Five illustrative migration routes extend the experience beyond
          Norway. Visitors can follow one bird or compare routes through a
          monthly timeline. These are simplified seasonal journeys, not live
          tracking.
        </p>
        <figure className="case-study-figure">
          <img
            src="/Fugleblikk/migration-all.png"
            alt="Five colored migration routes across the globe with species selection and a monthly timeline"
            width={2880}
            height={1556}
            loading="lazy"
          />
          <figcaption>
            Migration adds a sense of movement and scale to the birds' stories.
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="architecture">
        <h2 id="architecture">Separate preparation from browsing</h2>
        <p>
          Fetching records, matching species, and generating cutouts do not need
          to happen on every site visit. I moved those work into a monthly
          GitHub Actions workflow, saving a JSON snapshot and local WebP
          cutouts. Next.js reads that collection and prepares map positions;
          React and MapLibre handle interaction in the browser.
        </p>

        <figure
          className="fugleblikk-architecture"
          aria-labelledby="architecture-caption"
        >
          <div className="architecture-panel">
            <p className="architecture-label">
              01 / Monthly preparation · GitHub Actions
            </p>
            <ol className="architecture-flow">
              <li>
                <strong>External sources</strong>
                <span>Artskart + Artsdatabanken / Artsnavn</span>
                <span>iNaturalist, Wikipedia, Xeno-canto</span>
              </li>
              <li>
                <strong>Node.js + Python</strong>
                <span>Validate, resolve species, enrich media</span>
                <span>Remove backgrounds with rembg</span>
              </li>
              <li>
                <strong>Prepared assets</strong>
                <span>JSON observation snapshot</span>
                <span>Local WebP bird cutouts</span>
              </li>
            </ol>
            <p className="architecture-bridge">
              <span aria-hidden="true">↓</span> Saved collection read by the
              application
            </p>
            <p className="architecture-label">02 / Browsing the site</p>
            <ol className="architecture-flow architecture-runtime">
              <li>
                <strong>Next.js server</strong>
                <span>Read snapshot · assign map slots</span>
                <span>Render species detail routes</span>
              </li>
              <li>
                <strong>React + MapLibre</strong>
                <span>Globe · bird markers · preview cards</span>
                <span>Search · audio · migration controls</span>
              </li>
            </ol>
            <p className="architecture-live">
              <strong>Requested when needed:</strong> search through the API
              route; MapTiler satellite tiles, remote photos, and audio from
              their providers.
            </p>
          </div>
          <figcaption id="architecture-caption">
            Preparation and browsing have different responsibilities.
          </figcaption>
        </figure>

        <h3>Prepare once, load media when needed</h3>
        <p>
          The preparation script reuses existing cutouts. Photos and recordings
          stay with their providers, and audio players use no preload, keeping
          media downloads out of the initial page load.
        </p>
        <h3>Give React and MapLibre clear responsibilities</h3>
        <p>
          MapLibre manages the globe and markers, while React manages selection
          and controls. A portal renders the React bird card inside a map popup.
          Refs keep map instances across renders, and effect cleanup removes
          markers and listeners when they are no longer needed.
        </p>
      </section>

      <section aria-labelledby="challenges">
        <h2 id="challenges">The problems that taught me the most</h2>
        <div className="fugleblikk-lessons">
          <div>
            <h3>A Norwegian name broke its page</h3>
            <p>
              During testing, the failed page for “ismåke” exposed a
              URL-handling mistake. I fixed it by encoding names in links,
              decoding route parameters before matching. This taught me how to
              handle URL parameters consistently across different languages.
            </p>
          </div>
          <div>
            <h3>A partial refresh must not replace good data</h3>
            <p>
              My monthly GitHub Actions workflow validates and builds the
              updated collection before replacing the saved data. A scheduled
              run failed when Artsdatabanken returned HTTP 403 during a habitat
              lookup. I updated the error handling to treat habitat as optional,
              so a failed lookup leaves that field empty and the workflow can
              continue.
            </p>
          </div>
          <div>
            <h3>Search results can arrive in the wrong order</h3>
            <p>
              An older search result sometimes replaced a newer one because its
              request took longer to finish. I fixed this with a request counter
              so only the latest search updates the results.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="responsive">
        <h2 id="responsive">Making room for exploration on mobile</h2>
        <p>
          The mobile layout keeps the same journey, with a compact bird preview
          and rearranged photo gallery. Migration controls move below the globe
          on smaller screens, giving the map and timeline their own space.
        </p>
        <div className="fugleblikk-mobile-gallery">
          {mobileScreens.map(({ src, alt, caption }) => (
            <figure key={src}>
              <img
                src={`/Fugleblikk/${src}`}
                alt={alt}
                width={1179}
                height={2556}
                loading="lazy"
              />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="reflection">
        <h2 id="reflection">Final thoughts</h2>
        <p>
          Fugleblikk grew from a school assignment into something I enjoy using
          myself — I put on the mixed bird sounds when I want a little zen time!
          From ideation to API testing, from visual experimenting to software
          structuring, from data preparation to error handling, I learned how
          each decision shaped the next.
        </p>
        <p>
          There are still limitationsin this project. Search needs an exact
          Norwegian or English name and only returns birds in the saved
          collection. The grid moves some birds away from their recorded
          locations, and the migration routes are illustrations, not live
          tracking. Photos, descriptions, and recordings can be missing or
          temporarily unavailable, including during Xeno-canto maintenance. The
          globe requires WebGL2.
        </p>
        <p>
          Overall, this project gave me hands-on experience with the full
          product development process, and I'm excited to bring what I learned
          into my next project.
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
