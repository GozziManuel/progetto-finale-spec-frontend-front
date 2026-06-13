import { Link } from "react-router-dom";
import "../assets/css/SmartShop.css";

export default function Smartphone({ category, title, id }) {
  return (
    <div className="SmartphoneCard h-100 d-flex justify-content-center align-items-center">
      <div>
        <div className=" spaceGrotesk ">
          <p>
            <span className="fw-bold ColorMain">Category:</span> {category}
          </p>
          <p>
            <span className="fw-bold ColorMain">Name:</span> {title}
          </p>
          <Link
            className="seeMoreButton px-3 py-2 my-1 d-inline-block text-decoration-none"
            to={`/Phone/${id}`}
          >
            Vedi info!
          </Link>
        </div>
      </div>
    </div>
  );
}
