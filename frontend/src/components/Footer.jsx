import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="mt-5 pt-4">
      <div className="row pb-0 me-0 d-flex justify-content-center">
        <div className="col-sm-12 col-md-5 mb-5">
          <h4 className="orbitron ColorMain">PocketShop</h4>
          <p className="m-0 fs-5 spaceGrotesk">
            Un progetto dedicato agli amanti della tecnologia e
            dell'innovazione, dove è possibile scoprire e acquistare gli
            smartphone che stanno disegnando il futuro. Uniamo i migliori brand
            sul mercato e un design moderno per offrirti un'esperienza di
            acquisto semplice, rapida e sicura.
          </p>
        </div>
        <div className="col-md-5 col-sm-12 spaceGrotesk">
          <h3 className="orbitron ColorMain">Contact Me</h3>
          <p className=" fs-5">
            Hai bisogno di aiuto per scegliere il tuo prossimo smartphone,
            domande sulle spedizioni o richieste particolari? Il nostro team di
            esperti è sempre pronto a supportarti.
          </p>
          <p className=" fs-5 ColorMain" id="email">
            support@pocketshop.com
          </p>
        </div>
        <div
          className="footer-bottom-row"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <span className="ColorMain">PocketShop &copy;</span>
        </div>
      </div>
    </footer>
  );
}
