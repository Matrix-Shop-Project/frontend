import React from "react";
import "./sass/styles.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// PAGES
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Impressum from "./Components/Pages/Impressum";
import Login from "./Components/Pages/Login";
import Category from "./Components/Pages/Category";
import Damen from "./Components/Pages/Category/Damen"
import Herren from "./Components/Pages/Category/Herren"
import Kinder from "./Components/Pages/Category/Kinder"
import Haushalt from "./Components/Pages/Category/Haushalt"

import ShoppingCart from "./Components/Pages/ShoppingCart";
import Contact from "./Components/Pages/Contact";
import Header from "./Components/NavBar/Header";
import SignUp from "./Components/Pages/SignUp";
import ChatApp from "./Components/Chat/ChatApp";
import Account from "./Components/Pages/Account";
import Footer from "./Components/Footer/Footer";
import UserAdmin from "./Components/Pages/Admin";
import About from "./Components/Pages/About"
import Bitcoin from "./Components/Bitcoin/Bitcoin";
import AdminProducts from "./Components/Products/Admin/AdminProducts";
import EditProduct from "./Components/Products/Admin/editproduct";
import CreateProduct from "./Components/Products/Admin/createproduct"
import Cookies from "./Components/Cookie/Cookie"
import Shipping from "./Components/Products/Shipping";
import Payment from "./Components/Products/Payment";



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
          <Route path="/category/*" element={<Category />} />
          <Route path="/category/damen" element={<Damen />} />
          <Route path="/category/herren" element={<Herren />} />
          <Route path="/category/kinder" element={<Kinder />} />
          <Route path="/category/haushalt" element={<Haushalt />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
          <Route path="/product/:productId" element={<Products />} />
          <Route path="/shoppingcard" element={<ShoppingCart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<About />} />


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