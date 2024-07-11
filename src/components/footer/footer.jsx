// import { useState, useEffect } from "react";
import "./footer.css";
import Facebook from "../../../public/img/facebook.png";
import Instagram from "../../../public/img/instagram.png";
import Telegram from "../../../public/img/telegram.png";
import Logo from "../../../public/img/logo.svg";
// import Menu from "../../../public/img/menu.png";

const Footer = () => {
  return (
    <>
      <div className="container footer">
        <div className="footer-top">
          <img className="logo" src={Logo} alt="asd" />
          <div className="top-list">
            <img src={Facebook} alt="asd" />
            <img src={Instagram} alt="asd" />
            <img src={Telegram} alt="asd" />
          </div>
        </div>
        <div className="fotoer-center">
          <h2>Contact us:</h2>
          <h3>Email: info@positivus.com</h3>
          <h4>Phone: 555-567-8901</h4>
          <p>
            Address: 1234 Main <br /> St Moonstone City, Stardust State 12345
          </p>
        </div>
        <span></span>
        <div className="footer-bottom">
          <h3>© 2023 Positivus. All Rights Reserved.</h3>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
