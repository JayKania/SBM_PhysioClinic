import React from "react";
import styled from "styled-components";

const DoctorCard = ({ img, name, qual, bio, visibility }) => {
  return (
    <StyledDoctorCard className={visibility}>
      <div className="img">
        <img src={img} alt="doc_img" />
      </div>
      <StyledContent className="content">
        <h4 className="name">{name}</h4>
        <div className="qualifications">{qual}</div>
        <div className="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          maiores. Dicta corrupti totam, laboriosam numquam veniam laudantium
          reprehenderit fugit magni?
        </div>
      </StyledContent>
    </StyledDoctorCard>
  );
};

const StyledDoctorCard = styled.div`
  flex-basis: 25%;
  min-width: 25%;
  max-width: 30%;
  flex-grow: 1;
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* box-shadow: 0px 2px 5px grey; */
  -webkit-box-shadow: 6px 6px 24px -5px rgba(105, 105, 105, 0.75);
  -moz-box-shadow: 6px 6px 24px -5px rgba(105, 105, 105, 0.75);
  box-shadow: 6px 6px 24px -5px rgba(105, 105, 105, 0.75);
  border-radius: 5px;
  position: relative;
  min-height: 280px;
  border-top: 4px solid rgb(162, 188, 218);
  transition: box-shadow 250ms ease, transform 250ms ease;
  /* padding: 0.5rem; */
  .img {
    position: absolute;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    overflow: hidden;
    top: -30px;
    left: calc(50% - 30px);
    box-shadow: 0px 2px 10px grey;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  //mobile
  @media only screen and (max-width: 480px) {
    flex-basis: 45%;
    max-width: 100%;
  }
`;

const StyledContent = styled.div`
  margin-top: 3rem;
  .name {
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 0.7rem;
    color: #3f4c6e;
  }
  .qualifications {
    margin-top: 0.7rem;
    color: #3f4c6e;
  }
  .bio {
    width: 100%;
    margin: 1rem auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  // tablet
  @media only screen and (max-width: 912px) {
    .bio {
      width: 100%;
      padding: 0 0.5rem;
    }
  }
`;

export default DoctorCard;
