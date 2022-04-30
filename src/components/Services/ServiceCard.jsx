import React from "react";
import { Card } from "primereact/card";
import styled from "styled-components";

const ServiceCard = ({ title, data, img }) => {
  return (
    <StyledCard>
      <Card title={title}>{data}</Card>
    </StyledCard>
  );
};
const StyledCard = styled.div`
  flex-basis: 33.33%;
  flex-grow: 1;
  min-height: 250px;
  margin-top: 1rem;
  .p-card {
    margin: 1rem;
    height: 95%;
    background: white;
    color: #3f4c6e;
    box-shadow: 0px 2px 5px #7889b5;
    border-radius: 10px;
    overflow: hidden;
    .p-card-body {
      text-align: center;
      .p-card-title {
        text-align: center;
      }
    }
  }

  // mobile
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export default ServiceCard;
