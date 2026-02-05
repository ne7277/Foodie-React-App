import aboutData from "../../data/RestaurantsAbout.json";

const RestaurantsAbout = ({ resId, onClose }) => {
  const restaurant = aboutData[resId];

  if (!restaurant || !restaurant.about) return null;

  const { name, about } = restaurant;

  return (
    <div
      className="
        fixed inset-0 z-9999
        bg-black/60
        flex items-center justify-center
        px-4
      "
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="
          relative
          bg-white
          w-full max-w-lg
          rounded-xl
          p-6
          shadow-2xl
          animate-popup
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="
            absolute top-4 right-4
            text-xl
            text-gray-500
            hover:text-black
            transition
          "
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          {name}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {about.description}
        </p>

        {/* Details */}
        <div className="text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-semibold">Established:</span>{" "}
            {about.since}
          </p>
          <p>
            <span className="font-semibold">Timings:</span>{" "}
            {about.timings}
          </p>
          <p>
            <span className="font-semibold">Contact:</span>{" "}
            {about.contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsAbout;
