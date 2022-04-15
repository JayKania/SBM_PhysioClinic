import React from "react";
import styled from "styled-components";
import vector from "../images/6099962.jpg";

const Home = () => {
  return (
    <StyledHome id="home">
      <StyledContent>
        <h1>Your Health Is Our First Priority</h1>
        <p>
          Your health and wellbeing is important to us. When it comes to staying
          well physically, we are with you all the way.
        </p>
        <input type="button" value="Make Appointment" className="btn" />
      </StyledContent>
      <StyledImage>
        <img src={vector} alt="vector" />
      </StyledImage>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  margin: 10rem auto;
  width: 80%;
  display: flex;
`;

const StyledContent = styled.div`
  width: 50%;
  padding: 2rem;
  h1 {
    font-size: 3.5rem;
    color: #3f4c6e;
    font-weight: 900;
    letter-spacing: 1.5px;
  }
  p {
    margin-top: 2.5rem;
    letter-spacing: 1px;
    font-weight: 300;
  }
  .btn {
    margin-top: 2rem;
    border: none;
    padding: 1rem 1.2rem;
    background: #3f4c6e;
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    border-radius: 50px;
    transition: transform 0.25s ease;
    box-shadow: 0px 2px 5px #3f4c6e;
    :hover {
      background: #3f4c6e;
      cursor: pointer;
      transform: translateY(-3px);
    }
  }
`;

const StyledImage = styled.div`
  max-width: 50%;
  /* padding: 2rem; */

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default Home;
