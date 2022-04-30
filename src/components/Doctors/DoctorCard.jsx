import React from "react";
import styled from "styled-components";
import team_1 from "../../images/team (1)_1.jpg";

const DoctorCard = ({ img, name, qual, bio }) => {
  return (
    <StyledDoctorCard>
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
  /* width: 30%; */
  flex-basis: 25%;
  flex-grow: 1;
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0px 2px 5px grey;
  border-radius: 5px;
  position: relative;
  min-height: 280px;
  border-top: 4px solid rgb(162, 188, 218);
  .img {
    position: absolute;
    border-radius: 50%;
    width: 70px;
    height: 70px;
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
  @media only screen and (max-width: 480px) {
    flex-basis: 45%;
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
    font-size: 1rem;
    margin-top: 0.7rem;
    color: #3f4c6e;
  }
  .bio {
    width: 80%;
    margin: 1rem auto;
    font-weight: 300;
  }
`;

export default DoctorCard;
