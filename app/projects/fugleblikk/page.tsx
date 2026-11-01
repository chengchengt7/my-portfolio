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
  ["experience", "The experience"],
  ["data", "The data"],
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
        <Link className="back-link" href="/#projects">← Back to projects</Link>
        <p className="case-study-eyebrow">Front-end development / Product design</p>
        <h1>Fugleblikk — A little curiosity, a world of birds</h1>
        <p>
          An interactive globe that turns Norway’s bird observations into a
          visual invitation to explore, listen, and learn.
        </p>
        <div className="fugleblikk-actions">
          <a className="button" href="https://fugleblikk.vercel.app/" target="_blank" rel="noreferrer">Visit site ↗</a>
          <a className="button secondary" href="https://github.com/chengchengt7/fugleblikk" target="_blank" rel="noreferrer">View code ↗</a>
        </div>
      </header>

      <figure className="case-study-figure fugleblikk-hero">
        <img
          src="/Fugleblikk/bird-hero.png"
          alt="Bird cutouts arranged across Norway’s satellite map, with a Black Redstart preview card open"
          width={2880}
          height={1556}
          fetchPriority="high"
        />
        <figcaption>A map to explore through birds, photographs, and sound.</figcaption>
      </figure>

      <dl className="fugleblikk-facts">
        <div><dt>Project</dt><dd>School assignment → personal project</dd></div>
        <div><dt>My role</dt><dd>Product design & front-end development</dd></div>
        <div><dt>Built with</dt><dd>Next.js, React, TypeScript, MapLibre</dd></div>
      </dl>

      <nav className="fugleblikk-chapters" aria-label="Case study sections">
        {chapters.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>

      <section aria-labelledby="idea">
        <h2 id="idea">From an open assignment to a personal escape</h2>
        <p>
          An open school assignment let me combine my love of nature,
          biodiversity, and data visualization. What if discovering a bird
          began with seeing its shape and hearing its voice, even when you
          did not know its name?
        </p>
        <p>
          Inspired by the geographic exploration of Radio Garden and Earth
          Nullschool, I imagined bird photographs forming a living mosaic across
          Norway. The assignment grew into a hobby project; I now use its mixed
          bird sounds as a background soundtrack for quiet time.
        </p>
        <blockquote className="fugleblikk-principle">
          See a bird. Hear its voice. Discover its story.
        </blockquote>
        <p>
          My design principle: reveal a little more at each step, with no
          specialist knowledge needed to begin.
        </p>
      </section>

      <section aria-labelledby="experience">
        <h2 id="experience">Designing an invitation to explore</h2>
        <p>
          The journey is short: explore the globe, select a bird, listen, then
          open its species page. The preview preserves the map context; the
          detail page gives photographs, habitat, and descriptions more room.
          Norwegian and English names support different visitors, while scientific
          names connect the underlying records.
        </p>
        <h3>Let the birds carry the interface</h3>
        <p>
          Satellite imagery supplies a sense of place. Darkening the map helps
          the cutouts stand out, while restrained controls leave space for
          browsing. Removing photo backgrounds makes each bird’s silhouette
          recognizable and gives the mosaic its character. The original photo
          stays in the preview card, preserving its context when selected.
        </p>
        <figure className="case-study-figure fugleblikk-narrow">
          <img
            src="/Fugleblikk/card%20%26%20cutout.png"
            alt="An early Bohemian Waxwing card beside its transparent bird cutout"
            width={1426}
            height={752}
            loading="lazy"
          />
          <figcaption>An early card exploration: one photograph, two roles in the experience.</figcaption>
        </figure>
        <p>
          Search offers a direct route for visitors who already know a name.
          Finding a match moves the globe to the bird and opens its card, bringing
          search back into the same visual journey.
        </p>
        <figure className="case-study-figure">
          <img src="/Fugleblikk/search.png" alt="Searching for Rødtoppfuglekonge focuses the map on its bird card" width={2880} height={1556} loading="lazy" />
          <figcaption>Search connects a known name to a place in the collection.</figcaption>
        </figure>
      </section>

      <section aria-labelledby="data">
        <h2 id="data">Making the collection trustworthy</h2>
        <h3>A species name is not evidence of a sighting</h3>
        <p>
          Which birds belong in the collection? Taxonomy alone does not establish
          that a bird was observed in Norway. I used Artskart to find candidates,
          then Artsnavn to
          resolve accepted species, synonyms, and subspecies to one official
          species ID, preventing duplicate birds under different names.
        </p>
        <p>
          The preparation script checks dates, coordinates, and geographic scope,
          keeping each species’ latest usable observation from the previous
          twelve complete calendar months. Records without usable locations are
          skipped, and the saved collection is refreshed monthly.
        </p>
        <h3>Readable placement comes with a tradeoff</h3>
        <p>
          Exact coordinates would stack bird images in heavily observed areas.
          I used a grid and a minimum-distance assignment algorithm to give each
          bird its own space while minimizing the total distance from recorded
          locations. This makes the mosaic easier to browse, but some birds move
          farther than others. The layout is an exploration aid; individual
          cutouts do not mark precise sightings.
        </p>
      </section>

      <section aria-labelledby="architecture">
        <h2 id="architecture">Prepare the data. Keep browsing light.</h2>
        <p>
          Reading a saved collection avoids fetching and combining biodiversity
          records during browsing. Next.js handles server routes and prepares
          map positions; React and MapLibre handle browser interaction.
        </p>

        <figure className="fugleblikk-architecture" aria-labelledby="architecture-caption">
          <div className="architecture-panel">
            <p className="architecture-label">01 / Monthly preparation · GitHub Actions</p>
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
            <p className="architecture-bridge"><span aria-hidden="true">↓</span> Saved collection read by the application</p>
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
              <strong>Requested when needed:</strong> search through the API route;
              MapTiler satellite tiles, remote photos, and audio from their providers.
            </p>
          </div>
          <figcaption id="architecture-caption">Preparation and browsing have different responsibilities.</figcaption>
        </figure>

        <h3>Store expensive work; load playable media on demand</h3>
        <p>
          A Python script generates cutouts ahead of browsing and reuses existing
          files. Recordings already have playable URLs, so I store references and
          use audio players with no preload, avoiding hundreds of audio files in
          the repository.
        </p>
        <h3>Keep React and the map in sync</h3>
        <p>
          MapLibre owns the map and markers. React owns selection and controls,
          with a portal rendering the bird card inside a map popup. Refs retain
          map instances across renders, and effect cleanup removes markers,
          listeners, and the map when no longer needed.
        </p>
      </section>

      <section aria-labelledby="challenges">
        <h2 id="challenges">The problems that taught me the most</h2>
        <div className="fugleblikk-lessons">
          <div>
            <h3>A Norwegian name broke its page</h3>
            <p>
              The page for “ismåke” exposed a URL-handling mistake. I added shared
              name normalization, encoded names when creating links, and decoded
              route parameters before matching. It taught me to test real local
              names, including “å”, throughout the navigation flow.
            </p>
          </div>
          <div>
            <h3>A partial refresh must not replace good data</h3>
            <p>
              My first GitHub Actions workflow made the collection refreshable
              without manual edits. Preparation writes to a temporary snapshot
              and replaces the saved data only after completion. The workflow
              builds before committing updates; changed pagination or missing
              usable observations stops the run instead of publishing incomplete data.
              A later scheduled run failed when Artsdatabanken returned HTTP 403
              for a habitat lookup. I made habitat HTTP errors log a warning and
              leave that optional field empty, so observations can still refresh.
            </p>
          </div>
          <div>
            <h3>Search results can arrive in the wrong order</h3>
            <p>
              A slower request should not overwrite a newer query. A request
              counter lets the interface ignore stale responses. Separate states
              explain no match, a bird outside the collection, and a service
              error. Exact-name matching is still a limitation I would improve.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="responsive">
        <h2 id="responsive">Making room for exploration on mobile</h2>
        <p>
          The mobile layout keeps the same journey, with a compact bird preview
          and a photo gallery that reflows on the species page. Migration controls
          move below the globe on smaller screens, giving the map and timeline
          their own space. Labelled controls, keyboard-accessible bird buttons,
          and reduced-motion handling support different ways of exploring.
        </p>
        <div className="fugleblikk-mobile-gallery">
          {mobileScreens.map(({ src, alt, caption }) => (
            <figure key={src}>
              <img src={`/Fugleblikk/${src}`} alt={alt} width={1179} height={2556} loading="lazy" />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
        <p>
          Five illustrative migration routes extend the experience beyond Norway.
          Visitors can follow one bird or compare routes through a monthly
          timeline. These are simplified seasonal journeys, not live tracking.
        </p>
        <figure className="case-study-figure">
          <img src="/Fugleblikk/migration-all.png" alt="Five colored migration routes across the globe with species selection and a monthly timeline" width={2880} height={1556} loading="lazy" />
          <figcaption>Migration adds a sense of movement and scale to the birds’ stories.</figcaption>
        </figure>
      </section>

      <section aria-labelledby="reflection">
        <h2 id="reflection">What I would take into the next project</h2>
        <p>
          Fugleblikk became a working product that connects visual design,
          interactive maps, and an automated data pipeline. Its biggest lesson
          was that interface decisions depend on the data beneath them: naming,
          location, freshness, and missing media all shape the experience.
        </p>
        <p>
          I also let appealing extras—migration playback and mixed sound—grow
          before the core experience was fully tested. Next time, I would finish
          and test that journey first. My priorities now are clearer recovery
          when external media fails, targeted tests for dates, species matching,
          and Norwegian URLs, and usability sessions to check whether beginners
          understand the map and its location tradeoff.
        </p>
        <div className="fugleblikk-actions fugleblikk-narrow">
          <a className="button" href="https://fugleblikk.vercel.app/" target="_blank" rel="noreferrer">Explore Fugleblikk ↗</a>
          <a className="button secondary" href="https://github.com/chengchengt7/fugleblikk" target="_blank" rel="noreferrer">View code ↗</a>
        </div>
      </section>

      <footer className="case-study-footer">
        <Link className="back-link" href="/#projects">← Back to projects</Link>
        <a className="back-link" href="#top">Back to top ↑</a>
      </footer>
    </article>
  );
}
