import { useRef, useState } from "react";
import "../assets/css/addSmartphone.css";
import { useMain } from "../context/MainContext";

export default function AddSmartphonePage() {
  const { addPhone } = useMain();
  //   State for form
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    brand: "",
    price: 0,
    releaseYear: 2000,
    system: "",
    screenSize: 5.41,
    ramGB: 4,
    phoneGB: 64,
    phoneHz: 0,
    wattCharge: 15,
    imageUrl: "",
  });
  // Errors handler

  const [error, setError] = useState(false);

  // REFS
  const TitleRef = useRef();
  const CategoryRef = useRef();
  const SystemRef = useRef();
  const BrandRef = useRef();
  const ImgRef = useRef();

  //   Tracing inputs
  const handleChange = (e) => {
    const { value, name, type } = e.target;

    setFormData((curr) => ({
      ...curr,
      [name]: value,
    }));
  };

  //   Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPhone = {
      ...formData,
      title: TitleRef.current.value,
      category: CategoryRef.current.value,
      brand: BrandRef.current.value,
      system: SystemRef.current.value,
      imageUrl: ImgRef.current.value,
      phoneHz: parseFloat(formData.phoneHz),
      price: parseFloat(formData.price),
      releaseYear: parseFloat(formData.releaseYear),
      screenSize: parseFloat(formData.screenSize),
      ramGB: parseFloat(formData.ramGB),
      phoneGB: parseFloat(formData.phoneGB),
      wattCharge: parseFloat(formData.wattCharge),
    };
    if (
      TitleRef.current.value.trim() === "" ||
      CategoryRef.current.value.trim() === "" ||
      BrandRef.current.value.trim() === "" ||
      SystemRef.current.value.trim() === "" ||
      ImgRef.current.value.trim() === "" ||
      formData.phoneHz === ""
    ) {
      console.error("vuoto");
      setError(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else {
      try {
        await addPhone(newPhone);
        console.log("aggiunto");
        setError(false);
        setFormData({
          title: (TitleRef.current.value = ""),
          category: (CategoryRef.current.value = ""),
          brand: (BrandRef.current.value = ""),
          system: (SystemRef.current.value = ""),
          imageUrl: (ImgRef.current.value = ""),
          price: 0,
          releaseYear: 2000,
          screenSize: 5.41,
          ramGB: 4,
          phoneGB: 64,
          phoneHz: 0,
          wattCharge: 15,
        });
      } catch (error) {
        console.log(error.message);
      }
    }

    console.log(newPhone);
  };
  return (
    <section className="containerBase">
      <h2 className="mb-5 orbitron titleAdd">Aggiungi Nuovo Smartphone</h2>
      <div className="spaceGrotesk">
        <form onSubmit={handleSubmit} className=" row form-container">
          {error && (
            <div className="error my-5">
              <h3 className=" ">Casella di Testo vuota ricontrolla!</h3>
            </div>
          )}

          {/* Info Base */}
          <h4>Info Base</h4>
          <div className="form-group col-lg-6 col-md-6  mt-2">
            <label>Nome Cellulare (Title):</label>
            <input
              type="text"
              name="title"
              // value={formData.title}
              // onChange={handleChange}
              ref={TitleRef}
              //   required
            />
          </div>
          <div className="form-group col-lg-6 col-md-6 mt-2">
            <label>Categoria:</label>
            <select
              name="category"
              // value={formData.category}
              // onChange={handleChange}
              ref={CategoryRef}
            >
              <option value="">Scegli la categoria!</option>

              <option value="Smartphone">Smartphone</option>
              <option value="Telefono">Telefono</option>
            </select>
          </div>
          <div className="form-group col-lg-6 col-md-6  mt-2">
            <label>Marca (Brand):</label>
            <input
              type="text"
              name="brand"
              // value={formData.brand}
              // onChange={handleChange}
              ref={BrandRef}
              //   required
            />
          </div>

          <div className="form-group col-lg-6 col-md-6  mt-2">
            <label>Prezzo (&euro;):</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              //   required
            />
          </div>

          <div className="form-group col-lg-6 col-md-6 mt-2">
            <label>Anno di uscita:</label>
            <input
              type="number"
              name="releaseYear"
              value={formData.releaseYear}
              onChange={handleChange}
              min="2000"
              max={new Date().getFullYear()}
              //   required
            />
          </div>

          {/* Specifiche Tecniche */}
          <h4 className=" mt-5 mb-0">Specifiche Tecniche</h4>
          <div className="form-group col-lg-6 col-md-6 mt-2">
            <label>Sistema Operativo:</label>
            <select
              name="system"
              // value={formData.system}
              // onChange={handleChange}
              ref={SystemRef}
            >
              <option value="">Scegli il Sistema operativo!</option>
              <option value="Android">Android</option>
              <option value="iOS">iOS</option>
            </select>
          </div>

          <div className="form-group col-lg-6 col-md-6 mt-2">
            <label>Grandezza Schermo (in Pollici):</label>
            <div className="d-flex input-container">
              <input
                type="number"
                name="screenSize"
                value={formData.screenSize}
                onChange={handleChange}
                step="0.01"
                min="5.41"
                // required
              />
              <p className="mb-0">pollici</p>
            </div>
          </div>

          <div className="form-group col-lg-6 col-md-6 mt-2">
            <label>RAM (GB):</label>

            <div className="d-flex input-container">
              <input
                type="number"
                name="ramGB"
                value={formData.ramGB}
                onChange={handleChange}
                min="4"
                step={4}
                // required
              />{" "}
              <p className="mb-0">gb</p>
            </div>
          </div>

          <div className="form-group col-lg-6 col-md-6 mt-2 d">
            <label>Memoria Interna (GB):</label>
            <div className="d-flex input-container">
              <input
                type="number"
                name="phoneGB"
                value={formData.phoneGB}
                onChange={handleChange}
                min="64"
                // required
              />
              <p className="mb-0">gb</p>
            </div>
          </div>

          <div className="form-group col-lg-6 col-md-6 mt-2">
            <label>Frequenza Schermo (Hz):</label>
            <div className="d-flex input-container">
              <select
                name="phoneHz"
                value={formData.phoneHz}
                onChange={handleChange}
              >
                <option value="">Scegli gli hertz!</option>

                <option value={60}>60 </option>
                <option value={90}>90 </option>
                <option value={120}>120</option>
              </select>
              <p className="mb-0">Hz</p>
            </div>
          </div>

          <div className="form-group col-lg-6 col-md-6 mt-2">
            <label>Potenza Ricarica (Watt):</label>
            <div className="d-flex input-container">
              <input
                type="number"
                name="wattCharge"
                value={formData.wattCharge}
                onChange={handleChange}
                min="15"
                // required
              />
              <p className="mb-0">Watt</p>
            </div>
          </div>

          {/* Immagini Opzionali */}
          <h4 className=" mt-5 mb-0">Immagine</h4>

          <div className="form-group">
            <label>URL Immagine:</label>
            <input
              type="url"
              name="imageUrl"
              // value={formData.imageUrl}
              // onChange={handleChange}
              ref={ImgRef}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="seeMoreButton mt-4 py-2">
              Salva Prodotto
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
