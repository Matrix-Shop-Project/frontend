import React, { useState, useEffect } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { editProduct, initEdit } from "../../../redux/action/products";
import { getProduct } from "../../../redux/action/products";
import { setAlert } from "../../../redux/action/alert";
import { Loading, Alert } from "./utils";
import { useParams } from "react-router-dom";
import { useUser } from "../../../Context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import jwtdecode from "jwt-decode";

// import axios from 'axios';

const EditProduct = ({
  setAlert,
  editProduct,
  alertContent,
  isLoading,
  isGetting,
  initEdit,
  getProduct,
  product,
  history,
  error,
  getError,
  createSuccess,
}) => {
  const nav = useNavigate();
  const { token, user } = useUser();
  const params = useParams();
  const id = params.productId;

  const [productData, setProductData] = useState({
    productName: "",
    category: "",
    description: "",
    price: "",
    photo_base64: "",
    photo_file: null,
  });

  useEffect(() => {
    if (id) {
      console.log("Edit id:", id);
      getProduct({ id, setProductData, token });
    }
  }, [getProduct, id, token]);
  const { productName, category, description, price, photo } =
    productData;

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const ImageBase64 = ({ data }) => (
    <>
      {data ? <img style={{ width: 100 }} alt="Bild" src={data} /> : undefined}
    </>
  );

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    console.log("Edit Token:", jwtdecode(token));
    e.preventDefault();
    if (productName === 0) {
      setAlert("ProductName pls!");
    } else {
      editProduct({
        productData: {
          productName,
          category,
          description,
          price,
          photo,
        },
        token,
        initEdit,
        id,
      });
      console.log("Edit pul:");
    }
  };
  const handleImageChange = async (e) => {
    const base64 = await convertToBase64(e.target.files?.[0]);
    setProductData({
      ...productData,
      photo_file: e.target.files?.[0],
      photo_base64: base64,
    });
  };

  const handleBack = () => {
    nav("/admin");
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
    user.role === 1 ? (
      <>
        <div>
          {createSuccess ? (
            <Navigate to="/admin" />
          ) : isLoading ? (
            <Loading />
          ) : (
            <div>
              <div className="create">Edit Product </div>
              <div className="container">
                <form onSubmit={(e) => handleEdit(e)}>
                  <small className="form-text text-muted">
                    Blank with * is reuiqred
                  </small>
                  <div className="form-group">
                    * Product Name: - {productName}
                    <input
                      className="form-control"
                      name="productName"
                      value={productName}
                      onChange={(e) => handleChange(e)}
                      placeholder="productName"
                    />
                    {!productName && (
                      <Alert warning="empty" item="productName" />
                    )}
                  </div>
                  <div className="form-group">
                    * Category: - {category}
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
                    <textarea
                      className="form-control"
                      name="description"
                      value={description}
                      onChange={(e) => handleChange(e)}
                      placeholder="Description"
                      style={{ height: 200 }}
                    />
                    {!description && (
                      <Alert warning="empty" item="description" />
                    )}
                  </div>
                  <div className="form-group">
                    * Price: - {price}
                    <input
                      className="form-control"
                      name="price"
                      value={price}
                      onChange={(e) => handleChange(e)}
                      placeholder="Price"
                    />
                    {!price && <Alert warning="empty" item="price" />}
                  </div>
                  <div className="form-group">
                    * Bild:{" "}
                    <input
                      type="file"
                      label="photo"
                      name="photo"
                      accept=".jpeg, .png, .jpg"
                      onChange={(e) => handleImageChange(e)}
                    />
                    <ImageBase64 data={photo} alt="Bild" />
                    {/* <Upload /> */}
                    <small className="form-text text-muted">
                      JPEG, maximum resolution of 700px × 700px, maximum size
                      125kB
                    </small>
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
                        <i className="fas fa-arrow-down" /> Save Changes
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
    editProduct: (data, history) => dispatch(editProduct(data, history)),
    initEdit: () => dispatch(initEdit()),
    getProduct: (id, setProductData) =>
      dispatch(getProduct(id, setProductData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
