import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer p-5 pt-5">
      <Container>
        <Row>
          <Col className="brands-link col-lg-6 col">
            <h3 className="fw-bold">NgodEL.</h3>
            <p className="desc">
              Mau ditemenin belajar sambil sambil seneng-seneng ? Yuk ngoding
              bareng Elang ! Belajar Gampang dan gak ribet, bisa fokus bisa
              santai dan selalu jadi solusi tepat buat kamu yang mau upgrade
              Skill Coding !
            </p>
            <div className="brands-link d-flex align-items-center mt-4">
              <Link
                className="text-decoration-none d-flex align-items-center"
                to="https://wa.me/628953283339786"
              >
                <i className="fa-brands fa-whatsapp fs-4 me-2"></i>{" "}
                <p className="m-0">+62-895-3283-39786</p>{" "}
              </Link>
            </div>
            <div className="brands-link">
              <Link
                className="text-decoration-none d-flex align-items-center"
                to="mailto:erlangganursyah@gmail.com"
              >
                <i className="fa-regular fa-envelope fs-4 me-2"></i>{" "}
                <p className="m-0">erlangganursyah@gmail.com</p>{" "}
              </Link>
            </div>
          </Col>

          <Col className="d-flex flex-column col-lg-2 col ">
            <h3 className="fw-bold">Menu</h3>
            <Link to="/">Home</Link>
            <Link to="/kelas">Kelas</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/syaratketentuan">Syarat & Ketentuan</Link>
          </Col>
          <Col className="d-flex flex-column col-lg-4 col">
            <h3 className="fw-bold">Alamat</h3>
            <p>
              Indonesia, Jakarta, Jakarta Selatan, BALI MATRAMAN, Tebet,
              Manggarai Selatan.
            </p>
            <div className="d-flex logo">
              <div className="brands-link ">
                <Link
                  className="text-decoration-none d-flex align-items-center"
                  to="https://instagram.com/erlangga.nrsyh"
                >
                  <i className="fa-brands fa-instagram fs-4 me-2"></i>{" "}
                </Link>
              </div>
              <div className="brands-link">
                <Link
                  className="text-decoration-none d-flex align-items-center"
                  to="https://github.com/ErlanggaNursyahbani"
                >
                  <i className="fa-brands fa-github fs-4 me-2"></i>{" "}
                </Link>
              </div>
              <div className="brands-link">
                <Link
                  className="text-decoration-none d-flex align-items-center"
                  to="https://youtube.com/@elanggaaja?si=iYoStmLa3zOPZuLM"
                >
                  <i className="fa-brands fa-youtube fs-4 me-2"></i>{" "}
                </Link>
              </div>
              <div className="brands-link">
                <Link
                  className="text-decoration-none d-flex align-items-center"
                  to="https://www.linkedin.com/in/erlangganursyahbani/"
                >
                  <i className="fa-brands fa-linkedin fs-4 me-2"></i>{" "}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <hr />
          <Col className="d-flex justify-content-center align-items-center p-2">
            <p className="m-0">
              Copyright &copy; 2024 NgodEl. Made in Indonesia ♥.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
