export default function WorkingProcess({
  activeProcess,
  setActiveProcess
}) {
  return (
    <>
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

    </>
  );
}