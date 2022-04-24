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
  .p-card {
    margin: 1rem;
    height: 95%;
    background: white;
    color: #3f4c6e;
    box-shadow: 0px 2px 5px #7889b5;
    border-radius: 10px;
    overflow: hidden;
    .p-card-header {
      img {
        height: 300px;
      }
    }
  }
  :nth-child(odd) {
    .p-card {
      .p-card-header {
        img {
          height: 300px;
          width: 110%;
        }
      }
    }
  }
  // mobile
  @media only screen and (max-width: 480px) {
    .p-card {
      min-height: 400px;
      .p-card-header,
      .p-card-header:nth-child(odd) {
        img {
          height: 300px;
        }
      }
    }
  }
`;
export default ServiceCard;
