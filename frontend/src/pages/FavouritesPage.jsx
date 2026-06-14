import Smartphone from "../cards/Smartphone";
import { useMain } from "../context/MainContext";

export default function FavouritesPage() {
  const { favourites } = useMain();
  console.log(favourites);

  return (
    <section className="containerBase">
      <h1>I tuoi Preferiti!</h1>
      {favourites.map((el) => {
        return (
          <div
            className="col-lg-4 col-12 col-xl-2 col-xxl-2 col-md-4 col-sm-6"
            key={el.id}
          >
            <Smartphone category={el.category} title={el.title} id={el.id} />
          </div>
        );
      })}
    </section>
  );
}
