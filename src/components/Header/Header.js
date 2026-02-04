import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();

  return (
    <header className="HEADER sticky top-0 z-50 bg-[#1f1f1f]/95 backdrop-blur-md shadow-lg font-serif">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={() => navigate("/")}
        >
          <img
            src="https://img.pikbest.com/png-images/20241111/-22creative-food-logo-collection-for-culinary-brands-22_11079861.png!bw700"
            alt="Foodie Logo"
            className="w-20 transition-transform duration-300 hover:scale-110"
          />
          <h1 className="text-3xl font-bold tracking-wide text-orange-500">
            Foodie
          </h1>
        </div>

        {/* NAVBAR */}
        <nav className="mt-4 w-full sm:mt-0 sm:w-auto">
          <ul className="flex flex-wrap items-center gap-6 text-white">
            
            <li
              onClick={() => navigate("/")}
              className="group relative cursor-pointer rounded-md px-2 py-1 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-[#ff5722]"
            >
              Home {onlineStatus ? "✅" : "🔴"}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li
              onClick={() => navigate("/signinup")}
              className="group relative cursor-pointer rounded-md px-2 py-1 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-[#ff5722]"
            >
              My Account
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li
              onClick={() => navigate("/contactus")}
              className="group relative cursor-pointer rounded-md px-2 py-1 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-[#ff5722]"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="group relative cursor-pointer rounded-md px-2 py-1 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-[#ff5722]">
              Cart 🛒
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li
              onClick={() => navigate("/signinup")}
              className="rounded-full bg-[#ff5722] px-4 py-1.5 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-orange-600 cursor-pointer"
            >
              Sign In
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
