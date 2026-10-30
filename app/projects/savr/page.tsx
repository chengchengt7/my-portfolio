import "./page.css";
import Link from "next/link";
import type { Metadata } from "next";
const heroMockups = "/SAVR/top-img.png";
const washiTape = "/SAVR/Washi tape 1.png";
const affinityMap = "/SAVR/affinity-map.png";
const personaOne = "/SAVR/persona-1.png";
const personaTwo = "/SAVR/persona-2.png";
const personaThree = "/SAVR/persona-3.png";
const opportunityMap = "/SAVR/opportunity-map.png";
const competitiveAnalysis = "/SAVR/competitive-analysis.png";
const featureIdeas = "/SAVR/feature-ideas.png";
const userFlows = "/SAVR/user-flows.png";
const siteMap = "/SAVR/site-map.png";
const sketches = "/SAVR/sketches.jpg";
const wireframes = "/SAVR/wireframes.png";
const usabilityTest = "/SAVR/usability-test.png";
const moodboard = "/SAVR/moodboard.jpg";
const typography = "/SAVR/typography.png";
const components = "/SAVR/components.png";
const hiFiMockups = "/SAVR/hi-fi.png";
const responsiveDevices = "/SAVR/responsive-devices.png";
const walkthroughVideo = "/SAVR/SAVR walk through.mp4";

export const metadata: Metadata = { title: "SAVR Case Study — Chengcheng Teng" };

export default function Page() {
  return (
    <main className="case-study savr-case-study" id="top">
      <header className="case-study-header">
        <Link className="back-link" href="/#projects">← Back to projects</Link>
        <h6 className="case-study-eyebrow">UX / UI CASE STUDY</h6>
        <h1>SAVR — Personal Recipe Manager</h1>
        <p>A personal home for recipes, cooking memories, and culinary creativity.</p>
      </header>

      <img src={heroMockups} alt="SAVR recipe manager mobile mockups" className="case-study-image img-wide" fetchPriority="high" />
      <section>
        <h2>Introduction</h2>
        <div>
          <p>SAVR — drawn from &apos;savory&apos; and &apos;save&apos;, is a personal recipe manager designed to capture, organize, and refine personal culinary creations. Unlike generic recipe apps, SAVR has no preloaded library, focusing instead on building a hand-picked collection of dishes you&apos;ve cooked, loved, or plan to try — enhanced by shopping list generation and AI-powered search.</p>
          <p><strong>The “WHY”</strong>: Home cooks often treasure recipes as memories—moments tied to family, friends, and personal milestones. This project stems from a gap in existing tools: most recipe apps are cluttered, impersonal, and geared toward browsing endless content rather than celebrating the cook&apos;s own journey. SAVR brings the focus back to you and your food, turning home recipe curation into a simple, cosy, distraction-free and highly personal experience.</p>
          <p>This case study walks through my design process and problem-solving approaches that shaped SAVR into a meaningful, user-centered cooking companion.</p>
        </div>
        <div className="two-rows-narrow">
          <div>
            <h6>Project type</h6>
            <p>UX/UI</p>
            <p>Responsive Design</p>
            <p>End-to-end App</p><br />
            <h6>Industry</h6>
            <p>FoodTech / Lifestyle</p>
          </div>
          <div>
            <h6>Role</h6>
            <p>Solo UX/UI Designer</p>
            <p>Brand Design</p>
            <p>Researcher</p><br />
            <h6>Tools</h6>
            <p>Figma, Figjam</p>
          </div>
        </div>
        <div className="two-cta">
            <a href="https://www.figma.com/proto/XHfVS5PfgTDhX0BusNRhBY/SAVR?page-id=39%3A922&node-id=102-1275&p=f&viewport=529%2C444%2C0.07&t=vB6orAtn0UGjY2OJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=102%3A1275&show-proto-sidebar=1" target="_blank" rel="noreferrer" className="button">View Hi-fi Prototype</a>
            <a href="#demo-video" className="button secondary">Jump to Demo Video</a>
        </div>
      </section>

      <section className="EA">
        <h2>Empathetic Approach</h2>
        <div className="tape">
          <img src={washiTape} className="tape-1" alt="" loading="lazy" />
          <img src={washiTape} className="tape-2" alt="" loading="lazy" />
          <p>I craved my grandma&apos;s dumplings. But the recipe? Lost — scattered between old bookmarks, screenshots, and kitchen junk drawer. After an hour of searching, I gave up.</p>
        </div>
        <h3>The AHA Moment</h3>
        <p>That&apos;s when it struck me — I needed one simple, personal space where all my recipes could come together and my cherished food memories could be preserved!</p>
        <h3>Interview Research</h3>
        <p>To validate my idea and explore its potential, I quickly dove into research, interviewing five home cooks between the ages of 25 and 60. To understand :</p>
        <ul>
          <li>How people currently store and access their recipes.</li>
          <li>Identify pain points in both analog (paper, notebooks) and digital (apps, screenshots) systems.</li>
          <li>Explore the emotional connections tied to cooking and recipe sharing.</li>
        </ul>
        <h6 className="notation">Affinity Map of Interview Insights</h6>
        <img src={affinityMap} alt="affinity map" className="case-study-image img-wide" loading="lazy" />
        <p><strong>I organized the interview results and quotes into themes, then synthesized them into clear insights.</strong></p>
        <div className="two-rows-wide">
          <div>
            <h4>Functional Needs</h4>
            <p>What helps to store, find, and use recipes effectively</p>
            <ul className="ul-content">
              <li>Centralized storage: A single place to store all recipes (handwritten, printed, screenshots, saved links) to avoid duplication and fragmentation.</li>
              <li>Quick search & retrieval: Ability to easily find recipes, including handwritten ones, with keyword search.</li>
              <li>Context for saved recipes: Store source, date, and instructions when saving screenshots or links.</li>
              <li>Ingredient check on-the-go: Easy access and scroll-friendly design for checking ingredients while shopping.</li>
              <li>Flexible input formats: Support for photos, voice notes, text, and tags to capture recipe details in different situations.</li>
              <li>Organization by tags/folders: Seasonal folders, mood tags (“comfort food,” “lazy night”), and custom categories.</li>         
            </ul>
          </div>
          <div>
            <h4>Emotional Needs</h4>
            <p>What makes the experience personally meaningful</p>
            <ul className="ul-content">
              <li>Memory preservation: Recipes are tied to family history, and personal memories (e.g., great aunt&apos;s soup).</li>
              <li>Legacy building: Desire to pass recipes to children or future generations.</li>
              <li>Self-expression & identity: Cooking is a way of keeping culture alive and sharing a part of oneself.</li>
              <li>Nostalgia & connection: Revisiting old recipes brings back moments spent cooking with others.</li>
              <li>Creativity & improvisation: Freedom to adapt recipes or turn mistakes into new dishes.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Define</h2>
        <h3>Personas</h3>
        <p>After synthesizing the interview findings, I distilled recurring patterns in goals, frustrations, and behaviors into three personas to represent the key user groups.</p>
        <div className="personas">
          <img src={personaOne} alt="first persona" loading="lazy" />
          <img src={personaTwo} alt="second persona" loading="lazy" />
          <img src={personaThree} alt="third persona" loading="lazy" />
        </div>
        <h3>Opportunity Map</h3>
        <p>With the personas established, I mapped their needs and pain points against potential solutions, creating an opportunity map to guide feature ideation and prioritization.</p>
        <img src={opportunityMap} alt="opportunity map" className="case-study-image img-wide" loading="lazy" />
        <h3>Competitive Analysis</h3>
        <p>I analyzed popular recipe management tools to uncover market gaps and define opportunities for my product to stand out. While existing apps vary in functionality, none address the users&apos; emotional needs.</p>
        <img src={competitiveAnalysis} alt="competitive analysis" className="case-study-image img-wide" loading="lazy" />
        <h3>Problem Statement</h3>
        <p>Grounded in user needs and market insights, I articulated a problem statement that defines the core challenge and sets the vision for my app.</p>
        <p className="statement">Home cooks often juggle recipes from social media, websites, and family notes across multiple tools that feel either too rigid or too impersonal. Existing apps focus on function, but rarely capture the warmth and nostalgia of a personal recipe book. My solution blends practical kitchen features with a meaningful, story-driven space for cooking memories.</p>
      </section>

      <section>
        <h2>Ideate</h2>
        <h3>Feature Ideas</h3>
        <p>With a clear understanding of our users, the market landscape, and the core challenges outlined in the Define stage, I am now moving into the Ideate stage to explore potential features and creative solutions that address these needs effectively. The pinned items are not included in the final design due to prioritization and time constraints.</p>
        <img src={featureIdeas} alt="feature ideas" className="case-study-image img-wide" loading="lazy" />
        <h3>User Flows</h3>
        <p>I am mapping the two primary user flows—creating a recipe and cooking with a recipe—to clearly identify where features should be positioned for an intuitive user experience.</p>
        <img src={userFlows} alt="user flows" className="case-study-image img-wide" loading="lazy" />
        <h3>Sitemap</h3>
        <p>Translating user flows into a coherent information structure, the sitemap defines how content and functionality are organized across the product.</p>
        <img src={siteMap} alt="site map" className="case-study-image img-wide" loading="lazy" />
      </section>

      <section>
        <h2>Design Process</h2>
        <h3>Sketches & Wireframes</h3>
        <p>I begin my process with quick paper sketches to explore different layouts and flows efficiently. From there, I move into mid-fidelity wireframes using real text content to better define the app&apos;s structure and composition.</p>
        <img src={sketches} alt="Paper sketches exploring recipe layouts" className="case-study-image img-narrow" loading="lazy" />
        <img src={wireframes} alt="wireframes" className="case-study-image img-wide" loading="lazy" />
        <h3>Usability Test & Reflections</h3>
        <p>I conducted usability testing on the mid-fi prototype with three participants and distilled their feedback into five key opportunities for improvement. These insights directly informed the updated design, which is reflected in the hi-fi mockups.</p>
        <img src={usabilityTest} alt="usability test" className="case-study-image img-wide" loading="lazy" />
        <h3>Moodboard & Inspiration</h3>
        <p>I wanted my design to evoke a retro, handmade aesthetic, so I focused on keywords such as vintage, handwritten, nostalgic, and scrapbook-inspired elements. I aimed to capture the warmth and personality of handcrafted work, blending textures and layered visuals to create a sense of authenticity, inviting viewers to connect with the design on an emotional level.</p>
        <img src={moodboard} alt="moodboard" className="case-study-image img-wide" loading="lazy" />
        <h3>Design Systems</h3>
        <h4>Colors</h4>
        <p>The primary color is inspired by the familiar blue of a ballpoint pen, reinforcing the nostalgic, handwritten recipe book aesthetic. All color choices were tested to ensure they meet WCAG contrast accessibility standards.</p>
        <h4>Typography</h4>
        <p><strong>Roboto</strong> was chosen for navigation and UI elements because of its clean, neutral character, ensuring it doesn&apos;t compete with the recipe content. For body text, <strong>Lora</strong> was selected to evoke the warmth of printed cookbooks while maintaining excellent readability on digital screens.</p>
        <img src={typography} alt="typography and colors" className="case-study-image img-narrow" loading="lazy" />
        <h4>Components</h4>
        <p>The components follow a consistent, minimal style to balance function with personality, ensuring that the design feels approachable while keeping the focus on the recipes themselves.</p>
        <img src={components} alt="components" className="case-study-image img-narrow" loading="lazy" />
        <h3>Hi-fi Mockups</h3>
        <p>Informed by usability test feedback (stated above), I crafted high-fidelity mockups organized into five categories, reflecting improved usability and user needs.</p>
        <img src={hiFiMockups} alt="hi-fi mockups" className="case-study-image img-wide" loading="lazy" />
        <a href="https://www.figma.com/proto/XHfVS5PfgTDhX0BusNRhBY/SAVR?page-id=39%3A922&node-id=102-1275&p=f&viewport=529%2C444%2C0.07&t=vB6orAtn0UGjY2OJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=102%3A1275&show-proto-sidebar=1" target="_blank" rel="noreferrer" className="button mid-place">View Hi-fi Prototype</a>
        <h3>Responsive / multi-device variations</h3>
        <p>Since SAVR can be used in different contexts—such as following a recipe on a tablet in the kitchen or composing one on a desktop—it&apos;s designed as a cross-device app for seamless use.</p>
        <img src={responsiveDevices} alt="responsive mockups" className="case-study-image img-wide" loading="lazy" />
        <h3 id="demo-video">Prototype Presentation</h3>
        <p>Take a look at the SAVR demo video!</p>
        <video src={walkthroughVideo} className="demo-video" controls playsInline preload="metadata" aria-label="SAVR prototype walkthrough"></video>
      </section>

      <section>
        <h2>Final Thoughts</h2>
        <div>
          <p>This project reinforced the importance of grounding design decisions in both user needs and emotional experiences. While many recipe apps excel at functionality, they often overlook the personal and emotional connection users have with cooking. By exploring user pain points, mapping flows, and testing prototypes, I was able to create a solution that balances practicality with delight.</p>
          <p>One key takeaway was the value of simplicity: even small features, when thoughtfully placed, can significantly enhance the cooking experience. Additionally, usability testing highlighted how assumptions can differ from actual user behavior, emphasizing the need for iterative design.</p>
          <p>Moving forward, I see opportunities to further personalize the app through customizable themes and social features that foster community around cooking. Overall, this project strengthened my skills in user research, flow mapping, and translating insights into meaningful, user-centered design solutions.</p>
        </div>
      </section>

      <footer className="case-study-footer">
        <Link className="back-link" href="/#projects">← Back to projects</Link>
        <a className="back-link" href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
