import { useEffect } from "react";
import Hero from "../components/section/Hero";
import { Container, Col, Row } from "react-bootstrap";
import SectionView from "../components/section/SectionView";
import ItemCard from "../components/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { allProducts, error, loading } = useSelector(
    (state) => state.productSlice
  );

  useEffect(
    () => {
      dispatch(fetchProducts());
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <Hero />
      <Container className="my-5">
        <SectionView title="Explore" sidescroll={false}>
          <Row>
            {loading && <div></div>}
            {error && <div>{error}</div>}
            {allProducts.length > 0 &&
              allProducts.map((product) => (
                <Col lg="3" xs="12" className="mb-4" key={product.id}>
                  <ItemCard product={product} showWL={true} />
                </Col>
              ))}
          </Row>
        </SectionView>
      </Container>
    </>
  );
};

export default Home;
