import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className="
        auth-overlay
        fixed inset-0 z-[1000]
        bg-black/60
        flex items-center justify-center
        px-4
      "
      onClick={() => navigate("/")}
    >
      <div
        className="
          auth-container
          relative
          w-full max-w-md
          rounded-3xl
          overflow-hidden
          shadow-2xl
          animate-popup
          bg-white
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-6 text-white">
          <h2 className="sign text-2xl font-bold">
            {isSignIn ? "Welcome Back 👋" : "Create Account ✨"}
          </h2>
          <p className="text-sm text-white/90 mt-1">
            {isSignIn
              ? "Sign in to continue ordering delicious food"
              : "Join Foodie and explore amazing restaurants"}
          </p>
        </div>

        {/* Close Button */}
        <button
          className="
            close-btn
            absolute top-4 right-4
            text-white/80
            hover:text-white
            text-xl
            transition
          "
          onClick={() => navigate("/")}
        >
          ✕
        </button>

        {/* Form Section */}
        <div className="px-8 py-6">
          <form className="auth-form flex flex-col gap-4">
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                required
                className="input-style"
              />
            )}

            <input
              type="email"
              placeholder="Email address"
              required
              className="input-style"
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="input-style"
            />

            {!isSignIn && (
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="input-style"
              />
            )}

            {/* CTA Button */}
            <button
              type="submit"
              className="
                mt-2
                w-full
                py-3
                rounded-xl
                font-semibold
                text-white
                bg-gradient-to-r from-orange-500 to-pink-500
                hover:from-pink-500 hover:to-orange-500
                transition-all duration-300
                hover:scale-[1.02]
              "
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Toggle */}
          <p className="toggle-text text-center text-sm text-gray-600 mt-5">
            {isSignIn ? "New to Foodie?" : "Already have an account?"}
            <span
              onClick={() => setIsSignIn(!isSignIn)}
              className="
                ml-1
                font-semibold
                text-orange-500
                cursor-pointer
                hover:underline
              "
            >
              {isSignIn ? "Create account" : "Sign in"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
