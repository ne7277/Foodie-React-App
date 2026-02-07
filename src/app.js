import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useMatch,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/footer/footer";
import Signinup from "./components/Header/Signinup/Signinup";
import AboutUs from "./components/footer/Aboutus/aboutus";
import ContactUs from "./components/Body/ContactUs";
import Error404 from "./components/Body/Error";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import RestaurantAbout from "./components/RestaurantMenu/RestaurantAbout";
import { Provider } from "react-redux";
import appStore from "./utils/Store/appStore";
import Cart from "./components/Header/Cart";

const AppLayout = () => {
  const navigate = useNavigate();

  const isAuthRoute = useMatch("/signinup");
  const isRestaurantAbout = useMatch("/restaurants/about/:resId");

  return (
    <Provider store={appStore}>
      <div>
      <Header
        onSignInClick={() => navigate("/signinup")}
        onContactUsClick={() => navigate("/contactus")}
      />

      <Outlet />

      {isAuthRoute && <Signinup onClose={() => navigate("/")} />}
      {isRestaurantAbout && <RestaurantAbout onClose={() => navigate(-1)} />}

      <Footer onAboutUsClick={() => navigate("/aboutus")} />
    </div>
    </Provider>
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
        path: "restaurants/about/:resId",
        element: <Body />, 
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
