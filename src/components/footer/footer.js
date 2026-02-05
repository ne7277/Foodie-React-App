import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ onAboutUsClick }) => {
  const navigate = useNavigate();

  return (
    <footer className="footer bg-black text-white p-8">
      <div className="footer-container flex flex-wrap justify-between">

        <div className="flex-1 basis-50 m-3.75">
          <h3 className="text-orange-400 my-4 font-bold text-2xl">Company</h3>
          <ul className="[&>li]:my-2.5 [&>li]:cursor-pointer [&>li]:transition-all [&>li]:duration-300 [&>li:hover]:text-orange-300 [&>li:hover]:translate-x-2">
            <li onClick={() => navigate("/aboutus")}>About Us</li>
            <li >Careers</li>
            <li>Blog</li>
            <li>Partners</li>
          </ul>
        </div>

        <div className="flex-1 basis-50 m-3.75">
          <h3 className="text-orange-400 my-4 font-bold text-2xl">Support</h3>
          <ul className="[&>li]:my-2.5 [&>li]:cursor-pointer [&>li]:transition-all [&>li]:duration-300 [&>li:hover]:text-orange-300 [&>li:hover]:translate-x-2">
            <li>Help Center</li>
            <li>FAQs</li>
            <li onClick={() => navigate("/contactus")}>
              Contact Us
            </li>
            <li>Cancellation & Refund</li>
          </ul>
        </div>

        <div className="flex-1 basis-50 m-3.75">
          <h3 className="text-orange-400 my-4 font-bold text-2xl">Legal</h3>
          <ul className="[&>li]:my-2.5 [&>li]:cursor-pointer [&>li]:transition-all [&>li]:duration-300 [&>li:hover]:text-orange-300 [&>li:hover]:translate-x-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Security</li>
          </ul>
        </div>

        <div className="flex-1 basis-50 m-3.75">
          <h3 className="text-orange-400 my-4 font-bold text-2xl">Social links & Download</h3>

          <div className="Social links flex gap-4 my-4">
            <img className="w-11 h-11 cursor-pointer transition-all duration-300 hover:scale-[1.2] hover:brightness-[1.3]"
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
              alt="Facebook"
            />
            <img className="w-11 h-11 cursor-pointer transition-all duration-300 hover:scale-[1.2] hover:brightness-[1.3]"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
            <img className="w-11 h-11 cursor-pointer transition-all duration-300 hover:scale-[1.2] hover:brightness-[1.3]"
              src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg"
              alt="X"
            />
          </div>

          <div className="app-download flex gap-4 mt-4">
            <img className="w-30 h-11 cursor-pointer transition-all duration-300 hover:scale-[1.2] hover:brightness-[1.3]"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
            />
            <img className="w-30 h-11 py-1 cursor-pointer transition-all duration-300 hover:scale-[1.2] hover:brightness-[1.3]"
              src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              alt="App Store"
            />
          </div>
        </div>

      </div>

      <p className="footer-bottom flex items-center justify-center text-sky-300">© 2026 Foodie. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
