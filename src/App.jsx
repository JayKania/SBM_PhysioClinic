import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <StyledNavWrapper>
        <Navbar />
      </StyledNavWrapper>
      <Home />
      <Services />
    </div>
  );
}

const StyledNavWrapper = styled.div`
  background: white;
  box-shadow: 0px 2px 150px #b8ecff;
`;
export default App;
