import { useState } from "react";
import "../../../css/Navbar.css";

// Import Icons
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  // Display Navbar
  const [active, setActive] = useState("menuDiv");

  const showNavBar = () => {
    setActive("menuDiv activeNavbar");
  };

  // Remove Navbar
  const removeNavBar = () => {
    setActive("menuDiv");
  };

  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">TravelIn</h3>
        </div>

        <div className={active}>
          <ul className="ul menuLists">
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                Our Tours
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                Gallery
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                Blog
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                Contact Us
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                Pages
              </a>
            </li>
          </ul>

          <div onClick={removeNavBar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="socialIcons flex">
          <BsFacebook className="icon" />
          <AiOutlineTwitter className="icon" />
          <AiFillYoutube className="icon" />
          <AiFillInstagram className="icon" />
        </div>

        <div onClick={showNavBar} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
