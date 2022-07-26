import { combineReducers } from 'redux';
import products from './products';
import createProduct from './createproduct';
import editProduct from './editproduct';
import alert from './alert';
import getProduct from './getproduct';
import cartReducer from './cartReducers';

const reducer = combineReducers({
  products,
  createProduct,
  editProduct,
  getProduct,
  alert,
  cart: cartReducer,
});

export default reducer;