import React from "react";

import Footer from "../Footer/Footer";
import "../../sass/Pages.scss"
import { LoginForm } from "../Login/Login";

export default function Login() {
  return (
    <>
    <div className="login">
      <LoginForm />
    </div>
    <Footer />
    </>
  );
}