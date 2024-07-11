import "./navbar.css";
import Logo from "../../../public/img/logo.svg";
import { useState, useEffect } from "react";
import Menu from "../../../public/img/menu.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 769);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {!isMobile && (

        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="asd" />
          </div>
          <ul className="navbar-list">
            <li>Главная</li>
            <li>О нас</li>
            <li>Сервисы</li>
            <li>Контакты</li>
            <li>Блог</li>
          </ul>
          <button className="navbar-download">
            скачать
          </button>
        </div>)}
      {isMobile && (
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="asd" />
          </div>
          <img src={Menu} className="menu-nav" onClick={toggleClass}></img>
          <div className={`nav-menu ${isOpen ? "open" : "closed"}`}>
          <ul className="navbar-list"> 
              <li>Главная</li>
              <li>О нас</li>
              <li>Сервисы</li>
              <li>Контакты</li>
              <li>Блог</li>
            </ul>
              <button className="navbar-download">
                скачать
              </button>

          </div>

        </div>
      )}

    </>
  );
};

export default Navbar;
