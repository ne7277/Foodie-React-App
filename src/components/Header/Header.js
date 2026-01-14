import { useNavigate } from "react-router-dom";

const Header = ({ }) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img className="logo" src="https://img.pikbest.com/png-images/20241111/-22creative-food-logo-collection-for-culinary-brands-22_11079861.png!bw700" alt="Foodie Logo" />
          <h1 className="logo-text">Foodie</h1>
        </div>
        <nav className="navbar">
          <ul>  
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/signinup")}>My Account</li>
            <li onClick={() => navigate("/contactus")}>
              Contact Us</li>
            <li>Cart 🛒</li>
            <li onClick={() => navigate("/signinup")}>
              Sign In
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
