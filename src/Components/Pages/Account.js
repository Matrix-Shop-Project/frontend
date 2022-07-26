import React from "react";
import ProductCart from "../Products/Warenkorb";

import MyAccount from "../Users/Account";

export default function Account() {
  return (
    <>
    <div className="account">
      <h1>Deins</h1>
        {/* <MyAccount /> */}
        <ProductCart/>
    </div>

    </>
  );
}