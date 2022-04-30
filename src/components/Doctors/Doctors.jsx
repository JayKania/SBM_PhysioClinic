import React from "react";
import styled from "styled-components";
import DoctorCard from "./DoctorCard";
import { doctors_data } from "./doctors_data";

const Doctors = () => {
  const doctors = doctors_data;

  const cards = doctors.map((doctor) => {
    return (
      <DoctorCard
        img={doctor.img}
        name={doctor.name}
        qual={doctor.qualifications}
        bio={doctor.data}
      />
    );
  });

  return (
    <StyledDoctors id="doctors">
      <div className="doctors-wave">
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
      <h1>Our Team</h1>
      <p>
        We offer complete healthcare to individuals with various health concerns
      </p>
      <DoctorCards>{cards}</DoctorCards>
    </StyledDoctors>
  );
};

const StyledDoctors = styled.div`
  position: relative;
  .doctors-wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .doctors-wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
  }

  .doctors-wave .shape-fill {
    fill: #e8f6fe;
  }
  h1 {
    padding-top: 7rem;
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

const DoctorCards = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  // mobile
  @media only screen and (max-width: 480px) {
    /* flex-direction: column; */
    width: 100%;
  }
  @media only screen and (max-width: 912px) {
    width: 95%;
  }
`;

export default Doctors;
