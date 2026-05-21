import "../../css/modal.css";

import QuantitySelector from "./QuantitySelector.jsx";
import { useState } from "react";
import { useCart } from "../cart/useCart.jsx";
import Modal from "../ui/modal.jsx";

const ProductModal = ({
  isOpen,
  onClose,
  product,
}) => {
  const { addToCart, total } = useCart();

  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <img
        src={`/products/${product.image}`}
        alt={product.name}
        className="modal-image"
      />

      <div className="modal-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price.toLocaleString()}</h3>

        <QuantitySelector
          quantity={quantity}
          increase={increase}
          decrease={decrease}
        />

        <button
          className="modal-button"
          onClick={() => {
            addToCart(product, quantity);
            onClose();
          }}
        >
          Agregar a mi pedido {" "}$
          {(total + product.price * quantity).toLocaleString()}
        </button>
      </div>
    </Modal>
  );
};

export default ProductModal;

