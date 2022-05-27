import React from "react";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import { reviews } from "./ReviewData";

const Reviews = () => {
  const ReviewCards = reviews.map((review, index) => (
    <ReviewCard key={index} name={review.name} review={review.review} />
  ));

  return (
    <StyledReviews id="reviews">
      <h1>Reviews</h1>
      <p>Read few of the testimonials from our patients</p>
      <StyledCards className="cards">
        <StyledCardContainer className="cards-container">
          {ReviewCards}
        </StyledCardContainer>
      </StyledCards>
    </StyledReviews>
  );
};

const StyledReviews = styled.div`
  margin: 2rem 1rem;
  h1 {
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

const StyledCards = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 10px 0;

  :hover {
    .cards-container {
      animation-play-state: paused;
    }
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;

  animation: banner 35s linear infinite;

  @keyframes banner {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-2640px, 0, 0);
    }
  }
`;

export default Reviews;
