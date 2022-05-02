import React from "react";
import styled from "styled-components";
import sbm_logo from "../../images/sbm logo (1).jpg";

const Navbar = ({ isMenuOpen, toggleMenu, isNavVisible }) => {
  return (
    <StyledNavWrapper
      className={`nav-wrapper ${isMenuOpen ? "menu-open" : "menu-close"} ${
        !isNavVisible ? "nav-inactive" : ""
      }`}
    >
      <StyledNav>
        <StyledLogo className="logo">
          <img src={sbm_logo} alt="Sbm Physioclinic" />
          <span>SBM Physioclinic</span>
        </StyledLogo>
        <StyledNavComponents className="nav-items">
          <div className="nav-item">
            <a href="#home">Home</a>
          </div>
          <div className="nav-item">
            <a href="#services">Services</a>
          </div>
          <div className="nav-item">
            <a href="#doctors">Doctors</a>
          </div>
          <div className="nav-item">
            <a href="#contact">Contact Us</a>
          </div>
          <div onClick={toggleMenu} className="burger-menu">
            <i className="pi pi-bars" style={{ fontSize: "1em" }}></i>
          </div>
        </StyledNavComponents>
      </StyledNav>
    </StyledNavWrapper>
  );
};

const StyledNavWrapper = styled.div`
  box-shadow: 0px 2px 150px #b8ecff;
  background: white;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  transition: top 300ms ease, transform 250ms ease;
  &.nav-inactive {
    transform: translateY(-100%);
  }
`;

const StyledNav = styled.div`
  margin: 0 auto;
  background: white;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // mobile
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const StyledLogo = styled.div`
  background: white;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  span {
    font-family: "Dancing Script", cursive;
    font-weight: 700;
    font-size: 1.5rem;
  }
  img {
    max-height: 120px;
    width: 100px;
  }

  // mobile
  @media only screen and (max-width: 480px) {
    flex-direction: row-reverse;
    span {
      font-size: 1.175rem;
    }
    img {
      max-height: 75px;
      width: 75px;
    }
  }
`;

const StyledNavComponents = styled.div`
  background: transparent;
  display: flex;

  div {
    margin: 1rem;
    padding-bottom: 0.5rem;
    background: white;
    font-size: 1.5rem;
    font-weight: 700;
    transition: all 0.5s ease;
    display: inline-block;
    position: relative;

    :hover {
      cursor: pointer;
    }
    :after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #8edbff;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    :hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    a {
      text-decoration: none;
      color: #3f4c6e;
      background: transparent;
    }
  }
  .burger-menu {
    display: none;
  }

  // mobile
  @media only screen and (max-width: 480px) {
    .nav-item {
      display: none;
    }
    .burger-menu {
      display: block;
    }
  }

  // tablet
  @media only screen and (max-width: 912px) {
    .nav-item {
      a {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Navbar;
