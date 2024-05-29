import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page w-100 min-vh-100">
      <Container>
        <Row className="mb-5">
          <Col>
            <div className="text-center">
              <h1 className="fw-bold">Testimonial</h1>
              <p>Ini kata mereka yang sudah membeli kelas kami!</p>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          {testimonial.map((data) => (
            <Col
              key={data.id}
              lg={4}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <div className="testimonial-card shadow-lg p-4 rounded">
                <div className="text-center">
                  <img
                    src={data.image}
                    alt="unsplash.com"
                    className="rounded-circle mb-3"
                  />
                  <h4 className="fw-bold">{data.name}</h4>
                  <h6 className="text-muted mb-3">{data.skill}</h6>
                </div>
                <p>{data.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialPage;
