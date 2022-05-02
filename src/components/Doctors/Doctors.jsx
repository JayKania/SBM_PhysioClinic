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
  const cards = doctors.map((doctor, index) => {
    return (
      <DoctorCard
        img={doctor.img}
        name={doctor.name}
        qual={doctor.qualifications}
        bio={doctor.data}
        key={index}
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
      <StyledButtons className="buttons">
        <div className="left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 400.004 400.004"
          >
            <path d="M382.688 182.686H59.116l77.209-77.214c6.764-6.76 6.764-17.726 0-24.485-6.764-6.764-17.73-6.764-24.484 0L5.073 187.757c-6.764 6.76-6.764 17.727 0 24.485l106.768 106.775a17.252 17.252 0 0012.242 5.072c4.43 0 8.861-1.689 12.242-5.072 6.764-6.76 6.764-17.726 0-24.484l-77.209-77.218h323.572c9.562 0 17.316-7.753 17.316-17.315 0-9.562-7.753-17.314-17.316-17.314z"></path>
          </svg>
        </div>
        <div className="right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 268.832 268.832"
          >
            <path d="M265.171 125.577l-80-80c-4.881-4.881-12.797-4.881-17.678 0-4.882 4.882-4.882 12.796 0 17.678l58.661 58.661H12.5c-6.903 0-12.5 5.597-12.5 12.5 0 6.902 5.597 12.5 12.5 12.5h213.654l-58.659 58.661c-4.882 4.882-4.882 12.796 0 17.678 2.44 2.439 5.64 3.661 8.839 3.661s6.398-1.222 8.839-3.661l79.998-80c4.882-4.882 4.882-12.796 0-17.678z"></path>
          </svg>
        </div>
      </StyledButtons>
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
  flex-wrap: wrap;
  justify-content: center;

  // mobile
  @media only screen and (max-width: 480px) {
    width: 100%;
  }

  //tablet
  @media only screen and (max-width: 912px) {
    width: 95%;
  }
`;
const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    justify-content: center;
    height: 45px;
    width: 45px;
    margin: 1rem;
    border: none;
    border-radius: 50%;
    box-shadow: 0px 2px 5px grey;
    transition: transform 200ms ease, box-shadow 200ms ease;
    :hover {
      cursor: pointer;
      transform: translateY(-5%);
      box-shadow: 0px 2px 10px grey;
    }
    svg {
      width: 20px;
      color: #626ee3;
    }
    :active {
      box-shadow: 0px 2px 5px grey;
      transform: translateY(0);
    }
  }
`;
export default Doctors;
