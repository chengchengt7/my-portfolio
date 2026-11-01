import "./projects.css";
const savrVideo = "/SAVR/home-SAVR-video-transparent.webm";
const savrTablet = "/SAVR/home-SAVR-tablet.png";
const savrDemo = "/SAVR/SAVR walk through.mp4";
const foraDemo = "/Fora/fora-walk-through.webm";
const foraCard = "/Fora/4.png";
import type { ProjectCardProps } from "@/components/ProjectCard/ProjectCard";

export type Project = ProjectCardProps & {
  id: string;
};

export const projects: Project[] = [
  {
    id: "fugleblikk",
    name: "Fugleblikk - explore birdlife in norway",
    skills: [
      "Next.js",
      "TypeScript",
      "MapLibre GL",
      "API integration",
      "Product design",
    ],
    description:
      "Explore Norway's birdlife on an interactive globe. Discover birds near where they've been observed, listen to their calls, and dive into each species' story.",
    media: (
      <img
        className="fugleblikk-desktop"
        src="/Fugleblikk/bird-hero3-desktop.png"
        alt="project hero photo"
      />
    ),
    actions: [
      {
        label: "View case study",
        href: "/projects/fugleblikk",
      },
      {
        label: "Visit site",
        href: "https://fugleblikk.vercel.app/",
        variant: "secondary",
      },
      {
        label: "View code",
        href: "https://github.com/chengchengt7/fugleblikk",
        variant: "secondary",
      },
    ],
  },
  {
    id: "fora",
    name: "Fora - discover edible wild plants",
    mediaPosition: "right",
    skills: ["TypeScript", "Product design", "API integration", "Gemini API"],
    description:
      "Discover edible wild plants around you! Perfect for foragers and wild-food enthusiasts.",
    media: (
      <div className="fora-showcase">
        <video
          className="fora-video"
          src={foraDemo}
          aria-label="Fora plant discovery walkthrough preview"
          autoPlay
          loop
          muted
          playsInline
        />
        <img
          className="fora-image"
          src={foraCard}
          alt="Fora plant discovery app screenshot"
        />
      </div>
    ),
    actions: [
      {
        label: "View case study",
        href: "/projects/fora",
      },
      {
        label: "Watch demo",
        href: foraDemo,
        variant: "secondary",
      },
      {
        label: "View code",
        href: "https://github.com/chengchengt7/Fora---discover-edible-wild-plants",
        variant: "secondary",
      },
    ],
  },
  {
    id: "video-poker",
    name: "Video Poker Game",
    skills: ["React", "Zustand", "React Router", "TypeScript"],
    description:
      "A browser-based video poker game built with React and TypeScript.",
    media: (
      <img
        className="poker-img"
        src="/video-poker/poker-hero-macbook.png"
        alt="Video Poker game displayed in a straight-on MacBook frame"
      />
    ),
    actions: [
      {
        label: "View case study",
        href: "/projects/video-poker",
      },
      {
        label: "Play game",
        href: "https://video-poker-game.vercel.app/",
        variant: "secondary",
      },
      {
        label: "View code",
        href: "https://github.com/chengchengt7/school-260910-video-poker",
        variant: "secondary",
      },
    ],
  },
  {
    id: "savr",
    name: "SAVR - Personal Recipe Manager",
    mediaPosition: "right",
    skills: ["Product design", "UX design", "Figma"],
    description:
      "SAVR is a retro-inspired recipe journal for capturing your unique culinary adventures. With no preloaded library, it's a hand-picked collection of dishes you've cooked, loved, and plan to try, enhanced by shopping list generation and AI-powered search.",
    media: (
      <div className="savr-showcase">
        <video
          className="savr-showcase-video"
          src={savrVideo}
          aria-label="SAVR recipe manager preview"
          autoPlay
          loop
          muted
          playsInline
        />
        <img
          className="savr-showcase-tablet"
          src={savrTablet}
          alt="SAVR recipe manager shown on a tablet"
        />
      </div>
    ),
    actions: [
      {
        label: "View case study",
        href: "/projects/savr",
      },
      {
        label: "Watch demo",
        href: savrDemo,
        variant: "secondary",
      },
    ],
  },
];
