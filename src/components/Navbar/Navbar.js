import React, { createRef, useContext, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// Styles
import style from "../../assets/css/Navbar.module.css";
// Styled Components
import {
  CartIcon,
  Header,
  RightNav,
  Nav,
  HamburgerItems,
  HamburgerMenu,
  Hamburger,
  Overlay,
  ActiveSpan,
  ScrollTop,
  ArrowUp,
} from "./NavbarElements";
// image
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  // Variables
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeStyles, setActiveStyles] = useState({
    width: "36px",
    left: "0",
  });
  const products = createRef();
  const home = createRef();
  const params = useParams();

  // Methods
  const OpenMenu = () => {
    setIsOpen(true);
  };
  const CloseMenu = () => {
    setIsOpen(false);
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    switch (params["*"]) {
      case "home":
        setActiveStyles((prevState) => ({
          ...prevState,
          left: `${home.current.offsetLeft}px`,
          width: `${home.current.offsetWidth}px`,
        }));
        break;
      case "products":
        setActiveStyles((prevState) => ({
          ...prevState,
          left: `${products.current.offsetLeft}px`,
          width: `${products.current.offsetWidth}px`,
        }));
        break;
      default:
        break;
    }
  }, [params]);
  const handleScroll = () => {
    const topPosition = window.scrollY;
    setScrollPosition(topPosition);
  };
  useEffect(() => {
    window.onscroll = handleScroll;
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Header topScroll={scrollPosition}>
      <div className={style.logoContainer}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <Nav className={style.navbarMenu}>
        <NavLink
          to="/home"
          className={(navData) => (navData.isActive ? style.active : "")}
          ref={home}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={(navData) => (navData.isActive ? style.active : "")}
          ref={products}
        >
          Products
        </NavLink>
        <ActiveSpan styles={activeStyles}></ActiveSpan>
      </Nav>
      <RightNav className={style.rightNav}>
        <div className={style.shoppingCart}>
          <Link to="/shoppingCart">
            <CartIcon />
            <span>{state.itemsCounter}</span>
          </Link>
        </div>
        <div className={style.enterAccount}>
          <Link className={style.login} to="/login">
            LOG IN
          </Link>
          <Link className={style.signUp} to="/signup">
            SIGN UP
          </Link>
        </div>
      </RightNav>
      <HamburgerItems>
        <Hamburger onClick={OpenMenu} />
        <HamburgerMenu isOpen={isOpen}>
          <div className="hamburgerlogo-container">
            <img className="hamburgerLogo" src={logo} alt="logo" />
          </div>
          <div className="hamburger-links">
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </div>
        </HamburgerMenu>
        <Overlay onClick={CloseMenu} isFade={isOpen}></Overlay>
      </HamburgerItems>
      <ScrollTop onClick={scrollTop} topScroll={scrollPosition}>
        <ArrowUp />
      </ScrollTop>
    </Header>
  );
};

export default Navbar;
