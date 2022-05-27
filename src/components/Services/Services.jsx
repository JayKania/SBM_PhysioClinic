import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import { data } from "./services_data";

const Services = ({ reference }) => {
  const services = data;

  const cards = services.map((service, index) => {
    return (
      <ServiceCard title={service.title} data={service.data} key={index} />
    );
  });

  return (
    <StyledServices id="services" ref={reference}>
      <h1>Our Services</h1>
      <p>
        We offer complete healthcare to individuals with various health concerns
      </p>
      <StyledCards>{cards}</StyledCards>
      <div className="more"> And much more ...</div>
    </StyledServices>
  );
};

const StyledServices = styled.div`
  margin: 0 auto;
  padding: 1rem 0 1rem 0;
  position: relative;

  h1 {
    font-size: 3.5rem;
    color: #3f4c6e;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-align: center;
  }
  p {
    margin: 2rem auto;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    width: 35%;
    color: #3f4c6e;
  }

  .more {
    width: fit-content;
    margin: 2rem auto;
    font-weight: 700;
    font-size: 1.2rem;
    color: #3f4c6e;
    padding: 1rem;
    border-radius: 5px;
  }

  // mobile
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.15rem;
      width: 80%;
    }
  }
`;

const StyledCards = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  // mobile
  @media only screen and (max-width: 480px) {
    width: 100%;
  }

  // tablet
  @media only screen and (max-width: 912px) {
    width: 100%;
  }
`;

export default Services;
