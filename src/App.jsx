import { useState, useEffect } from "react";
import "./App.css";
import Doctors from "./components/Doctors";
import Home from "./components/Home";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrolly, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const controlNavBar = () => {
    if (typeof window !== undefined) {
      if (window.scrollY > lastScrolly) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      // console.log(window.scrollY);
      window.addEventListener("scroll", controlNavBar);
    }
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrolly]);

  return (
    <div className="App">
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isNavVisible={isNavVisible}
      />
      <Home />
      <Services />
      <Doctors />
    </div>
  );
};

export default App;
