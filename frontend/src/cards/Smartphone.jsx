import { Link } from "react-router-dom";
import "../assets/css/SmartShop.css";

export default function Smartphone({ category, title, id }) {
  return (
    <div className="SmartphoneCard h-100 d-flex justify-content-center align-items-center">
      <div>
        <div className=" spaceGrotesk ">
          <p>
            <span className="fw-bold ColorMain">category:</span> {category}
          </p>
          <p>
            <span className="fw-bold ColorMain">name:</span> {title}
          </p>
          <Link
            className="seeMoreButton px-3 py-2 my-1 d-inline-block"
            to={`/Phone/${id}`}
          >
            See info!
          </Link>
        </div>
      </div>
    </div>
  );
}
