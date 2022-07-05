import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token");
    return token || null;
  });

  useEffect(() => {
    let timeoutHandle = 0;
    if (token) {
      localStorage.setItem("token", token);
      const decoded = jwt_decode(token);
      timeoutHandle = setTimeout(() => {
        setToken(null);
      }, decoded.exp * 1000 - Date.now());
    } else {
      localStorage.removeItem("token");
    }
    return () => {
      if (timeoutHandle !== 0) {
        clearTimeout(timeoutHandle);
      }
    };
  }, [token]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://matrixshop-backend.herokuapp.com/products`
      );
      const { token } = response.data;
      setToken(token);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserProducts = async (email, password) => {
    try {
      const response = await axios.get(
        `https://matrixshop-backend.herokuapp.com/products/myproducts`,

        {
          email,
          password,
        }
      );
      const { token } = response.data;
      setToken(token);
    } catch (err) {
      console.log(err);
    }
  };

  //   const deleteUserProducts = async (email, password) => {
  //     try {
  //       const response = await axios.post(
  //         `https://matrixshop-backend.herokuapp.com/products/delete`,

  //         {
  //           email,
  //           password,
  //         }
  //       );
  //       const { token } = response.data;
  //       setToken(token);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const addUserProducts = async (email, password) => {
  //     try {
  //       const response = await axios.post(
  //         `https://matrixshop-backend.herokuapp.com/products/add`,

  //         {
  //           email,
  //           password,
  //         }
  //       );
  //       const { token } = response.data;
  //       setToken(token);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  let user = null;
  if (token) {
    user = jwt_decode(token);
  }

  return (
    <ProductContext.Provider
      value={{
        token,
        user,
        getProducts,
        getUserProducts,
        // deleteUserProducts,
        // addUserProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
