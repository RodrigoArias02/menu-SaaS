import "../../css/header.css";

const Header = ({ activeModal, setActiveModal }) => {

  return (
    <>
      <header className="header">

        <span>
          <p className="icon">
            <i className="fa-solid fa-location-dot"></i>
          </p>

          <p>Ubicación: Av. Corrientes 1234</p>
        </span>

        <p
          className="icon camp"
          onClick={() => setActiveModal("header")}
        >
          <i className="fa-regular fa-clock"></i>
        </p>

      </header>

      {activeModal === "header" && (

        <div
          className="modal-overlay"
          onClick={() => setActiveModal(null)}
        >

          <div
            className="header-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setActiveModal(null)}
            >
              ✕
            </button>

            <h2>Horarios</h2>

            <div className="schedule">

              <p>
                <strong>Lunes a Viernes:</strong>
                18:00 - 00:00
              </p>

              <p>
                <strong>Sábados y Domingos:</strong>
                19:00 - 02:00
              </p>

            </div>

            <h2>Redes Sociales</h2>

            <div className="socials">

              <a href="#">
                <i className="fa-brands fa-instagram"></i>
                Instagram
              </a>

              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
                WhatsApp
              </a>

              <a href="#">
                <i className="fa-brands fa-facebook"></i>
                Facebook
              </a>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Header;