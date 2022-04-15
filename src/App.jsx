import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./components/Home";
import Services from "./components/Services";
import { useState } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <StyledNavWrapper></StyledNavWrapper>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Home />
      <Services />
      <StyledMenu className={`${isMenuOpen ? "active" : ""}`}>
        <i
          className="pi pi-times"
          style={{ fontSize: "2em" }}
          onClick={toggleMenu}
        ></i>
        <StyledLinks className="links">
          <div>
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
        </StyledLinks>
      </StyledMenu>
    </div>
  );
};

const StyledMenu = styled.div`
  height: 100vh;
  width: 400px;
  position: fixed;
  background: #e8f6fe;
  right: 0;
  top: 0;
  transform: translateX(100%);
  transition: transform 250ms ease;
  i {
    margin: 1rem;
    :hover {
      cursor: pointer;
    }
  }
  &.active {
    transform: translateX(0);
  }
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7rem;
  a {
    text-decoration: none;
    font-size: 2rem;
    color: #3f4c6e;
  }
`;

const StyledNavWrapper = styled.div`
  background: white;
  box-shadow: 0px 2px 150px #b8ecff;
`;
export default App;
