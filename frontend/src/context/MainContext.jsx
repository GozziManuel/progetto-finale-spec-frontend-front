import { createContext, useContext, useEffect, useState } from "react";

const MainContext = createContext();

export default function MainProvider({ children }) {
  const [product, setProduct] = useState([]);

  const handleAsync = async (url) => {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
  };

  const products = async () => {
    const productList = handleAsync(`http://localhost:3001/products`);
    return productList;
  };
  useEffect(() => {
    const resultProduct = async () => {
      const result = await products();
      setProduct(result);
    };
    resultProduct();
  }, []);
  //
  //
  //
  const productsDetailed = async (id) => {
    const productList = handleAsync(`http://localhost:3001/products/${id}`);
    return productList;
  };
  //

  const values = {
    product,
    setProduct,
    productsDetailed,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}

export function useMain() {
  return useContext(MainContext);
}
