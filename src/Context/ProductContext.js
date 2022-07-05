import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://matrixshop-backend.herokuapp.com/products`
        );
        setProducts(response.data);
        console.log("Backend data", response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
