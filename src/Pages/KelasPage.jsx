import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import { useNavigate } from "react-router-dom"; // pastikan untuk mengimpor useNavigate jika diperlukan

const Kelaspage = () => {
  const navigate = useNavigate(); // gunakan hook useNavigate

  return (
    <div className="kelas min-vh-100">
      <Container>
        <Row>
          <Col>
            <div>
              <h1 className="text-center fw-bold">Semua Kelas</h1>
              <p className="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
          </Col>
        </Row>
        <Row className="pilihan-kelas">
          {semuaKelas.map((kelas) => (
            <Col
              key={kelas.id}
              lg={3}
              md={4}
              sm={6}
              xs={12}
              className="kelas-card shadow-lg mb-4 "
            >
              <img
                src={kelas.image}
                alt="unplash.com"
                className="mb-1 rounded-1"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="kelas-card-desc">
                <i className={kelas.star1}></i>
                <i className={kelas.star2}></i>
                <i className={kelas.star3}></i>
                <i className={kelas.star4}></i>
                <i className={kelas.star5}></i>
                <h5 className="mb-0">{kelas.title}</h5>
              </div>
              <div className="kelas-card-price">
                <p className="mb-0">{kelas.price}</p>
                <button className="btn button-87">Beli Kelas &gt;&gt;</button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Kelaspage;
