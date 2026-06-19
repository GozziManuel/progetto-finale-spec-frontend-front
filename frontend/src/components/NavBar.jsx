import { Link, NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";
import { useCrud } from "../context/CrudContext";

export default function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top "
        id=""
        style={{ zIndex: "9" }}
      >
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img src="/pocketShop-icon.png" alt="" className="iconImg" />

            <NavLink
              className="navbar-brand orbitron"
              to={"/"}
              id="navbar-brand"
            >
              PocketShop
            </NavLink>
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
                <NavLink
                  className="nav-link  ms-3"
                  aria-current="page"
                  to={"/SmartShop"}
                  id="nav-item"
                >
                  SmartShop...
                </NavLink>
              </li>

              <li className="nav-item d-flex">
                <NavLink
                  className="nav-link  ms-3"
                  aria-current="page"
                  to={"/Comparator"}
                  id="nav-item"
                >
                  Comparatore
                </NavLink>
              </li>

              <li className="nav-item d-flex">
                <NavLink
                  className="nav-link  ms-3"
                  aria-current="page"
                  to={"/Smartphone/Add"}
                  id="nav-item"
                >
                  Aggiungi Smartphone!
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
