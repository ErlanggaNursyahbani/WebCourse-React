import React, { useState } from "react";
import { Container, Row, Col, Accordion, Button, Form } from "react-bootstrap";

const SyaratKetentuanPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="syarat-ketentuan min-vh-100 py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="fw-bold text-center">Syarat dan Ketentuan</h1>
            <p className="text-center">Lorem ipsum dolor sit amet.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              {Array.from({ length: 10 }, (_, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>Ketentuan {index + 1}</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Form>
              <Form.Check
                type="checkbox"
                id="agreementCheckbox"
                label="Saya menyetujui syarat dan ketentuan"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </Form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <Button
              variant="danger"
              disabled={!isChecked}
              onClick={() => alert("Terima kasih telah mendaftar!")}
            >
              Daftar Sekarang
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SyaratKetentuanPage;
