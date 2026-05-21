import "../../css/ticket.css";

const ResumenTicket = (total) => {
    
  return (
    <article className="ticket-resumen" >
        <p>Resumen</p>
        <span className="info-subtotal">
            <p>Subtotal</p>
            <p className="number">{total.total}</p>
        </span>
        <span className="info-envio">
            <p>Envio</p>
            <p>-</p>
        </span>
        <span className="info-total">
            <p>Total</p>
            <p className="number">{total.total}</p>
        </span>
        
    </article>
  );
};

export default ResumenTicket;