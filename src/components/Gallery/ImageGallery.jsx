import React from "react";
import { Carousel } from "primereact/carousel";
import { images } from "./gallery_data";
import styled from "styled-components";

const ImageGallery = () => {
  return (
    <StyledImageGallery id="gallery">
      <StyledHeader>
        <h1>Gallery</h1>
        <p>Take a look at our equipments and the facilities we provide.</p>
      </StyledHeader>
      <Carousel
        value={images}
        itemTemplate={itemTemplate}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        autoplayInterval="2500"
      ></Carousel>
    </StyledImageGallery>
  );
};

const responsiveOptions = [
  {
    breakpoint: "912px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "482px",
    numVisible: 1,
    numScroll: 1,
  },
];

const itemTemplate = (image) => {
  return (
    <StyledImageCard>
      <img src={image.img} alt="interior img" />
    </StyledImageCard>
  );
};

const StyledHeader = styled.div`
  h1 {
    font-size: 3.5rem;
    /* color: #3f4c6e; */
    color: white;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-align: center;
    /* margin-top: 2rem; */
  }
  p {
    margin: 2rem auto;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    width: 35%;
    /* color: #3f4c6e; */
    color: white;
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
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: linear-gradient(-45deg, #00334c 50%, #00557f) right;

  margin-top: 3rem;
  .p-carousel {
    width: 90%;
    margin: 0 auto;
    .p-carousel-content {
      .p-carousel-container {
        button {
          background: white;
          color: #00557f;
          border-radius: 50%;
          box-shadow: 0px 2px 5px grey;
          transition: transform 250ms ease, box-shadow 250ms ease;
          :hover {
            background: white;
            /* color: rgb(147, 147, 227); */
            color: #00557f;

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
    .p-carousel {
      width: 100%;
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
  @media only screen and (max-width: 912px) {
    .p-carousel {
      width: 100%;
    }
  }
`;

const StyledImageCard = styled.div`
  margin: 1rem 1rem;
  border-radius: 5px;
  overflow: hidden;
  height: 400px;
  -webkit-box-shadow: 6px 6px 15px -5px rgba(105, 105, 105, 0.75);
  -moz-box-shadow: 6px 6px 15px -5px rgba(105, 105, 105, 0.75);
  box-shadow: 6px 6px 15px -5px rgba(105, 105, 105, 0.75);
  transform: translateY(-2%);
  background: white;
  img {
    height: 100%;
    width: 100%;
    /* object-fit: cover; */
  }

  // mobile
  @media only screen and (max-width: 482px) {
    height: 270px;
  }

  // tablet
  @media only screen and (min-width: 780px) and (max-width: 912px) {
    height: 300px;
  }
`;

export default ImageGallery;
