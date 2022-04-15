import React from "react";
import { Card } from "primereact/card";
import styled from "styled-components";

const ServiceCard = ({ title, data, img }) => {
  const header = <img alt="Card" src={img} />;
  return (
    <StyledCard>
      <Card title={title} header={header}>
        {data}
      </Card>
    </StyledCard>
  );
};
const StyledCard = styled.div`
  /* flex-basis: 28%; */
  .p-card {
    background: white;
    color: #3f4c6e;
    margin: 1rem;
    box-shadow: 0px 2px 5px #7889b5;
    border-radius: 10px;
    overflow: hidden;
  }
`;
export default ServiceCard;
