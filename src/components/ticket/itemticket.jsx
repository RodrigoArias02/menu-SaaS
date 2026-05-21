import "../../css/ticket.css";

const ItemTicket = ({ name, price, quantity, category, onDelete  }) => {
let newName;
    if(category=="empanada"){
        newName = `E / ${name} ` 
    }else if(category=="canastitas"){
        newName = `C / ${name} ` 
    }else{
        newName=name;
    }
   
  return (
    <article className="ticket-item" >
      {/* Fila Superior: Nombre y botón Editar */}
      <div className="ticket-item-top">
        <p className="ticket-item-name">{newName}</p>
        <button type="button" className="ticket-item-edit-btn" >
          Editar
        </button>
      </div>

      {/* Fila Inferior: Cantidad, Precio y Eliminar */}
      <div className="ticket-item-bottom">
        <div className="ticket-item-details">
          <span className="ticket-item-quantity">(x{quantity})</span>
          <span className="ticket-item-price">${price*quantity}</span>
        </div>
        
        {/* Botón de borrado con tu icono */}
        <button type="button" className="ticket-item-delete-btn" onClick={onDelete} >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </article>
  );
};

export default ItemTicket;