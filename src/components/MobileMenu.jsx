import React from "react";
import menu_blurry_gradient from "../images/menu-blurry-gradient.svg";
import styled from "styled-components";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <StyledMenuWrapper className={`menu-wrapper ${isMenuOpen ? "active" : ""}`}>
      <StyledBlob className="menu-blurry-gradient">
        <img src={menu_blurry_gradient} alt="menu-blurry-gradient" />
        hello
      </StyledBlob>
      <StyledMenu className="menu">
        <i
          className="pi pi-times"
          style={{ fontSize: "2em" }}
          onClick={toggleMenu}
        ></i>
        <StyledLinks className="links">
          <div onClick={toggleMenu}>
            <a href="#home">Home</a>
          </div>
          <div onClick={toggleMenu}>
            <a href="#services">Services</a>
          </div>
          <div onClick={toggleMenu}>
            <a href="#doctors">Doctors</a>
          </div>
          <div onClick={toggleMenu}>
            <a href="#contact">Contact Us</a>
          </div>
        </StyledLinks>
      </StyledMenu>
    </StyledMenuWrapper>
  );
};

const StyledMenuWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  transform: translateX(100%);
  transition: transform 250ms ease;
  background: white;
  &.active {
    transform: translateX(0);
  }
`;

const StyledMenu = styled.div`
  height: 100vh;
  position: relative;
  i {
    position: absolute;
    z-index: 101;
    margin: 1rem;
    :hover {
      cursor: pointer;
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  z-index: 110;
  justify-content: center;
  align-items: center;
  div {
    margin: 0.7rem auto;
  }
  a {
    text-decoration: none;
    font-size: 2rem;
    color: #3f4c6e;
  }
`;

const StyledBlob = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  overflow-y: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default MobileMenu;
