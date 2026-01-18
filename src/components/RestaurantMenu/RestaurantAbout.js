import aboutData from "../../data/RestaurantsAbout.json";

const RestaurantsAbout = ({ resId, onClose }) => {
  const restaurant = aboutData[resId];

  if (!restaurant || !restaurant.about) return null;

  const { name, about } = restaurant;

  return (
    <div className="about-overlay" onClick={onClose}>
      <div
        className="about-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>{name}</h2>
        <p className="about-desc">{about.description}</p>

        <div className="about-details">
          <p><strong>Established:</strong> {about.since}</p>
          <p><strong>Timings:</strong> {about.timings}</p>
          <p><strong>Contact:</strong> {about.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsAbout;
