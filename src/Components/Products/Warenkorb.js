import { Button, Typography } from "@mui/material";
import { current } from "@reduxjs/toolkit";
//import { margin } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../../redux/constants/cartConstants";
import { deleteFromCart } from "../../redux/action/cartActions";
import "../../sass/ShoppingCart.scss";


const ProductCart = () => {
  const { cart } = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const ImageBase64 = ({ data }) => (
    <>

      {data ? <img style={{ width: 75 }} alt="Bild" src={data} /> : undefined}

    </>
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  const handleQtyChange = (e, product) => {
    const cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    cart.forEach(cartItem => {
      if (cartItem._id === product._id) {
        cartItem.count = e.target.value
      }
    });

    localStorage.setItem('cart', JSON.stringify(cart));

    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    })

  }

  return (
    <>
      {cart.length <= 0 ? (
        <div><h1>Dein Korb ist leer</h1></div>
      ) : (<div className="products-container">

        <div className="row">
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Menge</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr key={product._id}>
                    <th scope="row">{' '}
                      <ImageBase64 data={product.photo} alt="Bild" />
                    </th>
                    <td >
                      {' '}
                      <Link to={`/product/${product._id}`}>
                        {product.productName}
                      </Link>
                    </td>
                    <td >{formatPrice(product.price)}</td>
                    <td >
                      <input
                        className="w-25"
                        type='number'
                        min='1'
                        max={product.productQty}
                        value={product.count}
                        onChange={e => handleQtyChange(e, product)}
                      />
                      {/* {product.count} */}
                    </td>
                    <td >
                      {' '}
                      <button type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(deleteFromCart(product))}
                      >
                        <i className="far fa-trash-alt pr-1"></i>
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
          <div className="col-md-4 border-left pl-4">
            <h2>Rechnung</h2>
            <p className="font-weight-light text-muted border-bottom">{cart.length === 1 ? '(1) Ware' : `(${cart.length}) Waren`} </p>
            <p className="font-weight-bold">
              Gesamt Summe: {formatPrice(cart.reduce(
                (currentSum, currentCartItem) =>
                  currentSum + currentCartItem.count * currentCartItem.price, 0
              ))}
            </p>
            <Button variant="contained" className="btn btn-dark btn-large btn-block mb-5 py-2"> Bezahlen </Button>
          </div>
        </div>
      </div>
      )}

    </>
  );
};

export default ProductCart;
