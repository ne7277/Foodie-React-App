import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = ({onClose}) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        fixed inset-0 z-[1000]
        bg-black/60
        flex items-center justify-center
        px-4
      "
      onClick={onClose}
    >
      {/* About Container */}
      <div
        className="
          relative
          bg-white
          max-w-3xl w-full
          p-8
          rounded-2xl
          shadow-2xl
          animate-popup
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
        aria-label="Close About"
          className="text-red-600 absolute top-6 right-6
           w-10 h-10 rounded-full
           bg-white/20 hover:bg-white/30
           flex items-center justify-center
           text-lg font-semibold cursor-pointer
           transition"
        >
          ✕ 
        </button>

        {/* Title */}
        <h1
          className="
            text-3xl md:text-4xl
            font-bold
            text-center
            text-gray-800
            mb-6
          "
        >
          About Foodie
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-center leading-relaxed mb-4">
          <strong>Foodie</strong> is a modern food discovery and delivery
          platform designed to connect people with their favorite restaurants
          and cuisines. We aim to make food ordering simple, fast, and
          delightful.
        </p>

        <p className="text-gray-600 text-center leading-relaxed">
          From local street food vendors to premium restaurants, Foodie helps
          users explore a wide range of dining options with transparent pricing,
          real reviews, and seamless ordering.
        </p>

        {/* Sections */}
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <div
            className="
              flex-1
              bg-orange-50
              p-6
              rounded-2xl
              shadow-md
              hover:shadow-lg
              transition
            "
          >
            <h3 className="text-lg font-semibold mb-2">
              🍽️ Our Mission
            </h3>
            <p className="text-sm text-gray-600">
              To empower restaurants and delight customers by delivering
              high-quality food experiences anytime, anywhere.
            </p>
          </div>

          <div
            className="
              flex-1
              bg-orange-50
              p-6
              rounded-2xl
              shadow-md
              hover:shadow-lg
              transition
            "
          >
            <h3 className="text-lg font-semibold mb-2">
              🚀 Our Vision
            </h3>
            <p className="text-sm text-gray-600">
              To become the most trusted and user-friendly food platform across
              cities and communities.
            </p>
          </div>

          <div
            className="
              flex-1
              bg-orange-50
              p-6
              rounded-2xl
              shadow-md
              hover:shadow-lg
              transition
            "
          >
            <h3 className="text-lg font-semibold mb-2">
              ❤️ Our Values
            </h3>
            <p className="text-sm text-gray-600">
              Customer satisfaction, food safety, innovation, and
              community-driven growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
