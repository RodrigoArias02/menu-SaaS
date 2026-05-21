import "../../css/cart.css";

import shop from "../../assets/icons/shop.png";

const ButtonCart = ({
  totalItems,
  totalPrice,
  isModalOpen,
  setActiveModal,
  estado
}) => {

  if (
    totalItems === 0 ||
    isModalOpen
  ) return null;
  let clase;
  if(estado==1){
    clase="none";
  }else{
    clase="";
  }
  return (
    <div className="container-button-cart">

      {/* Pestaña superior */}
      <div className={`button-top ${clase}`}>
        <span>Ver pedido</span>
      </div>

      {/* Botón principal inferior */}
      <button
        type="button"
        className="button-bottom"
        onClick={() =>
          setActiveModal("cart")
        }
      >

        {/* Cantidad */}
        <div className="cart-badge-circle">
          {totalItems}
        </div>

        {/* Separador */}
        <div className="cart-divider"></div>

        {/* Precio */}
        <div className="cart-price-container">

          <img
            src={shop}
            alt="Carrito"
            className="cart-icon"
          />

          <span className="cart-price-text">
            ${totalPrice.toLocaleString()}
          </span>

        </div>

      </button>

    </div>
  );
};

export default ButtonCart;