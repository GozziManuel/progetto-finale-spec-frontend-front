import { useEffect, useState } from "react";
import { useMain } from "../context/MainContext";
import { motion, AnimatePresence } from "framer-motion";

export default function QuizPage() {
  const { product } = useMain();
  const [userPhone, setUserPhone] = useState([]);
  const [error, setError] = useState(false);
  const [showResult, setShowResult] = useState(true);
  //FETCHING ALL PRODUCT
  const [fullDetailed, setFullDetailed] = useState([]);
  useEffect(() => {
    if (product.length === 0) return;

    const detailedFetch = async () => {
      const arrayId = product.map(
        (el) => `http://localhost:3001/products/${el.id}`,
      );

      const data = await Promise.all(
        arrayId.map((url) => fetch(url).then((res) => res.json())),
      );

      setFullDetailed(data.map((el) => el.product));
    };

    detailedFetch();
  }, [product]);
  console.log(fullDetailed);
  //

  // Getting select INFOS
  const brandList = [];
  const categoryList = [];
  const systemList = [];
  fullDetailed.forEach((element) => {
    // Brand
    const brandNameList = element.brand;
    if (!brandList.includes(brandNameList)) {
      brandList.push(brandNameList);
    }
    // category
    const categoryNameList = element.category;
    if (!categoryList.includes(categoryNameList)) {
      categoryList.push(categoryNameList);
    }
    // system
    const systemNameList = element.system;
    if (!systemList.includes(systemNameList)) {
      systemList.push(systemNameList);
    }
  });

  const promises = product.map((el) => "");
  const [currentObject, setCurrentObject] = useState({
    category: "",
    brand: "",
    price: 100,
    system: "",
    phoneShowed: 1,
  });
  //

  // tracing INPUTS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentObject((curr) => ({ ...curr, [name]: value }));
    setError(false);
  };
  //
  //
  const TracingUserPhone = (telefono) => {
    let contatore = 0;
    if (telefono.category === currentObject.category) {
      contatore += 20;
    }

    if (telefono.brand === currentObject.brand) {
      contatore += 10;
    }

    if (telefono.system === currentObject.system) {
      contatore += 10;
    }

    if (telefono.price >= currentObject.price) {
      contatore += 10;
    }
    return contatore;
  };
  //
  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      currentObject.brand.trim() === "" ||
      currentObject.system.trim() === "" ||
      currentObject.category.trim() === ""
    ) {
      console.error("campo vuoto");
      setError(true);
      return;
    }
    const ListWithContatore = fullDetailed.map((el) => {
      return { ...el, contatore: TracingUserPhone(el) };
    });
    const ListOrdered = ListWithContatore.sort(
      (a, b) => b.contatore - a.contatore,
    );
    const listSpliced = ListOrdered.splice(0, currentObject.phoneShowed);
    console.log(listSpliced);
    setError(false);
    setUserPhone(listSpliced);
    setShowResult(false);
  };
  return (
    <div className="containerBase ">
      <AnimatePresence mode="wait">
        {showResult === true ? (
          <motion.div
            key="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="orbitron ColorMain mb-5">
              Metti le tue preferenze e vedi cosa esce!
            </h1>
            <form className=" row form-container" onSubmit={handleSubmit}>
              {error && (
                <div className="error my-5 spaceGrotesk">
                  <h3 className=" ">
                    Ricontrolla i campi è necessario compilarli tutti!
                  </h3>
                </div>
              )}
              <div className="form-group col-lg-6 col-md-6 mt-2">
                <label>Quanti Telefoni vuoi vedere?</label>
                <select
                  name="phoneShowed"
                  value={currentObject.phoneShowed}
                  onChange={handleChange}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-6 mt-2">
                <label>Categoria:</label>
                <select
                  name="category"
                  value={currentObject.category}
                  onChange={handleChange}
                >
                  <option value="">Scegli la categoria!</option>

                  {categoryList.map((el) => {
                    return <option value={el}>{el}</option>;
                  })}
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-6 mt-2">
                <label>Categoria:</label>
                <select
                  name="brand"
                  value={currentObject.brand}
                  onChange={handleChange}
                >
                  <option value="">Scegli la categoria!</option>
                  {brandList.map((el) => {
                    return <option value={el}>{el}</option>;
                  })}
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-6  mt-2">
                <label>Prezzo Massimo (&euro;):</label>
                <input
                  type="number"
                  name="price"
                  value={currentObject.price}
                  onChange={handleChange}
                  min={100}
                  required
                />
              </div>

              <div className="form-group col-lg-6 col-md-6 mt-2">
                <label>Sistema Operativo:</label>
                <select
                  name="system"
                  value={currentObject.system}
                  onChange={handleChange}
                >
                  <option value="">Scegli il Sistema operativo!</option>
                  {systemList.map((el) => {
                    return <option value={el}>{el}</option>;
                  })}
                </select>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="seeMoreButton mt-4 py-2">
                  Cerca Prodotto
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="false"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-1"
          >
            <h2 className="orbitron ColorMain text-center">
              Vedi ciò che abbiamo trovato per te!
            </h2>
            <div className="row g-5 mt-0 d-flex justify-content-center ">
              {userPhone.map((el) => {
                return (
                  <div
                    className={
                      userPhone.length === 2
                        ? "col-md-6 col-sm-6 col-lg-6 col-xl-4"
                        : userPhone.length === 3
                          ? "col-4"
                          : userPhone.length === 4
                            ? "col-lg-3 col-md-6 col-sm-6"
                            : "col-lg-3 col-md-6 col-sm-6"
                    }
                    key={el.id}
                  >
                    <div
                      className="border px-3 py-3"
                      style={{
                        backgroundColor: "#1b2330",
                        height: "100%",
                        maxWidth: "100%",
                      }}
                    >
                      <h3 className="ColorMain orbitron">{el.title}</h3>
                      <h4 className="spaceGrotesk">
                        {el.brand} - {el.system}
                      </h4>
                      <div className="d-flex containerInfoPhone row">
                        <div className="col-12">
                          <img
                            src={el.imageUrl}
                            alt="phone"
                            className="phoneImg"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "400px",
                            }}
                          />
                        </div>
                        <div className="col-12">
                          <div className="spaceGrotesk">
                            <p>
                              <span className="titleSpan">
                                Gigabyte Interni:{" "}
                              </span>
                              {el.phoneGB}gb
                            </p>
                            <p>
                              <span className="titleSpan">
                                Gigabyte di ram:{" "}
                              </span>
                              {el.ramGB}gb
                            </p>
                            <p>
                              <span className="titleSpan">Hertz: </span>
                              {el.phoneHz}hz
                            </p>
                            <p>
                              <span className="titleSpan">Screen Size: </span>
                              {el.screenSize} pollici
                            </p>
                            <p>
                              <span className="titleSpan">releaseYear: </span>
                              {el.releaseYear}
                            </p>
                            <p>
                              <span className="titleSpan">wattCharge: </span>
                              {el.wattCharge} W
                            </p>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-4 spaceGrotesk ColorMain">
                        {el.price} &euro;
                      </h3>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={() => setShowResult(true)}
                className="seeMoreButton mt-4 py-2"
              >
                Torna indietro
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
