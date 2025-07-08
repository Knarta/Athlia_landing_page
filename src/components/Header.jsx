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
    alert('Fonctionnalité à venir');
  };
  return (
    <header id="header">
      {/* Header bar with logo, login and signup buttons */}
      <div id="logo">
        {/* Logo with button to go back to home page */}
        <a href="/">
          <img src="/Logo.png" alt="Logo" />
        </a>
      </div>
      {/* login button */}
      <div className="header-buttons">
        <button id="header-login" onClick={handleComingSoon} style={{cursor: 'not-allowed', opacity: 0.7}}>Connexion</button>
        {/* Sign Up button */}
        <button id="header-signup" onClick={handleComingSoon} style={{cursor: 'not-allowed', opacity: 0.7}}>Inscription</button>
      </div>
    </header>
  );
}

export default Header; 