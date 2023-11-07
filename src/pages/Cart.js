import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Modal,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SectionView from "../components/section/SectionView";
import { removeCart, clearCart } from "../redux/cartSlice";

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartArray = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // eslint-disable-next-line
  if (cartArray.length != 0) {
    var total = cartArray.map((i) => i.price).reduce((a, b) => a + b);
    var color = "primary";
  } else {
    total = 0;
    color = "danger";
  }
  return (
    <Container className="py-5">
      <SectionView title="Cart" sidescroll={false}>
        <Row>
          {cartArray.length > 0 ? (
            cartArray.map((i) => (
              <Col lg="12" xs="12">
                <Card className="d-flex mb-3 shadow-sm flex-column flex-lg-row rounded-0">
                  <div className="bg-light p-5 cart-card d-flex align-items-center justify-content-center">
                    <Card.Img
                      src={i.image}
                      className="d-block rounded-0"
                      style={{ width: "100%", maxHeight: "100%" }}
                    />
                  </div>
                  <Card.Body className="bg-body row align-items-center">
                    <Col lg xs="12">
                      <Card.Title className="m-0">{i.title}</Card.Title>
                    </Col>
                    <Col lg xs="12">
                      <Card.Text className="m-0">INR {i.price}</Card.Text>
                    </Col>
                    <Col
                      lg
                      xs="12"
                      className="text-start text-lg-end"
                      onClick={() => dispatch(removeCart(i.id))}
                    >
                      <Button variant="danger" className="rounded-0 ms-auto">
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>Cart is Empty</p>
          )}
        </Row>

        <h4 className="text-end">
          Total: <span className={`text-${color}`}>{total}</span>
        </h4>
        {cartArray.length ? (
          <Button
            variant="primary"
            className="rounded-0 w-100"
            size="lg"
            onClick={() => handleShow()}
          >
            Checkout Now
          </Button>
        ) : (
          <p></p>
        )}
      </SectionView>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="bg-body-tertiary">
          <FloatingLabel
            controlId="email"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              className="rounded-0"
              placeholder="example@domain.com"
            />
          </FloatingLabel>
          <FloatingLabel controlId="password" label="Password" className="mb-3">
            <Form.Control
              type="password"
              className="rounded-0"
              placeholder="8charsthatisalphanumeric"
            />
          </FloatingLabel>
          <FloatingLabel controlId="upi" label="UPI ID" className="mb-3">
            <Form.Control
              type="text"
              className="rounded-0"
              placeholder="domain@upiid"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className="bg-body-secondary">
          <Button
            variant="primary"
            onClick={() => {
              dispatch(clearCart());
              handleClose();
            }}
          >
            Pay Now
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Cart;
