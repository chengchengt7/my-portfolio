import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul>
        <li>
          <Link href="/">Chengcheng Teng</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <a
            href="https://github.com/chengchengt7"
            target="_blank"
            aria-label="GitHub"
          >
            <img src="/github-logo.png" alt="GitHub" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
