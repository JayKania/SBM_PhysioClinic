import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ title, data }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: "0",
    rootMargin: "-25px",
  });

  return (
    <StyledServiceCard
      ref={ref}
      className={`${inView ? "opacity-1" : "opacity-0"}`}
      // className="opacity-0"
    >
      <StyledContent>
        <h4 className={`title`}>{title}</h4>
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
  -webkit-box-shadow: 6px 6px 24px -5px rgba(105, 105, 105, 0.75);
  -moz-box-shadow: 6px 6px 24px -5px rgba(105, 105, 105, 0.75);
  box-shadow: 6px 6px 24px -5px rgba(105, 105, 105, 0.75);

  border-radius: 5px;
  position: relative;
  max-height: max-content;
  padding: 2rem;
  margin-top: 1rem;
  transition: transform 500ms ease, opacity 500ms ease;

  :hover {
    background-position: left;
  }

  &.opacity-0 {
    opacity: 0;
    transform: translateY(100%);
  }
  &.opacity-1 {
    opacity: 1;
    transform: translateY(0);
  }

  // mobile
  @media only screen and (max-width: 480px) {
    flex-basis: 45%;
    max-width: 100%;
  }
  // tablet
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
