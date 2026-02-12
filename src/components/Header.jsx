import React from "react";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <div className="logo-icon"></div>
            Positivus
          </div>

          <div className="nav-links">
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
          </div>

          <button className="nav-button">Request a quote</button>

          <button className="mobile-menu">
            <Menu size={28} />
          </button>
        </nav>
      </div>
    </header>
  );
}