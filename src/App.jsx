import { useState, useEffect } from "react";
import "./App.css";
import Doctors from "./components/Doctors/Doctors";
import Home from "./components/Home/Home";
import MobileMenu from "./components/Navigation/MobileMenu";
import Navbar from "./components/Navigation/Navbar";
import Overlay from "./components/Overlay/Overlay";
import Services from "./components/Services/Services";

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
      window.addEventListener("scroll", controlNavBar);
    }
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrolly]);

  return (
    <div className="App">
      <Overlay isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
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
