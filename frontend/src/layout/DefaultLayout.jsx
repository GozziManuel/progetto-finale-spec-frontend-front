import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default function DefaultLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1 " style={{ marginTop: "90px" }}>
        <Outlet />
      </main>
      <Link className=" favouritestar spaceGrotesk" to={"/favourites"}>
        Preferiti
      </Link>
      <Footer />
    </div>
  );
}
