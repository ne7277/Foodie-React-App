import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  
  console.log(cartItems);
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
          <ul className="flex flex-wrap items-center gap-6 text-white 
          
          [&>li]:group relative [&>li]:cursor-pointer [&>li]:rounded-md [&>li]:px-2 [&>li]:py-1 [&>li]:text-lg [&>li]:font-medium [&>li]:transition-all [&>li]:duration-300 [&>li]:hover:scale-105 [&>li]:hover:bg-[#ff5722]
          
          [&>li_span]:absolute [&>li_span]:bottom-0 [&>li_span]:left-0 [&>li_span]:h-0.5 [&>li_span]:w-0 [&>li_span]:bg-white [&>li_span]:transition-all [&>li_span]:duration-800 [&>li:hover_span]:w-full">
            
            <li onClick={() => navigate("/")}>
              Home {onlineStatus ? "✅" : "🔴"}
              <span></span>
            </li>

            <li
              onClick={() => navigate("/signinup")}>
              My Account
              <span></span>
            </li>

            <li
              onClick={() => navigate("/contactus")}
            >
              Contact Us
              <span></span>
            </li>

            <li onClick={() => navigate("cart")}>
              Cart 🛒({cartItems.length})
              <span></span>
            </li>

            <li
              onClick={() => navigate("/signinup")}            >
              Sign In
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
