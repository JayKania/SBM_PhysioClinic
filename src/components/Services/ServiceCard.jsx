import React from "react";
import styled from "styled-components";

const ServiceCard = ({ title, data, img }) => {
  return (
    <StyledServiceCard>
      <h4 className="title">{title}</h4>
      <div className="data">{data}</div>
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
  box-shadow: 0px 2px 5px grey;
  border-radius: 5px;
  position: relative;
  max-height: 300px;
  border-top: 4px solid rgb(162, 188, 218);
  background: white;
  padding: 2rem;
  margin-top: 1rem;
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
  // mobile
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    flex-basis: 100%;
    flex-grow: 0;
  }
  @media only screen and (max-width: 912px) {
    padding: 1rem;
  }
`;
export default ServiceCard;
