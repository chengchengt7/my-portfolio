import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <ul>
        <li>
          <Link href="/" aria-label="Home">
            <span className="header-avatar">
              <img src="/profile-pic.jpg" alt="" width={40} height={40} />
            </span>
          </Link>
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
