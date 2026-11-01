import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <nav aria-label="Main navigation">
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
            <img src="/github-logo.png" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
