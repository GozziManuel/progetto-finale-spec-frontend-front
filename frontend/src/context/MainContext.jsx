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
    const productList = await handleAsync(`http://localhost:3001/products`);
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
    const productList = await handleAsync(
      `http://localhost:3001/products/${id}`,
    );
    return productList;
  };
  //

  //
  //
  // PReferiti

  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem("favourites");
    if (!stored) {
      return [];
    }

    try {
      const parsed = JSON.parse(stored);
      return parsed;
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourites = (num) => {
    const obj = product.find((el) => el.id === num);

    if (favourites.some((el) => el.id === obj.id)) {
      setFavourites((current) => current.filter((el) => el.id !== obj.id));
    } else {
      setFavourites((current) => [...current, obj]);
    }
  };
  //
  //
  // Comparator
  const [comparatedProduct, setComparatedProduct] = useState([]);

  const addToComparator = (id) => {
    const CurrentPhone = product.find((el) => el.id === id);
    if (comparatedProduct.find((el) => el === CurrentPhone)) {
      const trueComparated = comparatedProduct.filter(
        (el) => el !== CurrentPhone,
      );

      setComparatedProduct(trueComparated);
    } else {
      setComparatedProduct((curr) => [...curr, CurrentPhone]);
    }
  };

  //
  //
  // Comparator Fetch
  const [comparatedArray, setComparatedArray] = useState([]);
  const ComparatorFetch = async () => {
    setComparatedArray([]);
    setComparatedProduct([]);
    const arrayId = comparatedProduct.map(
      (el) => `http://localhost:3001/products/${el.id}`,
    );

    await Promise.all(
      arrayId.map((url) => fetch(url).then((res) => res.json())),
    ).then((val) =>
      val.forEach((el) => {
        setComparatedArray((curr) => [...curr, el.product]);
      }),
    );
  };

  //
  //
  // EXPORT
  const values = {
    product,
    setProduct,
    productsDetailed,
    addFavourites,
    setFavourites,
    favourites,
    comparatedProduct,
    addToComparator,
    comparatedArray,
    ComparatorFetch,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}

export function useMain() {
  return useContext(MainContext);
}
