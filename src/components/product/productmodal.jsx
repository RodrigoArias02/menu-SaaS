import "../../css/modal.css";

import QuantitySelector from "./quantityselector.jsx";
import { useState } from "react";
import { useCart } from "../cart/usecart.jsx";
import Modal from "../ui/modal.jsx";

const ProductModal = ({ isOpen, onClose, product }) => {
  const { addToCart, total, searchInCart  } = useCart();
  
  let productInCart = searchInCart(product?.id);
  var initialQuantity = productInCart ? productInCart.quantity : 1;
  const [quantity, setQuantity] = useState(initialQuantity);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity === 1) return;
    console.log("Decreasing quantity", quantity - 1);
    setQuantity((prev) => prev - 1);
  };

  if(!product) return null;
  
 
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
          Agregar a mi pedido $
          {(total + product.price * quantity).toLocaleString()}
        </button>
      </div>
    </Modal>
  );
};

export default ProductModal;
