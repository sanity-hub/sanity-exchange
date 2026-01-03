"use client";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>
          Get In <span className="highlight">Touch</span>
        </h2>

        <p className="contact-subtitle">
          Ready to trade? Reach out today and experience fast, secure,
          and professional service.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <span>📱</span>
            <a href="tel:+2347017668021">+234 701 766 8021</a>
          </div>

          <div className="contact-item">
            <span>📧</span>
            <span>support@sanityexchange.com</span>
          </div>

          <div className="contact-item">
            <span>🌍</span>
            <span>Global Service • All Countries Supported</span>
          </div>
        </div>
      </div>
    </section>
  );
}
