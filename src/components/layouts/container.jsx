import HeroBanner from "../home/Herobanner.jsx";
import Categories from "../home/Categories.jsx";
import MenuSection from "../home/MenuSection.jsx";
import TicketInfo from "../ticket/TicketInfo.jsx";
import ButtonCart from "../cart/ButtonCart.jsx";

import { useCart } from "../cart/useCart.jsx";
import Modal from "../ui/Modal.jsx";
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