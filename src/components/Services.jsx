import { ChevronRight } from "lucide-react";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-description">
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="services-grid">
          {/* Service 1 */}
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
                  <circle cx="30" cy="30" r="20" fill="#B9FF66" opacity="0.3" />
                  <circle cx="70" cy="50" r="15" fill="#191A23" opacity="0.2" />
                  <path
                    d="M 20 20 L 80 60"
                    stroke="#191A23"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Service 2 */}
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
                  <rect
                    x="20"
                    y="20"
                    width="60"
                    height="40"
                    fill="white"
                    opacity="0.5"
                    rx="4"
                  />
                  <path
                    d="M 30 50 L 50 30 L 70 50"
                    stroke="#191A23"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

