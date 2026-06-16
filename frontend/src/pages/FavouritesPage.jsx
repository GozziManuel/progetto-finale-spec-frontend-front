import { Link } from "react-router-dom";
import Smartphone from "../cards/Smartphone";
import { useMain } from "../context/MainContext";

export default function FavouritesPage() {
  const { favourites } = useMain();
  console.log(favourites);

  return (
    <section className="containerBase">
      <h1 className="orbitron ColorMain">I tuoi Preferiti!</h1>

      {/* Mapping Favourites */}
      <div className="row g-5 mt-0  ">
        {favourites.length === 0 ? (
          <div>
            <h2 className="spaceGrotesk">
              Non hai ancora dei preferiti aggiungili!
            </h2>
            <Link
              className="seeMoreButton px-3 py-2 my-1 d-inline-block text-decoration-none"
              to={`/Smartshop`}
            >
              Torna allo shop!
            </Link>
          </div>
        ) : (
          favourites.map((el) => {
            return (
              <div
                className="col-lg-4 col-12 col-xl-2 col-xxl-2 col-md-4 col-sm-6"
                key={el.id}
              >
                <Smartphone
                  category={el.category}
                  title={el.title}
                  id={el.id}
                />
              </div>
            );
          })
        )}
        {}
      </div>
    </section>
  );
}
