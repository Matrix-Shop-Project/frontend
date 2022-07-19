import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createProduct, initProduct } from "../../../redux/action/products";
import { setAlert } from "../../../redux/action/alert";
import { Loading, Alert } from "./utils";
import { useUser } from "../../../Context/UserContext";
import jwtdecode from "jwt-decode";
// import Upload from './upload';

const CreateProduct = ({
  createProduct,
  alertContent,
  createSuccess,
  isLoading,
  error,
}) => {
  const nav = useNavigate();
  const { token, user } = useUser();
  // console.log("Das Ist Token:", token);

  const convertToBase64 = (photo) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(photo);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const ImageBase64 = ({ photo }) => (
    <>
      {photo ? (
        <img style={{ width: 400 }} alt="Avatar" src={photo} />
      ) : undefined}
    </>
  );

  const [productData, setProductData] = useState({
    productName: "",
    category: "",
    description: "",
    price: "",
    photo: "",
  });

  const { productName, category, description, price, photo } = productData;

  const handleCreate = (e) => {
    console.log("Code Token:", jwtdecode(token));
    e.preventDefault();
    const photo = e.target.photo[0];
    const base64 = convertToBase64(photo);
    // setNewPhoto(base64);
    createProduct({
      productData: { productName, category, description, price, photo },
      token,
      base64,
    });
    console.log("Handlecreate:", token);
    console.log(base64);
  };
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
    console.log("Handlecreate:", productData.name);

  };

  const handleBack = () => {
    nav("/admin");
  };

  const disableCreate = (productName, category, description) => {
    return !(
      productName &&
      category &&
      description &&
      price &&
      photo &&
      /^[a-zA-Z]+$/.test(productName) &&
      /^[a-zA-Z]+$/.test(category) &&
      /^[a-zA-Z]+$/.test(description)
    );
  };

  return token ? (
    user.role === 1 ? (
      <>
        <div>
          {createSuccess ? (
            <Navigate to="/" />
          ) : isLoading ? (
            <Loading />
          ) : (
            <div>
              <div className="container">
                <h1>Create Product</h1>
                <form onSubmit={(e) => handleCreate(e)}>
                  <small className="form-text text-muted">
                    Blank with * is reuiqred
                  </small>
                  <div className="form-group">
                    * Product Name:{" "}
                    <input
                      className="form-control"
                      name="productName"
                      value={productName}
                      onChange={(e) => handleChange(e)}
                      placeholder="Product Name"
                    />
                    {!productName && (
                      <Alert warning="empty" item="productName" />
                    )}
                  </div>
                  <div className="form-group">
                    * Category:{" "}
                    <input
                      className="form-control"
                      name="category"
                      value={category}
                      onChange={(e) => handleChange(e)}
                      placeholder="Category"
                    />
                    {!category && <Alert warning="empty" item="category" />}
                  </div>
                  <div className="form-group">
                    * Description:{" "}
                    <input
                      className="form-control"
                      name="description"
                      value={description}
                      onChange={(e) => handleChange(e)}
                      placeholder="Description"
                    />
                    <small className="form-text text-muted"></small>
                    {!description && (
                      <Alert warning="empty" item="description" />
                    )}
                  </div>
                  <div className="form-group">
                    * Price:{" "}
                    <input
                      className="form-control"
                      name="price"
                      value={price}
                      onChange={(e) => handleChange(e)}
                      placeholder="price"
                    />
                    {!price && <Alert warning="empty" item="price" />}
                    {/* {price &&
                  (isNaN(price) ||
                    Math.abs(parseInt(price)).toString() !== price.toString()) && (
                    <Alert warning='invalid' item='price' />
                  )} */}
                  </div>
                  <div className="form-group">
                    * Bild:{" "}
                    <input
                      type="file"
                      label="Image"
                      name="myFile"
                      accept=".jpeg, .png, .jpg"
                      onChange={(e) => handleChange(e)}
                    />
                    <ImageBase64 data={photo} />
                    {/* <Upload /> */}
                    {/* <small className='form-text text-muted'> */}
                    {/* JPEG, minimum resolution of 700px × 700px, maximum size 25MB */}
                    {/* </small> */}
                  </div>
                  {/* {error && <Alert warning='server' item='create' />} */}
                  <div className="btn-row">
                    <div className="btn-left">
                      <button
                        className="btn btn-success"
                        //value="Submit"
                        type="submit"
                        // disabled={
                        //   disableCreate(
                        //     productName,
                        //     category,
                        //     description,
                        //     price
                        //   )
                        // }
                      >
                        Add Product
                      </button>
                    </div>

                    <div className="btn-middle" />

                    <div className="btn-right">
                      <button
                        className="btn btn-secondary"
                        onClick={handleBack}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </form>
                <div className="alert-text">{alertContent}</div>
              </div>
            </div>
          )}
        </div>
      </>
    ) : (
      <div>
        <h1>Only Admin's</h1>
      </div>
    )
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    alertContent: state.alert.alertContent,
    createSuccess: state.createProduct.createSuccess,
    isLoading: state.createProduct.isLoading,
    error: state.createProduct.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAlert: (alert) => dispatch(setAlert(alert)),

    createProduct: (data) => dispatch(createProduct(data)),
    initProduct: () => dispatch(initProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);

