import "../../css/ticket.css";

const ItemTicket = ({
  name,
  price,
  quantity,
  category,
  onDelete,
  onEdit
}) => {
  let newName;
  if (category == "empanada") {
    newName = `E / ${name} `;
  } else if (category == "canastitas") {
    newName = `C / ${name} `;
  } else {
    newName = name;
  }

  return (
    <article className="ticket-item">
      <div className="ticket-item-top">
        <p className="ticket-item-name">{newName}</p>

        {/* onEdit debe recibir el quantity actual para que el update funcione */}
        <button
          type="button"
          onClick={() => onEdit?.({ name, price, quantity, category })}
          className="ticket-item-edit-btn"
        >
          Editar
        </button>
      </div>

      <div className="ticket-item-bottom">
        <div className="ticket-item-details">
          <span className="ticket-item-quantity">(x{quantity})</span>
          <span className="ticket-item-price">${price * quantity}</span>
        </div>

        <button
          type="button"
          className="ticket-item-delete-btn"
          onClick={onDelete}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </article>
  );
};

export default ItemTicket;