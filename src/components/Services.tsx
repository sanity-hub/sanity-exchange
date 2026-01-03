"use client";

export default function Services() {
  return (
    <section className="services" id="services">
      <h2>
        Our Premium <span className="highlight">Services</span>
      </h2>

      <p className="services-subtitle">
        Professional solutions for all your gift card and payment needs
      </p>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🎁</div>
          <h3>Gift Card Trading</h3>
          <p>
            Trade any gift card from major brands worldwide. Instant quotes,
            competitive rates, and secure transactions guaranteed.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🌍</div>
          <h3>Global Pickup Services</h3>
          <p>
            Reliable pickup and delivery services available to any country.
            Fast, secure, and hassle-free international transactions.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">💳</div>
          <h3>Country AZA Available</h3>
          <p>
            AZA payment solutions for any country. Seamless cross-border
            transactions with competitive exchange rates.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🔒</div>
          <h3>Secure Transactions</h3>
          <p>
            Bank-level security for every transaction. we no deh tell "stort" here
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">⚡</div>
          <h3>Instant Processing</h3>
          <p>
            Lightning-fast verification and payment processing. Get your funds
            within minutes of transaction completion.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🎯</div>
          <h3>24/7 Support</h3>
          <p>
            Round-the-clock customer support team ready to assist you.
            Professional help whenever you need it.
          </p>
        </div>
      </div>
    </section>
  );
}
