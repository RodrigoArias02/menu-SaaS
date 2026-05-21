import HeroBanner from "../home/herobanner.jsx";
import Categories from "../home/categories.jsx";
import MenuSection from "../home/menuSection.jsx";
import TicketInfo from "../ticket/ticketInfo.jsx";
import ButtonCart from "../cart/buttonCartFixed.jsx";

import { useCart } from "../cart/useCart.jsx";
import Modal from "../ui/modal.jsx";
const Container = ({
  activeModal,
  setActiveModal
}) => {

  const { cart, total } = useCart();

  const totalItems = cart.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  return (
    <div className="container">

      <main className="main-content">

        <HeroBanner />

        <Categories />

        <MenuSection
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />

        <ButtonCart
          totalItems={totalItems}
          totalPrice={total}
          isModalOpen={activeModal !== null}
          setActiveModal={setActiveModal}
          
        />
        <Modal
          isOpen={activeModal === "cart"}
          onClose={() => setActiveModal(null)}
        >
          <TicketInfo/>

        </Modal>
      </main>

    </div>
  );
};

export default Container;