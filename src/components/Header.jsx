import "./Header.css";

/**
 * Header component
 *
 * This component displays the header for all pages.
 *
 * - The returned JSX contains:
 *   - A header bar with the logo on the left (clickable, links to home).
 *   - Un bouton "Login" qui pointe vers la page de login, à droite.
 *   - Un bouton "Sign Up" qui pointe vers la page d'inscription, à droite.
 *   - Les deux boutons sont espacés avec la classe CSS "header-buttons".
 */
function Header() {
  // Fonction pour afficher une alerte
  const handleComingSoon = (e) => {
    e.preventDefault();
    alert('Feature coming soon');
  };
  return (
    <header id="header">
      {/* Header bar with logo, login and signup buttons */}
      <div id="logo">
        {/* Logo with button to go back to home page */}
        <a href="/Athlia_landing_page/">
          <img src="/Athlia_landing_page/Logo.png" alt="Logo" />
        </a>
      </div>
      {/* login button */}
      <div className="header-buttons">
        <button id="header-login" onClick={handleComingSoon} style={{cursor: 'not-allowed', opacity: 0.7}}>Connection</button>
        {/* Sign Up button */}
        <button id="header-signup" onClick={handleComingSoon} style={{cursor: 'not-allowed', opacity: 0.7}}>Sign Up</button>
      </div>
    </header>
  );
}

export default Header; 