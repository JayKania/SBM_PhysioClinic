import React from "react";
import styled from "styled-components";

const ReviewCard = ({ name, review }) => {
  return (
    <StyledReviewCard>
      <StyledContent>
        <h4 className="title">{name}</h4>
        <div className="data">{review}</div>
      </StyledContent>
    </StyledReviewCard>
  );
};

const StyledReviewCard = styled.div`
  min-width: 300px;
  margin-right: 30px;
  height: 300px;
  box-shadow: 6px 6px 24px -5px rgba(105, 105, 105, 0.75);
  overflow-y: scroll;

  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;

  ::-webkit-scrollbar {
    width: 5px;
    padding: 0;
  }

  ::-webkit-scrollbar-track {
    width: 5px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 0.7rem;
    color: #3f4c6e;
    padding: 1rem 1rem 0 1rem;
  }
  .data {
    margin: 1rem auto;
    font-weight: 400;
    padding: 1rem 1.2rem 0 1.2rem;
    text-align: justify;
  }
`;
export default ReviewCard;
