import { useMain } from "../context/MainContext";
import Smartphone from "../cards/Smartphone";

export default function SmartShopPage() {
  const { product } = useMain();
  console.log(product);

  return (
    <section className="containerBase">
      <h1 className="orbitron ColorMain">SmartShop</h1>
      <h2 className="spaceGrotesk">Scegli il tuo telefono!</h2>
      <div className="row g-5 mt-3">
        {product.map((el) => {
          return (
            <div className="col-lg-4 col-12 col-xl-2 col-xxl-2 col-md-4 col-sm-6">
              <Smartphone
                category={el.category}
                title={el.title}
                id={el.id}
                key={el.id}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
