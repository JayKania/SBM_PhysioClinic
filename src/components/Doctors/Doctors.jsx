import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DoctorCard from "./DoctorCard";
import { doctors_data } from "./doctors_data";

const Doctors = () => {
  const doctors = doctors_data;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(() => {
    return window.screen.width > 480 ? 3 : 1;
  });

  const [current, setCurrent] = useState(0);

  const changeCurrentDoc = (event) => {
    if (event.target.getAttribute("name") === "next") {
      if (current === 7) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    } else {
      if (current === 0) {
        setCurrent(7);
      } else {
        setCurrent(current - 1);
      }
    }
  };
  const cards = doctors.map((doctor, index) => {
    return (
      <DoctorCard
        img={doctor.img}
        name={doctor.name}
        qual={doctor.qualifications}
        bio={doctor.data}
        key={index}
        visibility={index === current ? "visible" : "hidden"}
      />
    );
  });

  return (
    <StyledDoctors id="doctors">
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
  h1 {
    padding-top: 4rem;
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
  flex-wrap: wrap;
  justify-content: center;
  /* overflow: scroll; */

  // mobile
  @media only screen and (max-width: 480px) {
    width: 100%;
  }

  //tablet
  @media only screen and (max-width: 912px) {
    width: 95%;
  }
`;

export default Doctors;
