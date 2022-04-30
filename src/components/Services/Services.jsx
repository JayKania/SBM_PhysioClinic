import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import { data } from "./services_data";

const Services = () => {
  const services = data;

  const cards = services.map((service) => {
    return <ServiceCard title={service.title} data={service.data} />;
  });
  return (
    <StyledServices id="services">
      <div className="service-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
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
  background: #e8f6fe;
  margin: 0 auto;
  padding: 1rem 0 1rem 0;
  /* padding-bottom: 1rem; */
  position: relative;
  .service-wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .service-wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
  }

  .service-wave .shape-fill {
    fill: white;
  }

  h1 {
    margin-top: -5rem;
    padding-top: 10rem;
    font-size: 3.5rem;
    color: #3f4c6e;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-align: center;
  }
  p {
    margin: 2rem auto;
    text-align: center;
    font-weight: 700;
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
    /* border: 1px solid #3f4c6e; */
    padding: 1rem;
    border-radius: 5px;
    /* box-shadow: 0px 1px 5px #3f4c6e; */
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
  width: 80%;
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
