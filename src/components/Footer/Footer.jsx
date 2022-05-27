import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter id="contact">
      <StyledWrapper>
        <h2>SBM Physioclinic</h2>
        <StyledSiteLinks className="site-links">
          <h3>Site Links</h3>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#doctors">Doctors</a>
          <a href="#reviews">Reviews</a>
        </StyledSiteLinks>
        <StyledServices className="services">
          <h3>Services</h3>
          <a href="#services">Orthopedic</a>
          <a href="#services">Neurological</a>
          <a href="#services">Sports</a>
          <a href="#services">Geriatric</a>
          <a href="#services">Post-Surgical</a>
          <a href="#services">Preventative</a>
        </StyledServices>
        <StyledContact className="contact">
          <h3>Reach Us</h3>
          <div className="contact-no">
            <div>
              <i className="pi pi-phone" style={{ fontSize: "1.2em" }}></i>
            </div>
            <div>
              <a href="tel:+9197373 11168">097373 11168</a>
            </div>
          </div>
          <div className="location">
            <div>
              <i className="pi pi-map" style={{ fontSize: "1.2em" }}></i>
            </div>
            <p>
              Bhartimaiya college of physiotherapy and optometry, Vesu Main
              Road, Piplod, Surat, Gujarat 395007
            </p>
          </div>
        </StyledContact>
      </StyledWrapper>
      <div className="break"></div>
      <div className="copyright">
        &copy; Shree Ambikaniketan Trust Physiotherapy Clinic,{" "}
        {new Date().getFullYear()}
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: linear-gradient(-45deg, #00334c 50%, #00557f);
  color: white;
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin-top: 2rem;
  text-align: left;
  .break {
    background: grey;
    border: 1px solid grey;
  }
  .copyright {
    text-align: center;
    margin-top: 1rem;
    font-size: 0.75rem;
  }
`;

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-family: "Dancing Script", cursive;
    margin-bottom: 2rem;
    flex-basis: 30%;
    align-self: center;
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 1.75rem;
  }
  font-size: 1.125rem;

  // mobile
  @media only screen and (max-width: 482px) {
    font-size: 0.75rem;
    width: 100%;
    padding: 1rem 0;
    padding-left: 1rem;
    padding-right: 0.5rem;
    flex-wrap: wrap;
    h2 {
      flex-basis: 100%;
    }

    h3 {
      font-size: 1.2rem;
    }
  }

  // tablet
  @media only screen and (min-width: 768px) and (max-width: 912px) {
    padding-left: 2rem;
    padding-right: 0.5rem;
    flex-wrap: wrap;
    h2 {
      flex-basis: 100%;
    }
  }
`;

const StyledSiteLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 23%;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: white;
    margin: 5px 0;
    width: fit-content;
  }
`;
const StyledServices = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;

  a {
    text-decoration: none;
    color: white;
    margin: 5px 0;
    width: fit-content;
  }
`;
const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;

  a {
    text-decoration: none;
    color: white;
    width: fit-content;
  }
  .contact-no,
  .location {
    display: flex;
  }
  .contact-no {
    div {
      margin: 10px;
    }
  }
  .location {
    div,
    p {
      margin: 10px;
      text-align: left;
    }
    p {
      width: 80%;
    }
  }
`;

export default Footer;
