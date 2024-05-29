import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/img/hero.png";
import NgetikComponent from "./NgetikComponent"; // Import NgetikComponent

const MainComponent = () => {
  let navigate = useNavigate();

  return (
    <header className="main w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center animate__animated animate__fadeInUp">
          <Col lg="6">
            <div className="container main-container">
              <h1 className="header-text mb-3">Ayo Ngoding 🚀</h1>
              <div className="">
                <NgetikComponent />
              </div>
              <p className="p-text">
                Mau ditemenin belajar sambil sambil seneng-seneng ? Yuk ngoding
                bareng Elang ! Belajar Gampang dan gak ribet, bisa fokus bisa
                santai dan selalu jadi solusi tepat buat kamu yang mau upgrade
                Skill Coding !
              </p>
            </div>
            <div className="d-flex">
              <button
                className="btn button-87"
                onClick={() => {
                  navigate("/kelas");
                }}
              >
                Ayo ngoding
              </button>
              <button
                className="btn btn-outline-danger btn-custom"
                onClick={() => {
                  navigate("/faq");
                }}
              >
                Tanya Tanya dulu
              </button>
            </div>
          </Col>
          <Col lg="6" className="pt-lg-0 pt-5">
            <img
              className="image animate__animated animate__fadeInUp animate__delay__1s"
              src={HeroImage}
              alt="Hero-image"
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default MainComponent;
