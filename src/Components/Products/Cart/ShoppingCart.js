import React, { useState, useEffect } from "react";
// import { Redirect } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
// import { editProduct, initEdit } from "../../../redux/action/products";
import { getProduct, createComment, initComment } from "../../../redux/action/products";
// import { createComment } from "../../../redux/action/commentsAction";

import { setAlert } from "../../../redux/action/alert";
// import { Loading } from "./utils";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../../../Context/UserContext";
import { useNavigate } from "react-router-dom";
//  import { useCart } from "react-use-cart";
// import { CartContext } from "../../../Context/CartContext"
// import { useProductContext } from "../../../Context/ProductContext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from "../../../redux/action/cartActions";
import LoginIcon from '@mui/icons-material/Login';

import SendIcon from '@mui/icons-material/Send';

import { Comment, Form, Header, TextArea } from 'semantic-ui-react';
import { Box, TextField } from "@mui/material";




// import axios from 'axios';

const Product = ({
  setAlert,
  editProduct,
  alertContent,
  isLoading,
  isGetting,
  initEdit,
  getProduct,
  createProduct,
  product,
  history,
  error,
  getError,
  createSuccess,
  createComment,
  initComment,
}) => {
  const nav = useNavigate();
  const token = useUser();
  const params = useParams();
  const id = params.productId;
  //  const { addItem, setItems, emptyCart } = useCart();
  //  const { products } = useProductContext();
  const dispatch = useDispatch();
  // const { items } = useSelector((state) => state.cart)

  const [productData, setProductData] = useState({
    id: "",
    productName: "",
    category: "",
    description: "",
    price: "",
    photo_base64: "",
    photo_file: null,
    comments: [],
  });
  const [productComment, setProductComment] = useState({
    id: "",
    author: "",
    text: "",
    timestamp: "",
  })

  useEffect(() => {
    if (id) {
      getProduct({ id, setProductData, token });
    }
  }, []);

  // useEffect(() => {
  //   createComment({ id, setProductComment, token })
  // }, [])

  const { productName, category, description, price, photo, comments } =
    productData;
  const { text } = productComment;

  //const { addItem } = useCart();
  const ImageBase64 = ({ data }) => (
    <>
      {data ? <img style={{ width: 300 }} alt="Bild" src={data} /> : undefined}
    </>
  );
  const formatPrice = (price) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  //  const [addToCart, setAddToCart] = useState([]);

  //  useEffect(() => {
  // setAddToCart(productData)
  // }, [addToCart, productData]);

  // console.log("Add to kart",addToCart)
  const handleAddtoCart = () => {
    // addItem(productData)
    //  dispatch({type: 'cart/addItem', payload: {productName: "", category: "", description: "", price: "", photo: ""}})
    dispatch(addToCart(productData))
  };

  const handleLogin = () => {
    nav("/login");
  };


  const handleBack = () => {
    nav("/");
  };
  const handleWarenkorp = () => {
    nav("/shoppingcard");
  };
  // const [newComment, setNewComment] = useState([""]);
  // let timestampe = Date.now();
  // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestampe));

  

  let userName = token.user.name;
  // console.log("UserName", userName)

  const handleAddCommentar = (e) => {
    // const date = new Date();
    // const timestampe = date.toLocaleDateString();
    e.preventDefault();
    createComment({productComment: { 
      author: userName, 
      text, 
      // timestamp: timestampe 
    }, token, id });
    setTimeout(()=>{
      window.location.reload(false);
  }, 100);
  // console.log("date:", timestampe)
  };
// console.log("button create", productComment)
  const handleChange = e => {
    setProductComment({ ...productComment, [e.target.name]: e.target.value });
  };

  // console.log("Comments Product: ", newComment)


  return (
    <>
      <div>
        <div className="create"> </div>
        <div className="container" style={{ width: 900 }}>
          <form>
            <div key={id}>
              <div className="form-group">
                <strong><a href="/">Category</a> /  <Link to={`/category/${category}`}>{category}</Link></strong>
              </div>
              <div><h2>{productName}</h2>
                <hr />
              </div>

              <div className="form-group" style={{ width: 700 }}>
                {description}

              </div><hr />
              <div className="form-group d-flex justify-content-around" style={{ width: 350 }}>

                <h4>Price:</h4> <h4 style={{ color: "red" }}>{formatPrice(price)}</h4>
                {token.user ?
                  (<button
                    className="btn btn-success"
                    // value='Submit'
                    type="submit"
                    onClick={handleAddtoCart}
                  >
                    <AddShoppingCartIcon /> Jetzt kaufen
                  </button>) : (<button
                    className="btn btn-success"
                    // value='Submit'
                    type="submit"
                    onClick={handleLogin}
                  >
                    <LoginIcon /> Jetzt Login
                  </button>)
                }
                {/* <button onClick={()=> dispatch(addCoupon())}>Promo Code</button> */}
              </div>
              <div className="form-group">


                <ImageBase64 data={photo} alt="Bild" />

              </div>
              <hr />
              <Comment.Group threaded>

                <Header as='h3' dividing>

                  Dieses Produkt bewerten
                </Header>
                <Header as='h5'>Bitte einloggen für kommentar zu schreiben!
                </Header>
                {comments.map((comment) => (
                  <Box>
                    <Comment>
                      <Comment.Author as='h5' key={comment}>{comment.author}</Comment.Author>
                      <Comment.Metadata>
                        <div>{comment.timestamp}</div>
                      </Comment.Metadata>
                      <Comment.Text as='p'>
                        {comment.text}
                      </Comment.Text>
                    </Comment>
                  </Box>
                ))}
                <Form reply>
                  {/* <TextArea
                  name="author"
                  value={token.user.name} 
                  /> */}
                  <TextField
                    id="outlined-multiline-static"
                    label="Sag deine Meinung zu diesem Artikel"
                    multiline
                    rows={4}
                    fullWidth
                    // defaultValue="Deine Meinung ist wichtig für uns!"
                    name='text'
                    value={text}
                    onChange={(e) => handleChange(e)}
                  />
                  {token.user ?
                    (<button
                      className="btn btn-info mt-3"
                      // value='Submit'
                      type="submit"
                      onClick={handleAddCommentar}
                    >
                      Schicken <SendIcon className="pl-2" />
                    </button>) : (<button
                      className="btn btn-success mt-3"
                      // value='Submit'
                      type="submit"
                      onClick={handleLogin}
                    >
                      <LoginIcon /> Jetzt Login
                    </button>)
                  }
                </Form>
              </Comment.Group>
              <hr />
              <div className="btn-row" style={{ padding: "0 50px 0" }}>
                <div className="btn-left">

                  {token.user ?
                    (<button
                      className="btn btn-secondary"
                      onClick={handleBack}
                    >
                      <i className="fas fa-arrow-left" /> weiter Einkaufen
                    </button>) : (<button
                      className="btn btn-secondary"
                      onClick={handleBack}
                    >
                      <i className="fas fa-arrow-left" /> Züruck
                    </button>)}

                </div>

                <div className="btn-middle" />
                {token.user &&
                  (<button
                    className="btn btn-secondary"
                    onClick={handleWarenkorp}
                  >
                    Warenkorp <i className="fas fa-arrow-right ml-1" />
                  </button>)}
              </div>
            </div>
          </form>
          <div className="alert-text">{alertContent}</div>
        </div>
      </div>


      {/* <div>
      <h1>Du bist nicht angemeldet!</h1>

    </div> */}
    </>)
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
    //commentSuccess: state.createComment.createSuccess,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAlert: (alert) => dispatch(setAlert(alert)),
    createComment: (id, ProductComment) => dispatch(createComment(id, ProductComment)),
    initComment: ()=> dispatch(initComment()),
    getProduct: (id, setProductData) =>
      dispatch(getProduct(id, setProductData)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Product);

