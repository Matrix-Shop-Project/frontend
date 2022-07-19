import React from "react";
import "./sass/styles.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// PAGES
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Impressum from "./Components/Pages/Impressum";
import Login from "./Components/Pages/Login";
import Category from "./Components/Pages/Category";
import ShoppingCart from "./Components/Pages/ShoppingCart";
import Contact from "./Components/Pages/Contact";
import Header from "./Components/NavBar/Header";
import SignUp from "./Components/Pages/SignUp";
import ChatApp from "./Components/Chat/ChatApp";
import Account from "./Components/Pages/Account";
import Footer from "./Components/Footer/Footer";
import UserAdmin from "./Components/Pages/Admin";
import Bitcoin from "./Components/Bitcoin/Bitcoin";
import AdminProducts from "./Components/Products/Admin/AdminProducts";
import EditProduct from "./Components/Products/Admin/editproduct";
import CreateProduct from "./Components/Products/Admin/createproduct"
import Cookies from "./Components/Cookie/Cookie"



export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
         <ChatApp /> 
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products/*"></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/category" element={<Category />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shoppingcard" element={<ShoppingCart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/chat" element={<ChatApp />} /> 
          <Route path="/account" element={<Account />} />
          <Route path="/admin/*" element={<UserAdmin />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/editproduct/:productId" element={<EditProduct />} />
          <Route path="/admin/createproduct" element={<CreateProduct />} />
          {/* <Route path="/admin/editproduct/:id" element={<AdminProducts />} /> */}
        </Routes>
        <Cookies />
        <Footer />
      </Router>
    </div>
  );
}