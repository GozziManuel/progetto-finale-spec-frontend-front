import { Link } from "react-router-dom";
import "../assets/css/SmartShop.css";
import { useMain } from "../context/MainContext";

export default function ToCompareCard({ category, title, id }) {
  const { comparatedProduct, addToComparator } = useMain();

  const isClicked = comparatedProduct?.some((f) => f.id === id);

  return (
    <div className="SmartphoneCard h-100 d-flex justify-content-center align-items-center position-relative">
      <div>
        <div className=" spaceGrotesk ">
          <p>
            <span className="fw-bold ColorMain">Category:</span> {category}
          </p>
          <p>
            <span className="fw-bold ColorMain">Name:</span> {title}
          </p>
          {isClicked ? (
            <button
              disabled={true}
              className="clickedButton px-3 py-2 my-1 d-inline-block text-decoration-none"
            >
              Aggiunto!
            </button>
          ) : (
            <button
              className="seeMoreButton px-3 py-2 my-1 d-inline-block text-decoration-none"
              onClick={() => addToComparator(id)}
            >
              Compara!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
