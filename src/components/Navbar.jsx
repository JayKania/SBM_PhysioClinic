import React from "react";
import styled from "styled-components";
import sbm_logo from "../images/sbm logo (1).jpg";

const Navbar = () => {
  return (
    <StyledNav>
      <StyledLogo className="logo">
        <img src={sbm_logo} alt="Sbm Physioclinic" />
      </StyledLogo>
      <StyledNavComponents>
        <div className="active">
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#services">Services</a>
        </div>
        <div>
          <a href="#doctors">Doctors</a>
        </div>
        <div>
          <a href="#contact">Contact Us</a>
        </div>
      </StyledNavComponents>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  margin: 0 auto;
  background: white;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.div`
  background: white;
  img {
    max-height: 120px;
    width: 100px;
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
`;

export default Navbar;
