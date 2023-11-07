import React from "react";
import SectionView from "../components/section/SectionView";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "../components/ItemCard";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlistArray = useSelector((state) => state.wishlist);
  return (
    <Container className="py-5">
      <SectionView title="Wishlist" sidescroll={false}>
        <Row>
          {wishlistArray.length > 0 ? (
            wishlistArray.map((i) => (
              <Col lg="3" xs="12" className="mb-4" key={i}>
                <ItemCard showWL={false} product={i} />
              </Col>
            ))
          ) : (
            <p>Wishlist is Empty</p>
          )}
        </Row>
      </SectionView>
    </Container>
  );
};

export default Wishlist;
