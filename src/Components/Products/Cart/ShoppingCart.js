import React, { useState, useEffect } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
// import { editProduct, initEdit } from "../../../redux/action/products";
import { getProduct } from "../../../redux/action/products";
import { setAlert } from "../../../redux/action/alert";
// import { Loading } from "./utils";
import { useParams } from "react-router-dom";
import { useUser } from "../../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import jwtdecode from "jwt-decode";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// import axios from 'axios';

const Product = ({
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
  const { token } = useUser();
  const params = useParams();
  const id = params.productId;
  const { addItem } = useCart();

  const [productData, setProductData] = useState({
    _id: "",
    productName: "",
    category: "",
    description: "",
    price: "",
    photo_base64: "",
    photo_file: null,
  });

  useEffect(() => {
    if (id) {
      console.log("Get id:", id);
      getProduct({ id, setProductData, token });
    }
  }, [getProduct, token, id]);
  const { productName, category, description, price, photo } =
    productData;

  const ImageBase64 = ({ data }) => (
    <>
      {data ? <img style={{ width: 300 }} alt="Bild" src={data} /> : undefined}
    </>
  );

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


  const handleBack = () => {
    nav("/");
  };
  return token ? (
    
            <div>
              <div className="create"> </div>
              <div className="container" style={{width:900}}>
                <form onSubmit={(e) => handleEdit(e)}>

                  <div><h2>{productName}</h2>
                    <hr />
                  </div>
                  <div className="form-group">
                    <h3>{category}</h3> 
                    
                  </div>
                  <div className="form-group" style={{width:700}}>
                    {description}
                    
                  </div>
                  <div className="form-group d-flex justify-content-around" style={{width: 350}}>
                    
                    <h4>Price:</h4> <h4 style={{color:"red"}}>{price} €</h4>
                  <button
                        className="btn btn-success"
                        // value='Submit'
                        type="submit"
                        onClick={() => addItem({ ...productData, id})}
                      >
                        <AddShoppingCartIcon /> Jetzt kaufen
                      </button>
                    </div>
                  <div className="form-group">
                   

                    <ImageBase64 data={photo} alt="Bild" />

                  </div>
                  <hr />
                  <div className="btn-row" style={{padding: "0 50px 0"}}>
                    <div className="btn-left">
                      <button
                        className="btn btn-secondary"
                        onClick={handleBack}
                      >
                        <i className="fas fa-arrow-left" /> Back
                      </button>
                    </div>
                    <div className="btn-middle" />

                    
                  </div>
                </form>
                <div className="alert-text">{alertContent}</div>
              </div>
            </div>
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
    getProduct: (id, setProductData) =>
      dispatch(getProduct(id, setProductData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
