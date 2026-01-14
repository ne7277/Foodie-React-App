import { useState } from "react";
import "./Signinup.css";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="auth-overlay">
      <div className="auth-container">
        <button className="close-btn" onClick={() => navigate("/")}>Exit</button>

        <h2 className="sign">{isSignIn ? "Sign In" : "Sign Up"}</h2>

        <form className="auth-form">
          {!isSignIn && (
            <input type="text" placeholder="Full Name" required />
          )}

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          {!isSignIn && (
            <input type="password" placeholder="Confirm Password" required />
          )}

          <button type="submit">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="toggle-text">
          {isSignIn ? "New user?" : "Already have an account?"}
          <span onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? " Sign Up" : " Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
