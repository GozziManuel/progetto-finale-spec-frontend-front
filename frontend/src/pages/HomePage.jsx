import "../assets/css/Homepage.css";
export default function HomePage() {
  return (
    <>
      <div className="mainContainer">
        <section className="py-5 text-center container">
          <div className="row py-lg-5 justify-content-center">
            <div className="col-lg-8 col-md-10">
              <h1 className="fw-bold display-3 mb-3 orbitron ColorMain">
                Il tuo negozio, sempre in tasca.
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

        {/* 2. INFO SECTION: I Punti di Forza (Griglia a 3 colonne) */}
        <section
          className="container py-5"
          style={{ borderTop: "1px solid #21262d" }}
        >
          <div className="">
            <h1>First Products</h1>
          </div>
        </section>
      </div>
    </>
  );
}
