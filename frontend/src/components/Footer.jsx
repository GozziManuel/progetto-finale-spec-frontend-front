import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="mt-5 pt-4 ">
      <div className=" pb-0  container" style={{ marginTop: "0" }}>
        <div className="row mb-5 d-flex ">
          <div className="col-12 col-sm-6">
            <h4 className="orbitron ColorMain">PocketGuide</h4>
            <p className="m-0 fs-5 spaceGrotesk">
              Un progetto dedicato agli amanti della tecnologia e
              dell'innovazione, dove è possibile scoprire e confrontare gli
              smartphone che stanno disegnando il futuro. Uniamo i migliori
              brand sul mercato e un design moderno per offrirti un'esperienza
              di esplorazione e analisi semplice, rapida e sicura.
            </p>
          </div>
          <div className="col-12 col-sm-6 spaceGrotesk mediaMargin">
            <h3 className="orbitron ColorMain">Contact Us</h3>
            <p className=" fs-5">
              Hai bisogno di aiuto per scegliere il tuo prossimo smartphone o
              hai domande sulle spedizioni o richieste particolari? Il nostro
              team di esperti è sempre pronto a supportarti.
            </p>
            <p className=" fs-5 ColorMain" id="email">
              support@pocketguide.com
            </p>
          </div>
        </div>
        <div
          className="footer-bottom-row"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <span className="ColorMain">PocketGuide &copy;</span>
        </div>
      </div>
    </footer>
  );
}
