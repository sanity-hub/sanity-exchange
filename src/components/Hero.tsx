"use client";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Global <span className="highlight">Gift Card Trading</span> Made{" "}
          <span className="highlight-blue">Simple</span>
        </h1>

        <p>
          Country <span style={{ color: "#ffd700", fontWeight: "bold" }}>AZA</span>{" "}
          available •{" "}
          <span style={{ color: "#4a90e2", fontWeight: "bold" }}>
            Pickup services
          </span>{" "}
          to any country •{" "}
          <span style={{ color: "#ffd700", fontWeight: "bold" }}>
            All gift cards
          </span>{" "}
          traded with{" "}
          <span style={{ color: "#fff", fontWeight: "bold" }}>
            Sanity Exchange
          </span>
        </p>

        <a href="#contact" className="cta-button">
          Get Started Today
        </a>
      </div>
    </section>
  );
}
