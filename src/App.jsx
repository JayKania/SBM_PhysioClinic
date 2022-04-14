import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <StyledNavWrapper>
        <Navbar />
      </StyledNavWrapper>
    </div>
  );
}

const StyledNavWrapper = styled.div`
  background: white;
  box-shadow: 0px 5px 50px #daf5ff;
`;
export default App;
