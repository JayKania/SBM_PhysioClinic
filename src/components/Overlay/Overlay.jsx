import React from "react";
import styled from "styled-components";
const Overlay = ({ isMenuOpen, toggleMenu }) => {
  return (
    <StyledOverlay
      className={`overlay ${isMenuOpen ? "active" : "inactive"}`}
      onClick={toggleMenu}
    ></StyledOverlay>
  );
};

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: none;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  &.active {
    display: block;
  }
`;

export default Overlay;
