import { ADD_TO_CART, DELETE_FROM_CART } from "../constants/cartConstants";

export const addToCart = product => async dispatch => {
  // prüfen Cart
  const cart = localStorage.getItem('cart')
   ? JSON.parse(localStorage.getItem('cart'))
    : [];
  // prüfen duplicate
  const duplicates = cart.filter(cartItem => cartItem._id === product._id);
  // wenn nein, proceed
 if (duplicates.length === 0) {
  const productToAdd = {
    ...product,
    count: 1
  }

  cart.push(productToAdd)
  localStorage.setItem('cart', JSON.stringify(cart))
  dispatch({
    type: ADD_TO_CART,
    payload: cart,
  })
 }
};


export const deleteFromCart = product => async dispatch => {
 const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart'))
 : [];

 const updateCart = cart.filter(cartItem => cartItem._id !== product._id)

 localStorage.setItem('cart', JSON.stringify(updateCart))

 dispatch({
  type: DELETE_FROM_CART,
  payload: updateCart,
 })
};