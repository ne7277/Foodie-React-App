import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/footer/footer";
import AuthForm from "./components/Header/Signinup/Signinup";
import AboutUs from "./components/footer/Aboutus/aboutus";
import ContactUs from "./components/Body/ContactUs";
import Error404 from "./components/Body/Error";
import Signinup from "./components/Header/Signinup/Signinup";
import RestaurantMenu from "./components/RestaurantMenu";
// import { useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showContactUS, setshowContactus] = useState(false);

  return (
    <div className="app">
      <Header
        onSignInClick={() => setShowAuth(true)}
        onContactUsClick={() => setshowContactus(true)}
      />
      {showAuth && <AuthForm onClose={() => setShowAuth(false)} />}
      {showAboutUs && <AboutUs onClose={() => setShowAboutUs(false)} />}
      {showContactUS && <ContactUs onClose={() => setshowContactus(false)} />}

      <Outlet/>
      <Footer onAboutUsClick={() => setShowAboutUs(true)} />
    </div>
  );
};

const SigninLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
    path: "/restaurants/:resId",
    element: <RestaurantMenu />,
  },
      
    ],
    errorElement: <Error404 />,
  },
{
        path: "/signinup",
        element: <SigninLayout/>,
        children:[
          {
        path: "/signinup",
        element: <Signinup />,
      },
          ,
        ]
      
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
