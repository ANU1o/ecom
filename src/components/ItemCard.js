import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { addToWishlist, removeWishlist } from "../redux/wishlistSlice";

const ItemCard = ({ product, showWL }) => {
  const dispatch = useDispatch();
  return (
    <Card className="border-0 rounded-0 mb-3 shadow-sm h-100">
      <div className="img-container d-flex flex-column align-items-center justify-content-center">
        <Card.Img className="img-1by1" variant="top" src={product.image} />
      </div>
      <Card.Body className="bg-body d-flex flex-column">
        <Badge variant="secondary" className="mb-3">
          {product.category}
        </Badge>
        <Card.Title className="text-primary">{product.title}</Card.Title>
        <p className="text-secondary mt-auto">INR {product.price}</p>
        <Button
          variant="primary"
          className="rounded-0 w-100 mb-2"
          onClick={() => {
            dispatch(addToCart(product));
            if (showWL === false) {
              dispatch(removeWishlist(product.id));
            }
          }}
        >
          <i className="fa-solid fa-cart-plus me-1"></i>Add to Cart
        </Button>
        {showWL === true ? (
          <Button
            variant="light"
            className="rounded-0 w-100 mb-2"
            onClick={() => dispatch(addToWishlist(product))}
          >
            <i className="fa-solid fa-heart me-1"></i>Wishlist
          </Button>
        ) : (
          <Button
            variant="danger"
            className="rounded-0 w-100 mb-2"
            onClick={() => dispatch(removeWishlist(product.id))}
          >
            <i className="fa-solid fa-trash me-1"></i>Remove
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
