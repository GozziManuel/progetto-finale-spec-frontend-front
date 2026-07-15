import { useMain } from "../context/MainContext";
import ToCompareCard from "../cards/ToCompareCard";
import { useState } from "react";
import ComparatedCard from "../cards/ComparatedCard";
import "../assets/css/Comparator.css";

export default function ComparatorPage() {
  const { product, comparatedProduct, ComparatorFetch, comparatedArray } =
    useMain();

  return (
    //
    // Section CompareCARD
    <>
      <section className="containerBase">
        <h1 className="orbitron ColorMain">
          Compara dei prodotti per vedere quale stai cercando!
        </h1>
        <div className="row g-5 mt-0  ">
          {product.map((el) => {
            return (
              <div
                className="col-lg-4 col-12 col-xl-2 col-xxl-2 col-md-4 col-sm-6"
                key={el.id}
              >
                <ToCompareCard
                  category={el.category}
                  title={el.title}
                  id={el.id}
                />
              </div>
            );
          })}
        </div>
        <hr className="mt-5 mb-0" />
      </section>

      {/* COMPARATOR */}
      <section className="ComparatorContainer">
        <div className="mt-1">
          <h2 className="orbitron ColorMain text-center">Vedi Comparazioni</h2>
          <div className="row g-5 mt-0 d-flex justify-content-center ">
            {comparatedProduct.map((el) => {
              return (
                <div
                  className="col-lg-4 col-12 col-xl-2 col-xxl-2 col-md-4 col-sm-6"
                  key={el.id}
                >
                  <ComparatedCard
                    category={el.category}
                    title={el.title}
                    id={el.id}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center">
            {comparatedProduct.length === 0 ? (
              <h4 className="spaceGrotesk ColorMain mt-3 mb-5">
                Aggiungi Smarthpone Al comparatore!
              </h4>
            ) : comparatedProduct.length === 1 ? (
              <h4 className="spaceGrotesk ColorMain mt-3 mb-5">
                Aggiungine Almeno 2 per comparare!
              </h4>
            ) : (
              <button
                className="compareButton my-5 "
                onClick={() => ComparatorFetch()}
              >
                COMPARA!
              </button>
            )}
          </div>
        </div>
        <div className="row g-5 d-flex justify-content-center">
          {comparatedArray.length === 0 ? (
            <div></div>
          ) : (
            <h2 className="orbitron text-center">Ecco il risultato!</h2>
          )}

          {comparatedArray.map((el) => {
            return (
              <div
                className={
                  comparatedArray.length === 2
                    ? "col-md-6 col-sm-6 col-lg-6 col-xl-4"
                    : comparatedArray.length === 3
                      ? "col-4"
                      : comparatedArray.length === 4
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
                          <span className="titleSpan">Gigabyte Interni: </span>
                          {el.phoneGB}gb
                        </p>
                        <p>
                          <span className="titleSpan">Gigabyte di ram: </span>
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
        </div>
      </section>
    </>
  );
}
