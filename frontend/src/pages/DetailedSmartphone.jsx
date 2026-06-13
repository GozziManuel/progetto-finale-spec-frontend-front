import { useParams } from "react-router-dom";
import { useMain } from "../context/MainContext";
import { useEffect, useState } from "react";

export default function DetailedSmartphone() {
  // Importing from context
  const { product, productsDetailed } = useMain();
  const [productDetailed, setProductDetailed] = useState([]);

  // Id params
  const { id } = useParams();

  //   Getting data detailed
  useEffect(() => {
    const resultProductDetailed = async () => {
      const result = await productsDetailed(id);
      setProductDetailed(result.product);
    };
    resultProductDetailed();
  }, []);

  console.log(productDetailed);

  return (
    <section className="containerBase">
      <div>
        <h3 className="ColorMain orbitron">{productDetailed.title}</h3>
        <h4 className="spaceGrotesk">
          {productDetailed.brand} - {productDetailed.system}
        </h4>
        <div className="d-flex containerInfoPhone">
          <div className="">
            <img
              src={productDetailed?.imageUrl}
              alt="phone"
              className="phoneImg"
            />
          </div>
          <div className="spaceGrotesk">
            <p>
              <span className="titleSpan">Gigabyte Interni: </span>
              {productDetailed.phoneGB}gb
            </p>
            <p>
              <span className="titleSpan">Gigabyte di ram: </span>
              {productDetailed.ramGB}gb
            </p>
            <p>
              <span className="titleSpan">Hertz: </span>
              {productDetailed.phoneHz}hz
            </p>
            <p>
              <span className="titleSpan">Screen Size: </span>
              {productDetailed.screenSize} pollici
            </p>
            <p>
              <span className="titleSpan">releaseYear: </span>
              {productDetailed.releaseYear}
            </p>
          </div>
        </div>
        <h3 className="mt-4 spaceGrotesk ColorMain">
          {productDetailed.price} &euro;
        </h3>
      </div>
    </section>
  );
}
