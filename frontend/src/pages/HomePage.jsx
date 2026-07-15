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
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <h1 className="fw-bold display-2 mb-3 orbitron ColorMain ">
                PocketGuide
              </h1>
              <h2 className=" display-5 mb-3 orbitron ColorMain">
                Il tuo consulente tech, <br /> sempre in tasca.
              </h2>

              <p className=" fs-4 mb-4 white spaceGrotesk">
                PocketGuide rivoluziona il tuo modo di scegliere la tecnologia.
                Esplora gli ultimi top di gamma, confronta le specifiche
                tecniche in un tocco e trova il tuo prossimo smartphone in
                totale sicurezza, analizzando le migliori caratteristiche del
                web.
              </p>

              {/* Buttons */}
              <div className=" gap-2 d-sm-flex justify-content-sm-center spaceGrotesk">
                <Link
                  type="b utton"
                  className=" px-3 py-2 NavigateButton spaceGrotesk "
                  to={"/SmartList"}
                >
                  Scopri di più
                </Link>
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
              className=" mt-4 px-3 py-2   NavigateButton spaceGrotesk"
              to={"/SmartList"}
            >
              Vedi il negozio...
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
