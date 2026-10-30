import "./projects.css";
const videoPokerHero = "/video-poker/hero.png";
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
    id: "video-poker",
    name: "Video Poker Game",
    skills: ["React", "Zustand", "React Router", "TypeScript"],
    description:
      "A browser-based video poker game built with React and TypeScript.",
    media: (
      <img
        className="poker-img"
        src={videoPokerHero}
        alt="Video Poker game interface"
      />
    ),
    actions: [
      {
        label: "Play game",
        href: "https://video-poker-game.vercel.app/",
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
    skills: ["UX design", "Product design"],
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
  {
    id: "fora",
    name: "Fora - discover edible wild plants",
    skills: [
      "Product design",
      "UX design",
      "TypeScript",
      "API integration",
      "Gemini AI",
    ],
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
];
