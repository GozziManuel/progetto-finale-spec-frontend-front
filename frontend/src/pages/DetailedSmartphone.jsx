import { useNavigate, useParams } from "react-router-dom";
import { useMain } from "../context/MainContext";
import { useEffect, useState } from "react";
import { useCrud } from "../context/CrudContext";
import UptadeModal from "../components/UptadeModal";

export default function DetailedSmartphone() {
  // Importing from context
  const { product, productsDetailed } = useMain();
  const { removePhone } = useCrud();

  // states
  const [productDetailed, setProductDetailed] = useState([]);
  const [modalButton, setModalButton] = useState(false);

  //
  //
  // state for modal
  const [show, setShow] = useState(false);

  // Navigate
  //
  const navigate = useNavigate();
  // Id params
  const { id } = useParams();

  //   Getting data detailed
  useEffect(() => {
    const resultProductDetailed = async () => {
      const result = await productsDetailed(id);
      setProductDetailed(result.product);
    };
    resultProductDetailed();
  }, [product, id, productsDetailed]);
  //
  //
  // removed Navigation
  useEffect(() => {
    if (!productDetailed) {
      navigate("/");
    }
  }, [productDetailed]);

  const removePhoneSubmit = (id) => {
    try {
      removePhone(id);
      navigate("/SmartList");
    } catch (error) {
      console.error(error);
    }
  };
  //
  //
  return (
    // Detailed Card
    <section className="containerBase">
      <div>
        <h3 className="ColorMain orbitron">{productDetailed?.title}</h3>
        <h4 className="spaceGrotesk">
          {productDetailed?.brand} - {productDetailed?.system}
        </h4>
        <div className="d-flex containerInfoPhone">
          <div className="">
            <img
              src={productDetailed?.imageUrl}
              alt="phone"
              className="phoneImg"
            />
          </div>
          <div className="spaceGrotesk">
            <p>
              <span className="titleSpan">Gigabyte Interni: </span>
              {productDetailed?.phoneGB}gb
            </p>
            <p>
              <span className="titleSpan">Gigabyte di ram: </span>
              {productDetailed?.ramGB}gb
            </p>
            <p>
              <span className="titleSpan">Hertz: </span>
              {productDetailed?.phoneHz}hz
            </p>
            <p>
              <span className="titleSpan">Screen Size: </span>
              {productDetailed?.screenSize} pollici
            </p>
            <p>
              <span className="titleSpan">releaseYear: </span>
              {productDetailed?.releaseYear}
            </p>
            <p>
              <span className="titleSpan">Watt di Ricarica: </span>
              {productDetailed?.wattCharge} W
            </p>
          </div>
        </div>
        <h3 className="mt-4 spaceGrotesk ColorMain">
          {productDetailed?.price} &euro;
        </h3>
        {!modalButton ? (
          <button
            className="btnDelete spaceGrotesk p-2"
            onClick={() => setModalButton(true)}
          >
            Elimina
          </button>
        ) : (
          <div className="spaceGrotesk d-flex flex-column  ">
            Sei sicuro di volerlo eliminare?
            <div>
              <button
                className="undoButton me-4"
                onClick={() => setModalButton(false)}
              >
                Annulla
              </button>
              <button
                className="btnDelete"
                onClick={() => removePhoneSubmit(id)}
              >
                Conferma
              </button>
            </div>
          </div>
        )}
        {!modalButton && (
          <button
            className="undoButton spaceGrotesk p-2 ms-4"
            onClick={() => setShow(true)}
          >
            Modifica
          </button>
        )}
        <UptadeModal
          show={show}
          setShow={() => setShow(false)}
          productDetailed={productDetailed}
        />
      </div>
    </section>
  );
}
