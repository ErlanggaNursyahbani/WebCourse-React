import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { testimonial } from "../data";

const TestimonialComponent = () => {
  return (
    <div className="testimonial">
      <div className="w-100 min-vh-100 d-flex ">
        <Container>
          <Row className="mb-5">
            <Col className="mb-2">
              <h1 className="text-center fw-bold">Testimonial</h1>
              <p className="text-center">
                Ini kata mereka yang sudah membeli kelas kami!
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                992: { slidesPerView: 2, spaceBetween: 50 },
                1200: { slidesPerView: 3, spaceBetween: 50 },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {testimonial.map((data) => (
                <SwiperSlide key={data.id} className="shadow-md">
                  <div className="pt-2">
                    <img src={data.image} alt="unsplash.com" />
                    <div>
                      <h4 className="fw-bold mt-2">{data.name}</h4>
                      <h6 className="mb-3">{data.skill}</h6>
                    </div>
                    <p>{data.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TestimonialComponent;
