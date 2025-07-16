import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Bouton cliqué !'); // Debug
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    console.log('Données du formulaire:', { name, email, message }); // Debug
    
    // URL Discord
    const webhookUrl = 'https://discord.com/api/webhooks/1390714640765554778/LLrjz2IrnDarGa5XI8nxCwwT-Z3tcPI-o3IkczDVj2sHDhDiGAFVcqM_PakdlEvrhvr4';
    
    const discordMessage = {
      content: `📧 **Nouveau feedback Athlia**\n\n👤 **Nom:** ${name}\n📧 **Email:** ${email}\n💬 **Message:** ${message}\n\n---\n*Sent from the Athlia site*`
    };
    
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage)
      });
      
      if (response.ok) {
        setSuccess(true);
        event.target.reset();
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    }
  };

  return (
    <section id="contact-section" style={{ position: 'relative', zIndex: 9999, pointerEvents: 'auto' }}>
      <div className="contact-container" style={{ position: 'relative', zIndex: 9999, pointerEvents: 'auto' }}>
        <h2 className="contact-title">Contact & Support</h2>
        
        <div className="contact-content" style={{ position: 'relative', zIndex: 9999, pointerEvents: 'auto' }}>
          <div className="contact-info" style={{ position: 'relative', zIndex: 9999, pointerEvents: 'auto' }}>
            <h3>Our Team</h3>
            <p>
              Athlia is developed by a team of 3 passionate developers in fitness and technology. 
              We work together to create an exceptional user experience.
            </p>
            
            <div className="team-members">
              <div className="team-member">
                <h4>Brenda</h4>
                <p className="role">Front-End Developer</p>
                <div className="social-links">
                  <a href="https://github.com/Bree-Coding" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">💻</span> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/brenda-pollagba/" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">💼</span> LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="team-member">
                <h4>Hilliass</h4>
                <p className="role">Back-End Developer</p>
                <div className="social-links">
                  <a href="https://github.com/HLS-976" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">💻</span> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/hilliass-soumahill/" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">💼</span> LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="team-member">
                <h4>Charlène</h4>
                <p className="role">Designer UI/UX</p>
                <div className="social-links">
                  <a href="https://github.com/Knarta" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">💻</span> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/charlène-billot-mornet/" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">💼</span> LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-details">
              <div className="beta-badge">
                <span className="beta-icon">🚀</span>
                <span className="beta-text">Version bêta</span>
                <span className="beta-status">In development</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form" style={{ position: 'relative', zIndex: 9999, pointerEvents: 'auto' }}>
            <h3>Send us your feedback</h3>
            
            {success ? (
              <div className="success-message-feedback">
                <h4>Thank you for your feedback! 🙏</h4>
                <p>Your message has been sent to the Athlia team.<br/>We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 9999, pointerEvents: 'auto' }}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="votre@email.com" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your feedback, suggestions or questions..."
                    rows="4"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  style={{
                    position: 'relative',
                    zIndex: 9999,
                    pointerEvents: 'auto',
                    cursor: 'pointer'
                  }}
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 