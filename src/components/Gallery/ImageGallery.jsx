import React from "react";
import { Carousel } from "primereact/carousel";
import { images } from "./gallery_data";
import styled from "styled-components";

const ImageGallery = () => {
  return (
    <StyledImageGallery id="gallery">
      <StyledHeader>
        <h1>Gallery</h1>
        <p>Take a look at our ultra-modern and well maintained equipments</p>
      </StyledHeader>
      <Carousel
        value={images}
        itemTemplate={ImageCard}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        // autoplayInterval="2500"
        circular={true}
      ></Carousel>
    </StyledImageGallery>
  );
};

const responsiveOptions = [
  {
    breakpoint: "912px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "482px",
    numVisible: 1,
    numScroll: 1,
  },
];

const ImageCard = (image) => {
  return (
    <StyledImageCard>
      <img src={image} alt="" srcset="" />
    </StyledImageCard>
  );
};

const StyledHeader = styled.div`
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

const StyledImageGallery = styled.div`
  width: 90%;
  margin: 2rem auto;
  .p-carousel {
    .p-carousel-content {
      .p-carousel-container {
        button {
          color: rgb(147, 147, 227);
          border-radius: 50%;
          box-shadow: 0px 2px 5px grey;
          transition: transform 250ms ease, box-shadow 250ms ease;
          :hover {
            color: rgb(147, 147, 227);
            transform: translateY(-5%);
            box-shadow: 0px 2px 10px grey;
          }
          :active {
            transform: translateY(0);
            box-shadow: 0px 2px 5px grey;
          }
        }
      }
      ul {
        li {
          button {
            background: #bebebe;
            border-radius: 50%;
            height: 10px;
            width: 10px;
            :hover {
              background: #bebebe;
            }
          }
          &.p-highlight {
            button {
              background: #557eee;
            }
          }
        }
      }
    }
  }

  // mobile
  @media only screen and (max-width: 482px) {
    width: 100%;
    .p-carousel {
      .p-carousel-content {
        .p-carousel-container {
          button {
            height: 2rem;
            width: 2rem;
          }
        }
        ul {
          li {
            button {
              height: 7px;
              width: 7px;
            }
          }
        }
      }
    }
  }
`;

const StyledImageCard = styled.div`
  margin: 0rem 1rem;
  border-radius: 15px;
  img {
    height: 100%;
    width: 100%;
    transform: translateY(0.8%);
    object-fit: cover;
  }
  // mobile
  @media only screen and (max-width: 482px) {
  }
`;

export default ImageGallery;
