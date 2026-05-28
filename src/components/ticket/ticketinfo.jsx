import { useCart } from "../cart/usecart.jsx";
import ItemTicket from "./itemticket.jsx";
import ResumenTicket from "./resumenticket.jsx";
import ButtonTicket from "./buttonticket.jsx";
import "../../css/ticket.css"
const TicketInfo = () => {

  const { cart, total,removeFromCart } = useCart();
  
  return (
    <div className="container-ticket">


          <h2>Mi Pedido</h2>
       
          {cart.map(item => (
            <ItemTicket
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                category={item.category}
                onDelete={() => removeFromCart(item.id)}
                onEdit={1}
            />
            ))}
          <ResumenTicket total={total.toLocaleString()} />
          <ButtonTicket  total={total}/>
    </div>
  );
};

export default TicketInfo;