export default function Testimonials({
  testimonials,
  currentTestimonial,
  setCurrentTestimonial
}) {

  const prevTestimonial = () => {
    setCurrentTestimonial(
      currentTestimonial === 0
        ? testimonials.length - 1
        : currentTestimonial - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial(
      currentTestimonial === testimonials.length - 1
        ? 0
        : currentTestimonial + 1
    );
  };

  const t = testimonials[currentTestimonial];

  return (
    <section className="testimonials">
      <div className="container">

        <div className="testimonials-header">
          <span className="badge">Testimonials</span>
          <p className="testimonials-subtitle">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>

        <div className="testimonial-card">

          <div className="testimonial-bubble">
            <p className="testimonial-text">
              “{t.text}”
            </p>
          </div>

          <div className="testimonial-user">
            <h4>{t.author}</h4>
            <span>{t.position}</span>
          </div>

          <div className="testimonial-controls">

            <button
              className="arrow-btn"
              onClick={prevTestimonial}
            >
              ←
            </button>

            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={
                    i === currentTestimonial
                      ? "dot active"
                      : "dot"
                  }
                />
              ))}
            </div>

            <button
              className="arrow-btn"
              onClick={nextTestimonial}
            >
              →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}