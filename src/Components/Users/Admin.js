import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, useRecordContext } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
export const ProductIcon = BookIcon;

export const ProductsList = createContext();
export const ProductsAdd = createContext();
export const ProductsEdit = createContext();
export const ProductsDel = createContext();

export const ProductsListProveider = ({ children }) => {
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API}/products`);
        setDataProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <ProductsList.Provider value={{ dataProducts, setDataProducts }}>
      {children}
    </ProductsList.Provider>
    )
};
export const ProductsAddProveider = ({ children }) => {
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API}/products/add`);
        setDataProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <ProductsAdd.Provider value={{ dataProducts, setDataProducts }}>
      {children}
    </ProductsAdd.Provider>
    )
};
export const ProductsEditProveider = ({ children }) => {
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API}/products/edit`);
        setDataProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <ProductsEdit.Provider value={{ dataProducts, setDataProducts }}>
      {children}
    </ProductsEdit.Provider>
    )
};

export const ProductsDelProveider = ({ children }) => {
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API}/products/del`);
        setDataProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <ProductsDel.Provider value={{ dataProducts, setDataProducts }}>
      {children}
    </ProductsDel.Provider>
    )
};

export const useProductsListContext = () => {
  return useContext(ProductsList);
};
export const useProductsAddContext = () => {
  return useContext(ProductsAdd);
};
export const useProductsEditContext = () => {
  return useContext(ProductsEdit);
};
export const useProductsDelContext = () => {
  return useContext(ProductsDel);
};