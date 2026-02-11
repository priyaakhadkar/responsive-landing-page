import React, { useState } from 'react';
import { Menu, ChevronRight, ChevronLeft, Heart, Share2, Play, MapPin, Star } from 'lucide-react';

export default function PositivusWebsite() {
  const [activeProcess, setActiveProcess] = useState(1);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Space Grotesk', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .header {
          padding: 24px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 24px;
          font-weight: 700;
        }

        .logo-icon {
          width: 28px;
          height: 28px;
          background: #191A23;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }

        .nav-links {
          display: none;
          gap: 40px;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: #191A23;
          font-size: 16px;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #B9FF66;
        }

        .nav-button {
          display: none;
          padding: 16px 32px;
          border: 1px solid #191A23;
          border-radius: 12px;
          background: white;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }

        .nav-button:hover {
          background: #191A23;
          color: white;
        }

        .mobile-menu {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
        }

        /* Hero Section */
        .hero {
          padding: 60px 0;
        }

        .hero-content {
          display: grid;
          gap: 40px;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 42px;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 24px;
          color: #191A23;
        }

        .hero-text p {
          font-size: 18px;
          line-height: 1.6;
          color: #191A23;
          margin-bottom: 32px;
        }

        .cta-button {
          padding: 18px 36px;
          background: #191A23;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }

        .cta-button:hover {
          background: #000;
          transform: translateY(-2px);
        }

        .hero-image {
          position: relative;
          padding: 40px 0;
        }

        .megaphone-illustration {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          position: relative;
        }

        .megaphone-base {
          width: 100%;
          height: auto;
        }

        .floating-icon {
          position: absolute;
          background: white;
          border-radius: 50%;
          padding: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 3s ease-in-out infinite;
        }

        .icon-1 {
          top: 10%;
          right: 10%;
          background: #191A23;
          color: white;
          animation-delay: 0s;
        }

        .icon-2 {
          top: 30%;
          right: 5%;
          background: #B9FF66;
          animation-delay: 0.5s;
        }

        .icon-3 {
          bottom: 30%;
          right: 8%;
          background: #191A23;
          color: white;
          animation-delay: 1s;
        }

        .icon-4 {
          bottom: 15%;
          right: 15%;
          background: #B9FF66;
          animation-delay: 1.5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Brands Section */
        .brands {
          padding: 40px 0;
          overflow: hidden;
        }

        .brands-grid {
          display: flex;
          gap: 40px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          filter: grayscale(100%);
          opacity: 0.6;
        }

        .brand-logo {
          font-size: 24px;
          font-weight: 600;
        }

        /* Services Section */
        .services {
          padding: 60px 0;
        }

        .section-header {
          margin-bottom: 48px;
        }

        .section-title {
          display: inline-block;
          background: #B9FF66;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .section-description {
          font-size: 16px;
          color: #191A23;
          max-width: 600px;
        }

        .services-grid {
          display: grid;
          gap: 32px;
        }

        .service-card {
          background: #F3F3F3;
          border: 1px solid #191A23;
          border-radius: 32px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 60px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .service-card:nth-child(2) {
          background: #B9FF66;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        .service-header h3 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .service-title {
          display: inline-block;
          background: #B9FF66;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 24px;
          font-weight: 600;
        }

        .service-card:nth-child(2) .service-title {
          background: white;
        }

        .service-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .learn-more {
          display: flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          transition: gap 0.3s;
        }

        .learn-more:hover {
          gap: 16px;
        }

        .arrow-circle {
          width: 40px;
          height: 40px;
          background: #191A23;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #B9FF66;
        }

        .service-illustration {
          width: 150px;
          height: 120px;
          background: rgba(185, 255, 102, 0.2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* Working Process Section */
        .working-process {
          padding: 60px 0;
        }

        .process-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .process-item {
          background: #F3F3F3;
          border: 1px solid #191A23;
          border-radius: 32px;
          padding: 32px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .process-item.active {
          background: #B9FF66;
        }

        .process-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .process-number {
          font-size: 48px;
          font-weight: 600;
        }

        .process-title-text {
          flex: 1;
          margin-left: 24px;
          font-size: 24px;
          font-weight: 600;
        }

        .process-toggle {
          width: 48px;
          height: 48px;
          border: 1px solid #191A23;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F3F3F3;
          font-size: 32px;
          transition: all 0.3s;
        }

        .process-item.active .process-toggle {
          background: white;
        }

        .process-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }

        .process-item.active .process-content {
          max-height: 300px;
          margin-top: 24px;
        }

        .process-description {
          font-size: 16px;
          line-height: 1.6;
          color: #191A23;
          padding-left: 96px;
        }

        /* Testimonials Section */
        .testimonials {
          padding: 60px 0;
        }

        .testimonials-slider {
          background: #191A23;
          border-radius: 32px;
          padding: 60px 20px 80px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .testimonials-track {
          display: flex;
          gap: 40px;
          transition: transform 0.5s ease;
          align-items: flex-start;
          justify-content: center;
        }

        .testimonial-card {
          min-width: 90%;
          max-width: 600px;
          background: #1a1b23;
          border: 2px solid #B9FF66;
          border-radius: 32px;
          padding: 40px;
          position: relative;
          flex-shrink: 0;
        }

        .testimonial-card::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-top: 20px solid #B9FF66;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 18px solid transparent;
          border-right: 18px solid transparent;
          border-top: 18px solid #1a1b23;
          z-index: 1;
        }

        .testimonial-text {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 0;
          color: white;
        }

        .testimonial-author-section {
          margin-top: 60px;
          text-align: center;
        }

        .testimonial-author {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 4px;
          color: #B9FF66;
        }

        .testimonial-position {
          font-size: 14px;
          color: #F3F3F3;
        }

        .testimonial-controls {
          display: flex;
          gap: 40px;
          align-items: center;
          justify-content: center;
          margin-top: 60px;
        }

        .nav-arrow {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .nav-arrow:hover {
          color: #B9FF66;
        }

        .testimonial-dots {
          display: flex;
          gap: 16px;
        }

        .dot {
          width: 16px;
          height: 16px;
          background: white;
          cursor: pointer;
          transition: all 0.3s;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .dot.active {
          background: #B9FF66;
        }

        /* Footer */
        .footer {
          background: #191A23;
          color: white;
          padding: 48px 0 24px;
          margin-top: 60px;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .footer-main {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 24px;
          font-weight: 700;
        }

        .footer-logo-icon {
          width: 28px;
          height: 28px;
          background: white;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-nav a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s;
        }

        .footer-nav a:hover {
          color: #B9FF66;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-highlight {
          background: #B9FF66;
          color: #191A23;
          padding: 6px 12px;
          border-radius: 6px;
          font-weight: 600;
          display: inline-block;
          width: fit-content;
        }

        .newsletter {
          background: #292A32;
          border-radius: 12px;
          padding: 32px;
          margin-top: 32px;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .newsletter-input {
          padding: 16px;
          border: 1px solid #3A3B44;
          border-radius: 8px;
          background: #191A23;
          color: white;
          font-size: 16px;
          font-family: 'Space Grotesk', sans-serif;
        }

        .newsletter-input::placeholder {
          color: rgba(255,255,255,0.5);
        }

        .newsletter-button {
          padding: 16px 32px;
          background: #B9FF66;
          color: #191A23;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .newsletter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(185, 255, 102, 0.4);
        }

        .social-links {
          display: flex;
          gap: 16px;
          margin-top: 24px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .social-icon:hover {
          background: #B9FF66;
          color: #191A23;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.1);
          margin-top: 32px;
        }

        .footer-bottom a {
          color: white;
          text-decoration: underline;
        }

        /* Mobile Styles - Default (up to 767px) */
        @media (max-width: 767px) {
          .container {
            padding: 0 16px;
          }

          .header {
            padding: 16px 0;
          }

          .hero {
            padding: 40px 0;
          }

          .hero-content {
            grid-template-columns: 1fr;
          }

          .hero-text h1 {
            font-size: 36px;
          }

          .hero-text p {
            font-size: 16px;
          }

          .cta-button {
            width: 100%;
            padding: 16px;
          }

          .hero-image {
            order: -1;
            padding: 20px 0;
          }

          .brands {
            padding: 30px 0;
          }

          .brands-grid {
            gap: 24px;
          }

          .brand-logo {
            font-size: 18px;
          }

          .services {
            padding: 40px 0;
          }

          .section-title {
            font-size: 28px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .service-card {
            padding: 32px 24px;
            gap: 40px;
          }

          .service-header h3 {
            font-size: 20px;
          }

          .service-title {
            font-size: 20px;
          }

          .service-illustration {
            width: 120px;
            height: 100px;
          }

          .working-process {
            padding: 40px 0;
          }

          .process-item {
            padding: 24px 20px;
          }

          .process-number {
            font-size: 36px;
          }

          .process-title-text {
            font-size: 20px;
            margin-left: 16px;
          }

          .process-toggle {
            width: 40px;
            height: 40px;
            font-size: 28px;
          }

          .process-description {
            padding-left: 0;
            margin-top: 16px;
          }

          .testimonials {
            padding: 40px 0;
          }

          .testimonials-slider {
            padding: 40px 16px 60px;
          }

          .testimonial-card {
            min-width: 100%;
            padding: 32px 24px;
          }

          .testimonial-text {
            font-size: 15px;
          }

          .testimonial-author-section {
            margin-top: 50px;
          }

          .testimonial-controls {
            margin-top: 50px;
            gap: 24px;
          }

          .nav-arrow {
            width: 40px;
            height: 40px;
          }

          .footer {
            padding: 40px 0 20px;
            margin-top: 40px;
          }

          .footer-content {
            gap: 32px;
          }

          .footer-main {
            flex-direction: column;
            gap: 24px;
          }

          .footer-nav {
            gap: 12px;
          }

          .newsletter {
            padding: 24px;
          }

          .newsletter-form {
            flex-direction: column;
            gap: 12px;
          }

          .social-links {
            margin-top: 20px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            padding-top: 24px;
            margin-top: 24px;
            font-size: 14px;
          }
        }

        /* Responsive Design - Tablet and Desktop */
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }

          .nav-button {
            display: block;
          }

          .mobile-menu {
            display: none;
          }

          .hero-content {
            grid-template-columns: 1fr 1fr;
          }

          .hero-text h1 {
            font-size: 56px;
          }

          .services-grid {
            grid-template-columns: 1fr 1fr;
          }

          .testimonial-card {
            min-width: 600px;
            max-width: 700px;
          }

          .footer-main {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }

          .newsletter-form {
            flex-direction: row;
          }

          .newsletter-input {
            flex: 1;
          }

          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        @media (min-width: 1024px) {
          .hero-text h1 {
            font-size: 64px;
          }

          .process-item {
            padding: 40px;
          }
        }
      `}</style>

      {/* Header */}
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

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Navigating the digital landscape for success</h1>
              <p>
                Our digital marketing agency helps businesses grow and succeed online through a range of
                services including SEO, PPC, social media marketing, and content creation.
              </p>
              <button className="cta-button">Book a consultation</button>
            </div>
            <div className="hero-image">
              <div className="megaphone-illustration">
                <svg viewBox="0 0 400 300" className="megaphone-base">
                  <defs>
                    <linearGradient id="megaphoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#e0e0e0', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#f5f5f5', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  {/* Megaphone body */}
                  <ellipse cx="280" cy="150" rx="80" ry="100" fill="url(#megaphoneGradient)" stroke="#191A23" strokeWidth="2"/>
                  <ellipse cx="280" cy="150" rx="50" ry="70" fill="white" stroke="#191A23" strokeWidth="2"/>
                  <path d="M 200 150 Q 150 150 120 150" stroke="#191A23" strokeWidth="3" fill="none"/>
                  <path d="M 120 130 L 120 170 L 80 180 L 80 120 Z" fill="url(#megaphoneGradient)" stroke="#191A23" strokeWidth="2"/>
                  
                  {/* Sound waves */}
                  <path d="M 60 140 Q 40 140 30 140" stroke="#B9FF66" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                  <path d="M 55 150 Q 30 150 20 150" stroke="#B9FF66" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                  <path d="M 60 160 Q 40 160 30 160" stroke="#B9FF66" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                  
                  {/* Decorative shapes */}
                  <circle cx="100" cy="80" r="8" fill="#191A23"/>
                  <circle cx="320" cy="80" r="6" fill="#B9FF66"/>
                  <polygon points="150,240 160,250 150,260 140,250" fill="#191A23"/>
                  <polygon points="330,220 340,230 330,240 320,230" fill="#191A23"/>
                </svg>
                
                <div className="floating-icon icon-1">
                  <Heart size={20} fill="white" />
                </div>
                <div className="floating-icon icon-2">
                  <Share2 size={20} />
                </div>
                <div className="floating-icon icon-3">
                  <Play size={20} fill="white" />
                </div>
                <div className="floating-icon icon-4">
                  <MapPin size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands">
        <div className="container">
          <div className="brands-grid">
            <div className="brand-logo">amazon</div>
            <div className="brand-logo">dribbble</div>
            <div className="brand-logo">HubSpot</div>
            <div className="brand-logo">Notion</div>
            <div className="brand-logo">NETFLIX</div>
            <div className="brand-logo">zoom</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Services</h2>
            <p className="section-description">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed
              online. These services include:
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-header">
                <h3 className="service-title">Search engine optimization</h3>
              </div>
              <div className="service-footer">
                <button className="learn-more">
                  <span className="arrow-circle">
                    <ChevronRight size={20} />
                  </span>
                  Learn more
                </button>
                <div className="service-illustration">
                  <svg width="100" height="80" viewBox="0 0 100 80">
                    <circle cx="30" cy="30" r="20" fill="#B9FF66" opacity="0.3"/>
                    <circle cx="70" cy="50" r="15" fill="#191A23" opacity="0.2"/>
                    <path d="M 20 20 L 80 60" stroke="#191A23" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <h3 className="service-title">Pay-per-click advertising</h3>
              </div>
              <div className="service-footer">
                <button className="learn-more">
                  <span className="arrow-circle">
                    <ChevronRight size={20} />
                  </span>
                  Learn more
                </button>
                <div className="service-illustration">
                  <svg width="100" height="80" viewBox="0 0 100 80">
                    <rect x="20" y="20" width="60" height="40" fill="white" opacity="0.5" rx="4"/>
                    <path d="M 30 50 L 50 30 L 70 50" stroke="#191A23" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="working-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Working Process</h2>
            <p className="section-description">
              Step-by-Step Guide to Achieving Your Business Goals
            </p>
          </div>
          <div className="process-list">
            <div 
              className={`process-item ${activeProcess === 1 ? 'active' : ''}`}
              onClick={() => setActiveProcess(activeProcess === 1 ? null : 1)}
            >
              <div className="process-header">
                <span className="process-number">01</span>
                <span className="process-title-text">Consultation</span>
                <div className="process-toggle">
                  {activeProcess === 1 ? '−' : '+'}
                </div>
              </div>
              <div className="process-content">
                <p className="process-description">
                  During the initial consultation, we will discuss your business goals and objectives, target
                  audience, and current marketing efforts. This will allow us to understand your needs and tailor
                  our services to best fit your requirements.
                </p>
              </div>
            </div>

            <div 
              className={`process-item ${activeProcess === 2 ? 'active' : ''}`}
              onClick={() => setActiveProcess(activeProcess === 2 ? null : 2)}
            >
              <div className="process-header">
                <span className="process-number">02</span>
                <span className="process-title-text">Research and Strategy Development</span>
                <div className="process-toggle">
                  {activeProcess === 2 ? '−' : '+'}
                </div>
              </div>
              <div className="process-content">
                <p className="process-description">
                  Our team conducts in-depth research to understand your market, competitors, and opportunities.
                  We then develop a comprehensive strategy tailored to your specific business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-description">
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing
              Services
            </p>
          </div>
          <div className="testimonials-slider">
            <div className="testimonials-track">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>
            </div>
            <div className="testimonial-author-section">
              <div className="testimonial-author">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="testimonial-position">
                {testimonials[currentTestimonial].position}
              </div>
            </div>
            <div className="testimonial-controls">
              <button className="nav-arrow" onClick={prevTestimonial}>
                <ChevronLeft size={28} />
              </button>
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
              <button className="nav-arrow" onClick={nextTestimonial}>
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div>
                <div className="footer-logo">
                  <div className="footer-logo-icon"></div>
                  Positivus
                </div>
              </div>
              <nav className="footer-nav">
                <a href="#about">About us</a>
                <a href="#services">Services</a>
                <a href="#use-cases">Use Cases</a>
                <a href="#pricing">Pricing</a>
                <a href="#blog">Blog</a>
              </nav>
              <div className="footer-contact">
                <div className="contact-highlight">Contact us:</div>
                <div>Email: info@positivus.com</div>
                <div>Phone: 555-567-8901</div>
                <div>Address: 1234 Main St</div>
                <div>Moonstone City, Stardust State 12345</div>
              </div>
            </div>
            
            <div className="newsletter">
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
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

            <div className="social-links">
              <div className="social-icon">in</div>
              <div className="social-icon">f</div>
              <div className="social-icon">𝕏</div>
            </div>

            <div className="footer-bottom">
              <div>© 2023 Positivus. All Rights Reserved.</div>
              <a href="#privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}