import React, { useState, useEffect } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
//import { editProduct, initEdit } from "../../../redux/action/products";
import { getProduct } from "../../../redux/action/products";
import { setAlert } from "../../../redux/action/alert";
import { Loading, Alert } from "./utils";
import { useParams } from "react-router-dom";
import { useUser } from "../../../Context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import jwtdecode from "jwt-decode";

// import axios from 'axios';

const GetProduct = ({
  alertContent,
  isLoading,
//   isGetting,
//   product,
//   history,
//   error,
//   getError,
//   productId,
initProduct,
  
}) => {
  const nav = useNavigate();
  const { token, user } = useUser();
  const parms = useParams();
  const id = parms.productId;

  console.log("ProductiD", id)
  const [productData, setProductData] = useState({
    _id:"",
    productName: "",
    category: "",
    description: "",
    price: "",
    photo_base64: "",
    photo_file: null,
  });

  useEffect(() => {
    console.log("ProductiD useEffect", id)
    if (id) {
      
      getProduct(setProductData);
    }
  }, [id]);
  
  const { _id, productName, category, description, price, photo } =
    productData;

    console.log("ProductdataID:", productData)
    if (id===_id) {console.log("true")}else{console.log("false")}

console.log("Product DATA:", productData);

//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload = () => {
//         resolve(fileReader.result);
//       };
//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   };

  const ImageBase64 = ({ data }) => (
    <>
      {data ? <img style={{ width: 300 }} alt="Bild" src={data} /> : undefined}
    </>
  );

  const handlePay = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

//   const handleEdit = (e) => {
//     console.log("Edit Token:", jwtdecode(token));
//     e.preventDefault();
//     if (productName === 0) {
//       setAlert("ProductName pls!");
//     } else {
//       editProduct({
//         productData: {
//           productName,
//           category,
//           description,
//           price,
//           photo,
//         },
//         token,
//         initEdit,
//         id,
//       });
//       console.log("Edit pul:");
//     }
//   };
//   const handleImageChange = async (e) => {
//     const base64 = await convertToBase64(e.target.files?.[0]);
//     setProductData({
//       ...productData,
//       photo_file: e.target.files?.[0],
//       photo_base64: base64,
//     });
//   };

  const handleBack = () => {
    nav("/");
  };

  // const disableEdit = (
  //   productName,
  //   category,
  //   description,
  //   price
  // ) => {
  //   return (
  //     !(
  //       productName &&
  //       category &&
  //       description &&
  //       price &&
  //       /^[a-zA-Z]+$/.test(productName) &&
  //       /^[a-zA-Z]+$/.test(category)) ||
  //     (product.productName === productName &&
  //       product.category === category  &&
  //       product.description === description &&
  //       product.price === price)
  //   );
  // };
  return token ? (
      <>
            <div>
              <div className="create">Product </div>
              <div className="container">
                <form onSubmit={(e) => handlePay(e)}>
                  <div className="form-group">
                    * Product Name: - {productName}
                  </div>
                  <div className="form-group">
                    * Category: - {category}
                  </div>
                  <div className="form-group">
                    * Description:{" "}{description}
                  </div>
                  <div className="form-group">
                    * Price: - {price}
                  </div>
                  <div className="form-group">
                    * Bild:{" "}
                    <ImageBase64 data={photo} alt="Bild" />
                    {/* <Upload /> */}
                  </div>
                  <div className="btn-row">
                    <div className="btn-left">
                      <button
                        className="btn btn-success"
                        // value='Submit'
                        type="submit"
                        // disabled={
                        //   disableEdit(
                        //     productName,
                        //     category,
                        //     description,
                        //     price
                        //   )
                        // }
                      >
                        <i className="fas fa-arrow-down" /> Pay
                      </button>
                    </div>
                    <div className="btn-middle" />

                    <div className="btn-right">
                      <button
                        className="btn btn-secondary"
                        onClick={handleBack}
                      >
                        <i className="fas fa-arrow-left" /> Back
                      </button>
                    </div>
                  </div>
                </form>
                <div className="alert-text">{alertContent}</div>
              </div>
            </div>
      </>
    )  : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    alertContent: state.alert.alertContent,
    editSuccess: state.editProduct.editSuccess,
    isLoading: state.editProduct.isLoading,
    isGetting: state.getProduct.isLoading,
    product: state.getProduct.product,
    error: state.editProduct.error,
    getError: state.getProduct.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAlert: (alert) => dispatch(setAlert(alert)),
    // editProduct: (data, history) => dispatch(editProduct(data, history)),
    // initEdit: () => dispatch(initEdit()),
    getProduct: (id, setProductData) =>
      dispatch(getProduct(id, setProductData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetProduct);
