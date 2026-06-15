import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top " id="">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img src="/pocketShop-icon.png" alt="" className="iconImg" />

            <Link className="navbar-brand orbitron" to={"/"} id="navbar-brand">
              PocketShop
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item d-flex">
                <Link
                  className="nav-link active ms-3"
                  aria-current="page"
                  to={"/SmartShop"}
                  id="nav-item"
                >
                  SmartShop...
                </Link>
              </li>
              <li className="nav-item d-flex">
                <Link
                  className="nav-link active ms-3"
                  aria-current="page"
                  to={"/Comparator"}
                  id="nav-item"
                >
                  Comparatore
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
