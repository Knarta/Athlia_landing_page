import "./Footer.css";

/**
 * Footer component
 *
 * This component displays the footer with copyright and useful links.
 *
 * - The returned JSX contains:
 *   - Copyright information
 *   - Useful links
 *   - Legal links
 *   - Development information
 */
function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Athlia</h4>
            <p>
            Transform your body with an innovative, personalised fitness platform.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Useful links</h4>
            <ul>
              <li><a href="/#about-section">About us</a></li>
              <li><a href="/#features-section">Features</a></li>
              <li><a href="/#contact-section">Contact</a></li>
              <li><a href="/login">Connection</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Légal</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Development</h4>
            <ul>
              <li><a href="https://github.com/Bree-Coding" target="_blank" rel="noopener noreferrer">Brenda - Front-End</a></li>
              <li><a href="https://github.com/HLS-976" target="_blank" rel="noopener noreferrer">Hilliass - Back-End</a></li>
              <li><a href="https://github.com/Knarta" target="_blank" rel="noopener noreferrer">Charlène - UI/UX</a></li>
              <li><span>Version bêta</span></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Athlia. All rights reserved.</p>
          <p>Developed with ❤️ for the fitness community</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 