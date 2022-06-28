import React from "react";

import Footer from "../Footer/Footer";
import "../../sass/Pages.scss"
import { Register } from "../Login/Register";


export default function SignUp() {
  return (
    <>
    <div className="register">
      <Register />
    </div>
    <Footer />
    </>
  );
}