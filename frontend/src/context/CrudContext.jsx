import { createContext, useContext, useState } from "react";
import { useMain } from "./MainContext";

const CrudContext = createContext();

export default function ({ children }) {
  const { product, setProduct } = useMain();

  //
  const [successAdd, setSuccessAdd] = useState(false);
  //
  const triggerTimeout = () => {
    setSuccessAdd(true);

    setTimeout(() => {
      setSuccessAdd(false);
    }, 2500);
  };
  //
  //
  // Submit Form POST
  const addPhone = async (obj) => {
    const PostData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };
    const response = await fetch(`http://localhost:3001/products`, PostData);
    const data = await response.json();
    console.log(data);

    if (data.success === true && data.product) {
      setProduct((curr) => [...curr, data.product]);
      triggerTimeout();
      return data;
    }
    throw new Error(data.details.map((el) => el.message));
  };
  //
  //

  // RemovePhone

  const removePhone = async (index) => {
    const PostData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `http://localhost:3001/products/${index}`,
      PostData,
    );
    const data = await response.json();
    console.log(data);

    if (data.success === true) {
      const removedPhone = product.filter((el) => el.id !== parseInt(index));
      setProduct(removedPhone);
      return data;
    }
    throw new Error(data);
  };

  // UptadePhone

  const uptadePhone = async (index, newObj) => {
    const PostData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    };
    const response = await fetch(
      `http://localhost:3001/products/${index}`,
      PostData,
    );
    const data = await response.json();
    console.log(data);

    if (data.success === true) {
      setProduct((curr) =>
        curr.map((t) => (t.id === index ? data.product : t)),
      );
      return data;
    }
    throw new Error(data);
  };
  const values = { removePhone, addPhone, successAdd, uptadePhone };
  return <CrudContext.Provider value={values}>{children}</CrudContext.Provider>;
}

export function useCrud() {
  return useContext(CrudContext);
}
