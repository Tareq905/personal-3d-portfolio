import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Django Backend Developer</h4>
                <h5>Backend Systems Development</h5>
              </div>
              <h3>Early Phase</h3>
            </div>

            <p>
              Developed backend systems and REST APIs using Django, focusing on
              secure authentication, database architecture, and scalable server
              side application design. Built reliable data driven platforms and
              integrated backend services with modern frontend frameworks.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React.js Developer</h4>
                <h5>Frontend Engineering</h5>
              </div>
              <h3>Frontend Development</h3>
            </div>

            <p>
              Built modern single page applications using React.js with a focus
              on responsive UI, reusable component architecture, and seamless
              API integration. Optimized application performance and ensured a
              consistent user experience across devices.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Full Stack Systems Engineering</h5>
              </div>
              <h3>Platform Development</h3>
            </div>

            <p>
              Designed and developed scalable full stack platforms integrating
              modern frontend frameworks with robust backend services. Worked
              on system architecture, database management, and production ready
              deployment pipelines to support reliable applications.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer</h4>
                <h5>Artificial Intelligence & Computer Vision</h5>
              </div>
              <h3>Current Focus</h3>
            </div>

            <p>
              Developing AI powered systems integrating machine learning and
              computer vision models such as YOLO, OpenCV pipelines, and
              transformer based language models including GPT and BERT.
              Building intelligent platforms that combine AI with scalable
              application architectures for real world automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;