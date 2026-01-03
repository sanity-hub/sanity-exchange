"use client";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          Sanity <span>Exchange</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="nav-cta">
            <a
              href="https://wa.me/2347017668021"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
