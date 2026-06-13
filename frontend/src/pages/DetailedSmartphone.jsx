import { useParams } from "react-router-dom";
import { useMain } from "../context/MainContext";
import { useEffect } from "react";

export default function DetailedSmartphone() {
  // Importing from context
  const { product, productsDetailed, productDetailed, setProductDetailed } =
    useMain();
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
      <h1>{id}</h1>
    </section>
  );
}
