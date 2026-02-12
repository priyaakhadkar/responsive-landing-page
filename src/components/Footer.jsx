import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          <div className="footer-main">

            <div className="footer-logo">
              <div className="footer-logo-icon"></div>
              Positivus
            </div>

            <div className="footer-nav">
              <a href="/">About us</a>
              <a href="/">Services</a>
              <a href="/">Use Cases</a>
              <a href="/">Pricing</a>
              <a href="/">Blog</a>
            </div>

            <div className="footer-contact">
              <span className="contact-highlight">Contact us:</span>
              <div>Email: info@positivus.com</div>
              <div>Phone: 123-456-7890</div>
            </div>

          </div>

          <div className="newsletter">
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe to news
              </button>
            </form>
          </div>

          <div className="footer-bottom">
            <div>© 2023 Positivus. All Rights Reserved.</div>
            <a href="/">Privacy Policy</a>
          </div>

        </div>
      </div>
    </footer>
  );
}