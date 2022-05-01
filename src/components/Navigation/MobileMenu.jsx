import React from "react";
import styled from "styled-components";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <StyledMenuWrapper className={`menu-wrapper ${isMenuOpen ? "active" : ""}`}>
      <StyledMenu className="menu">
        <i
          className="pi pi-times"
          style={{ fontSize: "1.2em" }}
          onClick={toggleMenu}
        ></i>
        <h3>Sbm Physioclinic</h3>
        <StyledLinks className="links">
          <div onClick={toggleMenu}>
            <div>
              <i className="pi pi-home" style={{ fontSize: "1.2em" }}></i>
            </div>
            <a href="#home">Home</a>
          </div>
          <div onClick={toggleMenu}>
            <div>
              <i className="pi pi-briefcase" style={{ fontSize: "1.2em" }}></i>
            </div>
            <a href="#services">Services</a>
          </div>
          <div onClick={toggleMenu}>
            <div>
              <i className="pi pi-users" style={{ fontSize: "1.2em" }}></i>
            </div>
            <a href="#doctors">Doctors</a>
          </div>
          <div onClick={toggleMenu}>
            <div>
              <i className="pi pi-phone" style={{ fontSize: "1.2em" }}></i>
            </div>
            <a href="#contact">Contact Us</a>
          </div>
        </StyledLinks>
      </StyledMenu>
    </StyledMenuWrapper>
  );
};

const StyledMenuWrapper = styled.div`
  position: fixed;
  width: 75%;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  transform: translateX(-101%);
  transition: transform 250ms ease;
  background-image: linear-gradient(-45deg, #00334c 50%, #00557f);
  &.active {
    box-shadow: 0px 2px 20px 10px grey;
    transform: translateX(0%);
  }
`;

const StyledMenu = styled.div`
  height: 100vh;
  position: relative;
  .pi-times {
    position: absolute;
    right: 0;
    z-index: 101;
    margin: 1rem;
    color: white;
    :hover {
      cursor: pointer;
    }
  }
  h3 {
    padding: 5rem 0 0 2rem;
    font-family: "Dancing Script", cursive;
    font-size: 2rem;
    color: white;
  }
`;

const StyledLinks = styled.div`
  padding: 5rem 0 0 2rem;
  div {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    i {
      color: white;
      margin: 0rem 1rem 1rem 0rem;
    }
    a {
      text-decoration: none;
      font-size: 1.2rem;
      color: white;
    }
  }
`;

export default MobileMenu;
