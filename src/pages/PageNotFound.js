import React from "react";
import SectionView from "../components/section/SectionView";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <Container className="my-5">
      <SectionView title="" sidescroll={false}>
        <Row className="align-items-center gap-2">
          <Col lg={3} xs={12}>
            <Image src="/Empty-amico.svg" alt="" />
          </Col>
          <Col className="text-center">
            <h1 className="text-uppercase text-secondary display-6">
              There are no stuffs here
            </h1>
            <p className="text-muted fs-5">Page Not Found</p>
            <Button
              onClick={() => window.history.back()}
              variant="primary"
              size="lg"
              className="rounded-0 mb-5"
            >
              Head Back
            </Button>
          </Col>
        </Row>
      </SectionView>
    </Container>
  );
};

export default PageNotFound;
