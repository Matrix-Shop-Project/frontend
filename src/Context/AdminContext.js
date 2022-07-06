import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
// import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, useRecordContext } from 'react-admin';
import BookIcon from "@mui/icons-material/Book";
export const ProductIcon = BookIcon;

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const data = "Test Admin";
  const [listData, setListData] = useState([]);
  const [addData, setAddData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [delData, setDelData] = useState([]);
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

  useEffect(() => {
    (async (name, description, category, price) => {
      try {
        const list = await axios.get(`${process.env.REACT_APP_API}/products`, {
          name,
          description,
          category,
          price,
        });
        setListData(list.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const add = await axios.post(
          `${process.env.REACT_APP_API}/admin/products/add`
        );
        setAddData(add.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const edit = await axios.put(
          `${process.env.REACT_APP_API}/admin/products/edit`
        );
        setEditData(edit.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const del = await axios.delete(
          `${process.env.REACT_APP_API}/admin/products/delete`
        );
        setDelData(del.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <AdminContext.Provider
      value={{ data, listData, addData, editData, delData }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
