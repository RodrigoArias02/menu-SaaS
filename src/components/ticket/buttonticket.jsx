import "../../css/ticket.css"
import shop from "../../assets/icons/shop.png"
const ButtonTicket = (total) => {
  return (
    <button
        type="button"
        className="button-bottom shadowbutton">
        <div className="ticket-text-button">
          <p>Confirmar pedido</p>
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
            {total.total ? total.total.toLocaleString() : "0"}
          </span>
        </div>

      </button>
  );
};

export default ButtonTicket;
      