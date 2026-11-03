import "./projects.css";
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
          src="/Fora/fora-walk-through.webm"
          aria-label="Fora plant discovery walkthrough preview"
          autoPlay
          loop
          muted
          playsInline
        />
        <img
          className="fora-image"
          src="/Fora/4.png"
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
        href: "/Fora/fora-walk-through.webm",
        variant: "secondary",
      },
      {
        label: "View code",
        href: "https://github.com/chengchengt7/fora",
        variant: "secondary",
      },
    ],
  },
  {
    id: "video-poker",
    name: "Video Poker Game",
    skills: ["React", "Zustand", "React Router", "TypeScript"],
    description:
      "My first complete React project: a playable video poker game with saved player balances, persistent rounds, and card animations.",
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
      "A recipe-journal concept for keeping family recipes and cooking memories together. I designed and tested a Figma prototype with recipe organisation, cooking steps, and shopping lists.",
    media: (
      <div className="savr-showcase">
        <video
          className="savr-showcase-video"
          src="/SAVR/home-SAVR-video-transparent.webm"
          aria-label="SAVR recipe manager preview"
          autoPlay
          loop
          muted
          playsInline
        />
        <img
          className="savr-showcase-tablet"
          src="/SAVR/home-SAVR-tablet.png"
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
        href: "/SAVR/SAVR walk through.mp4",
        variant: "secondary",
      },
    ],
  },
];
