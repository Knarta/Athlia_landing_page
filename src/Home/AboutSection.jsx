import "./AboutSection.css";


// Section qui présente la mission et innovation d'Athlia 
const AboutSection = () => {
  return (
    <section id="about-section">
      <div className="about-container">
        <h2 className="about-title">About Athlia</h2>
        
        <div className="about-content">
          <div className="about-card">
            <h3>Our mission</h3>
            <p>
              Make fitness accessible to everyone, even with physical limitations. 
              Athlia automatically adapts the exercises to your injuries, your level 
              and your goals, for safe and effective training.
            </p>
          </div>
          
          <div className="about-card">
            <h3>Our Innovation</h3>
            <p>
              Our 3D interactive skeleton revolutionizes exercise selection. 
              Click on the muscle areas you want to work on and discover 
              instantly the exercises adapted to your physical limitations.
            </p>
          </div>
          
          <div className="about-card">
            <h3>Advanced Personalization</h3>
            <p>
              Create your fitness profile with your goals, level and limitations. 
              Athlia automatically filters the exercises to offer only those that suit you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 