import React from "react";
import styled from "styled-components";
import ortho_rehab from "../images/ortho rehab.jpg";
import neuro_rehab from "../images/neuro rehab.jpg";
import sports_rehab from "../images/sports rehab.jpg";
import geriatric_rehab from "../images/geriatric rehab.jpg";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Orthopedic Rehabilitation",
      data: "Orthopedic rehabilitation is a therapeutic approach to recovery, the purpose of which is to correct musculoskeletal limitations and alleviate pain from trauma, illness, or surgery.",
      img: ortho_rehab,
    },
    {
      title: "Neurological Rehabilitation",
      data: "Neurological rehabilitation is a doctor-supervised program designed for people with diseases, injury, or disorders of the nervous system.",
      img: neuro_rehab,
    },
    {
      title: "Sports Rehabilitation",
      data: "Sports Rehabilitation help people to maintain and improve their health and fitness, recover from and prevent injury and reduce pain using exercise, movement and therapy",
      img: sports_rehab,
    },
    {
      title: "Geriatric Rehabilitation",
      data: "Geriatric Rehabilitation aims to restore function or enhance residual functional capability and improving the quality of life in older people ie particularly those with disabling impairments and/or frailty.",
      img: geriatric_rehab,
    },
  ];

  const cards = services.map((service) => {
    return (
      <ServiceCard
        title={service.title}
        data={service.data}
        img={service.img}
      />
    );
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
    </StyledServices>
  );
};

const StyledServices = styled.div`
  background: #e8f6fe;
  margin: 0 auto;
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
`;

const StyledCards = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

export default Services;
