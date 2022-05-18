import React from "react";
import styled from "styled-components";

const ServiceCard = ({ title, data, img }) => {
  return (
    <StyledServiceCard>
      <StyledContent>
        <h4 className="title">{title}</h4>
        <div className="data">{data}</div>
      </StyledContent>
    </StyledServiceCard>
  );
};
const StyledServiceCard = styled.div`
  flex-basis: 25%;
  flex-grow: 1;
  margin: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* box-shadow: 0px 2px 5px grey; */
  -webkit-box-shadow: 6px 6px 24px -5px rgba(105, 105, 105, 0.75);
  -moz-box-shadow: 6px 6px 24px -5px rgba(105, 105, 105, 0.75);
  box-shadow: 6px 6px 24px -5px rgba(105, 105, 105, 0.75);

  /* border: 0.1px solid black; */
  border-radius: 5px;
  position: relative;
  max-height: 300px;
  /* border-top: 4px solid rgb(162, 188, 218); */
  background: white;
  padding: 2rem;
  margin-top: 1rem;
  transition: box-shadow 250ms ease, transform 250ms ease;

  // mobile
  @media only screen and (max-width: 480px) {
    flex-basis: 45%;
    max-width: 100%;
  }
  @media only screen and (max-width: 912px) {
    padding: 1rem;
  }
`;

const StyledContent = styled.div`
  width: 90%;
  margin: 0 auto;
  .title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 0.7rem;
    color: #3f4c6e;
  }
  .data {
    margin: 1rem auto;
    font-weight: 400;
  }
`;
export default ServiceCard;
