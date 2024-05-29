import { Container, Row, Col, Accordion } from "react-bootstrap";

import { faq } from "../data";

export default function FaqComponent() {
  return (
    <div className="faq">
      <div className="w-100 min-vh-100 d-flex">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center fw-bold">Paling Sering Ditanyakan</h2>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-3 ">
            {faq.map((data) => {
              return (
                <Col key={data.id}>
                  <Accordion className="shadow-sm">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>{data.title}</Accordion.Header>
                      <Accordion.Body>{data.desc}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
