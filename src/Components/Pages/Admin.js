import React from "react";
import ProductsList from "../Products/ProductsList";
import { useAdminContext } from "../../Context/AdminContext"; 



export default function UserAdmin() {
  
const {listData } = useAdminContext();

  return (
    <>
      <div className="products" style={{marginTop: "150px"}}>
       <h1>Admin</h1>
      </div>
      {JSON.stringify(listData[0])}
      
<ProductsList />

    </>
  );
}
