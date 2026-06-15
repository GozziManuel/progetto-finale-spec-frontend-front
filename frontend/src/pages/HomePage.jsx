import { Link } from "react-router-dom";
import "../assets/css/Homepage.css";
import Smartphone from "../cards/Smartphone";
import { useMain } from "../context/MainContext";

export default function HomePage() {
  const { product } = useMain();
  const productCopy = [...product];
  const spliced = productCopy?.splice(0, 4);
  console.log(spliced);

  return (
    <>
      <div className="mainContainer">
        <section className="py-5 text-center container">
          <div className="row py-lg-5 justify-content-center">
            <div className="col-lg-8 col-md-10">
              <h1 className="fw-bold display-3 mb-3 orbitron ColorMain">
                Il tuo negozio, <br /> sempre in tasca.
              </h1>

              <p className=" fs-4 mb-4 white spaceGrotesk">
                PocketShop rivoluziona il tuo modo di scegliere la tecnologia.
                Esplora gli ultimi top di gamma, confronta le specifiche
                tecniche in un tocco e acquista il tuo prossimo smartphone in
                totale sicurezza al miglior prezzo del web.
              </p>

              {/* Buttons */}
              <div className=" gap-2 d-sm-flex justify-content-sm-center spaceGrotesk">
                <button
                  type="button"
                  className="btn btn-primary  px-4 me-3 ButtonHome1"
                >
                  Inizia Ora
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary   px-4 ButtonHome2  "
                >
                  Scopri di più
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* INFO SECTION */}
        <section
          className="container py-5"
          style={{ borderTop: "1px solid #21262d" }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="orbitron ColorMain">Un assaggio del negozio</h1>

            <div className="row g-5 mt-3 d-flex justify-content-center">
              {spliced.map((el) => (
                <div
                  className="col-lg-4 col-12 col-xl-3 col-xxl-3 col-md-4 col-sm-6"
                  key={el.id}
                >
                  <Smartphone
                    category={el?.category}
                    title={el?.title}
                    id={el?.id}
                  />
                </div>
              ))}
            </div>
            <Link
              className=" mt-4 px-3 py-2  d-inline-block text-decoration-none NavigateButton spaceGrotesk"
              to={"/SmartShop"}
            >
              Vedi il negozio...
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
