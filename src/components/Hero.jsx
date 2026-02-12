import { Heart, Share2, Play, MapPin } from "lucide-react";
export default function Hero() {
  return (
    <>
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
</>


  );
}