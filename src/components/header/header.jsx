// import { useState, useEffect } from "react";
import "./header.css";
// import Facebook from "../../../public/img/facebook.png";
// import Instagram from "../../../public/img/instagram.png";
// import Telegram from "../../../public/img/telegram.png";
import App from "../../assets/googl.svg";
import Gogl from "../../assets/app.svg";
import Headerright from "../../../public/img/email sky, email, message, paper airplane, communication.svg";

const Header = () => {
  return (
    <>
      <div className="container header">
        <div className="header-left">
          <p>
            Добро пожаловать в iGO – Ваше новое решение для комфортных поездок!
          </p>
          <button> <img src={App} alt="asd" /> <img src={Gogl} alt="asd" /> </button>
        </div>
        <div className="header-right">
          <img src={Headerright} alt="asd" />
        </div>
      </div>
    </>
  );
};

export default Header;
