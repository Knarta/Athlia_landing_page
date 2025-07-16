import "./CardsFeatures.css";

// Affichage cards de fonctionnalités

function CardsFeatures() {
  return (
    <section id="cards-features">
      {/* Progress Tracking card */}
      <div className="card">
        <h3>Progress Tracking</h3>
        <p>
          Track your progress and stay motivated with detailed statistics and visualizations.
        </p>
      </div>
      {/* Personalized Programs card */}
      <div className="card">
        <h3>Personalized Programs</h3>
        <p>
          Create personalized programs adapted to your level and goals, updated as you progress.
        </p>
      </div>
      {/* 3D Mannequin card */}
      <div className="card">
        <h3>Mannequin 3D</h3>
        <p>Use a 3D mannequin to choose the part you want to work on.</p>
      </div>
    </section>
  );
}

export default CardsFeatures;