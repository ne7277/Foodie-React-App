import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/footer/footer";
import Signinup from "./components/Header/Signinup/Signinup";
import AboutUs from "./components/footer/Aboutus/aboutus";
import ContactUs from "./components/Body/ContactUs";
import Error404 from "./components/Body/Error";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const showAuthPopup = location.pathname === "/signinup";

  return (
    <div className="app">
      <Header
        onSignInClick={() => navigate("/signinup")}
        onContactUsClick={() => setShowContactUs(true)}
      />

      <Outlet />

      {showAuthPopup && <Signinup onClose={() => navigate("/")} />}
      {showAboutUs && <AboutUs onClose={() => setShowAboutUs(false)} />}
      {showContactUs && <ContactUs onClose={() => setShowContactUs(false)} />}

      <Footer onAboutUsClick={() => setShowAboutUs(true)} />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "signinup",
        element: <Body />, 
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
