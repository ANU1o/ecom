import React from "react";
import { Col, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <div
      herobg="true"
      className="vh-100 d-flex flex-column align-items-center justify-content-center p-5"
    >
      <Row>
        <Col>
          <div
            className="bg-secondary m-0 m-lg-5 p-4 p-lg-5"
            data-bs-theme="dark"
          >
            <Row>
              <Col lg="12" className="text-center">
                <i className="fa-solid fa-store fa-5x mb-4 text-light"></i>
              </Col>
              <Col>
                <h1 className="text-primary text-center text-uppercase mb-5">
                  One Place to get Everything
                </h1>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  officiis excepturi ut voluptate alias velit in ad et unde
                  consectetur quod aliquam, optio praesentium, culpa sint error
                  esse vel enim!
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg="7" className="d-none d-lg-block"></Col>
      </Row>
    </div>
  );
};

export default Hero;
