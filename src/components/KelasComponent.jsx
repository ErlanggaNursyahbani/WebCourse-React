import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { kelasTerbaru } from "../data/index";

const KelasComponent = () => {
  let navigate = useNavigate();

  return (
    <div className="kelas-terbaik w-100 min-vh-100">
      <Container>
        <Row>
          <Col>
            <div>
              <h1 className="text-center fw-bold">Kelas Terbaik!</h1>
              <p className="text-center">
                Kelas berkualitas yang udah banyak banget orang beli
              </p>
            </div>
          </Col>
        </Row>
        <Row className="pilihan-kelas-terbaik">
          {kelasTerbaru.map((kelas) => (
            <Col
              key={kelas.id}
              lg={4}
              md={6}
              sm={12}
              className="mb-4 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={kelas.delay}
            >
              <div className="kelas-card-terbaik shadow-lg">
                <img
                  src={kelas.image}
                  alt="unplash.com"
                  className="mb-1 rounded-1"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="kelas-card-desc-terbaik">
                  <i className={kelas.star1}></i>
                  <i className={kelas.star2}></i>
                  <i className={kelas.star3}></i>
                  <i className={kelas.star4}></i>
                  <i className={kelas.star5}></i>
                  <h5 className="mb-0">{kelas.name}</h5>
                </div>
                <div className="kelas-card-price-terbaik">
                  <p className="mb-0">{kelas.price}</p>
                  <button className="btn button-87">Beli Kelas &gt;&gt;</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <button
            onClick={() => navigate("/kelas")}
            className="btn btn-outline-danger btn-custom last"
          >
            Lihat Semua Kelas
          </button>
        </div>
      </Container>
    </div>
  );
};

export default KelasComponent;
