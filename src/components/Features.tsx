"use client";

export default function Features() {
  return (
    <section className="features">
      <div className="features-intro">
        <h2>Why Choose Us</h2>
        <p className="features-subtitle">
          Built for speed, trust, and global reach with Sanity Exchange deliverys
          premium service without compromise.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">✨</div>
          <h3>Best Rates</h3>
          <p>
            We constantly monitor the market to ensure you get competitive,
            fair, and transparent exchange rates every time.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">💱</div>
          <h3>Fast Service</h3>
          <p>
            Speed matters. Our streamlined process ensures quick verification
            and instant payouts with no unnecessary delays.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">🛡️</div>
          <h3>100% Secure</h3>
          <p>
            Your transactions are protected with industry-grade security,
            ensuring safety, privacy, and peace of mind.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">🌟</div>
          <h3>Trusted Brand</h3>
          <p>
            Trusted by clients across borders, we’ve built a reputation on
            reliability, consistency, and professional integrity.
          </p>
        </div>
      </div>
    </section>
  );
}
