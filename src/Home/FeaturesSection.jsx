import { Link } from "react-router-dom";
import "./FeaturesSection.css";

// fonctionnalités principales d'Athlia
const FeaturesSection = () => {
  return (
    <section id="features-section">
      <div className="features-container">
        <h2 className="features-title">Detailed Features</h2>
        
        <div className="features-content">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <div className="feature-info">
              <h3>Personal Dashboard</h3>
              <p>
                Access your personal space to track your sports progress with 
                detailed statistics and personalised information.
              </p>
              <ul className="feature-benefits">
                <li>Exercise history</li>
                <li>Frequency of use by exercise</li>
                <li>Personalised progress tracking</li>
                <li>Muscle use by area</li>
                <li>Advice and recommendations</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <div className="feature-info">
              <h3>Personalised Exercises</h3>
              <p>
                Discover a library of exercises adapted to your needs. 
                Filter by muscle area and physical limitations to find 
                the exercises that suit you.
              </p>
              <ul className="feature-benefits">
                <li>Muscle area filtering (chest, arms, shoulders, etc.)</li>
                <li>Selection according to your physical limitations</li>
                <li>Varied exercise library</li>
                <li>Selection/deselection system</li>
                <li>Intuitive and responsive interface</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <div className="feature-info">
              <h3>Interactive 3D Skeleton</h3>
              <p>
                Use our interactive 3D skeleton to visually select the muscle areas you want to work on. 
                A modern and intuitive interface to personalise your training.
              </p>
              <ul className="feature-benefits">
                <li>Interactive 3D skeleton with rotation</li>
                <li>Precise selection of muscle areas</li>
                <li>Automatic filtering of exercises by area</li>
                <li>Automatic rotation controls</li>
                <li>Modern and responsive interface</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="signup-section">
          <div className="card signup-card">
            <p style={{
              fontWeight: 700,
              fontSize: '1.15em',
              letterSpacing: '-0.5px',
              color: '#e0f2fe'
            }}>
              Ready to discover everything Athlia can offer you&nbsp;?<br/>
              <span style={{color: '#60a5fa', fontWeight: 500}}>
                Join us and start transforming your routine today&nbsp;!
              </span>
            </p>
            <a href="/signup">
              <button className="cta-button" style={{
                fontWeight: 700,
                fontSize: '1.15rem',
                letterSpacing: '-0.5px',
                background: 'linear-gradient(90deg, #2460f2 0%, #4ade80 100%)',
                color: '#fff',
                boxShadow: '0 0 24px #2460f2aa'
              }}>
                Discover Athlia&nbsp;✨
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 