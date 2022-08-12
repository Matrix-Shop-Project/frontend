import axios from 'axios';


const setProductListStart = () => {
  return {
    type: 'SET_PRODUCT_LIST_START',
    payload: { error: null, deleteError: null } 
  };
};

const setProductListSuccess = data => {

  return {
    type: 'SET_PRODUCT_LIST_SUCCESS',
    payload: { products: data }
  };
};

const setProductListError = err => {
  return {
    type: 'SET_PRODUCT_LIST_ERROR',
    payload: { error: err }
  };
};
export const setProductList = () => dispatch => {
  
  dispatch(setProductListStart());
  axios
    .get(`${process.env.REACT_APP_API}/products`)
    .then(res => dispatch(setProductListSuccess(res.data)))
    .catch(err => dispatch(setProductListError(err)));
};

const createProductStart = () => {
  return {
    type: 'CREATE_PRODUCT_START',
    payload: {}
  };
};

const createProductSuccess = productData => {
  return {
    type: 'CREATE_PRODUCT_SUCCESS',
    payload: productData
  };
};

const createProductError = err => {
  return {
    type: 'CREATE_PRODUCT_ERROR',
    payload: { error: err }
  };
};

export const createProduct = payload => dispatch => {
  dispatch(createProductStart());
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': payload.token
    }
  };
  console.log("createProduct:", payload.token);
  axios
    .post(`${process.env.REACT_APP_API}/products/admin/add`, payload.productData, config)
    .then(res => dispatch(createProductSuccess(res.data)))
    .catch(err => dispatch(createProductError(err)));
};

export const initProduct = () => dispatch => {
  dispatch({
    type: 'INIT_PRODUCT',
    payload: {
      productName: '',
      category: '',
      description: '',
      price: '',
      photo: '',
      comments: [],
      createSuccess: false,
      error: null
    }
  });
};

const editProductStart = () => {
  return {
    type: 'EDIT_PRODUCT_START',
    payload: {}
  };
};

const editProductSuccess = productData => {
  return {
    type: 'EDIT_PRODUCT_SUCCESS',
    payload: productData
  };
};

const editProductError = err => {
  return {
    type: 'EDIT_PRODUCT_ERROR',
    payload: { error: err }
  };
};

export const editProduct = payload => dispatch => {
  console.log("EditProduct function")
  dispatch(editProductStart());
 
  const config = {
    headers: {
      'Content-Type': 'application/json',
       'Authorization': payload.token
    }
  };
  console.log("EditProduct Token:", payload.token);
  axios
    .put(`${process.env.REACT_APP_API}/products/admin/edit/${payload.id}`, payload.productData, config)
    .then(res => {
      dispatch(editProductSuccess(res.data));
      console.log("Product edit",res.data);
      
      payload.initEdit();
    })
    .catch(err => dispatch(editProductError(err)));
};

export const initEdit = () => dispatch => {
  dispatch({
    type: 'INIT_EDIT',
    payload: {
      productName: '',
      category: '',
      description: '',
      price: '',
      photo: '',
      editSuccess: false,
      error: null
    }
  });
};

const deleteProductStart = () => {
  return {
    type: 'DELETE_PRODUCT_START',
    payload: {}
  };
};

const deleteProductSuccess = () => {
  return {
    type: 'DELETE_PRODUCT_SUCCESS'
  };
};

const deleteProductError = err => {
  return {
    type: 'DELETE_PRODUCT_ERROR',
    payload: { deleteError: err }
  };
};

export const deleteProduct = id => dispatch => {
  dispatch(deleteProductStart());
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //      'Authorization': payload.token
  //   }
  // };
  console.log("ID bei Delete: ", id)
  axios
    .delete(`${process.env.REACT_APP_API}/products/admin/del/${id}`)
    .then(() => {
      dispatch(deleteProductSuccess());
      dispatch(setProductList());
      
    })
    .catch(err => dispatch(deleteProductError(err)));
};

const getProductStart = () => {
  return {
    type: 'GET_PRODUCT_START',
    payload: {}
  };
};

const getProductSuccess = productData => {
   console.log(productData);
  return {
    type: 'GET_PRODUCT_SUCCESS',
    payload: { product: productData }
  };
};

const getProductError = err => {
  return {
    type: 'GET_PRODUCT_ERROR',
    payload: { error: err }
  };
};

export const getProduct = payload => dispatch => {
  dispatch(getProductStart());
  console.log("Redux ID:", payload.id)
  const config = {
    headers: {
      'Content-Type': 'application/json',
       'Authorization': payload.token
    }
  }
  console.log("GetTokenProduct:", payload.token);
  console.log("Redux ID2:", payload.id)

  axios.get(`${process.env.REACT_APP_API}/products/product/${payload.id}`, payload.productData, config)
    .then(res => {
      const { _id, productName, category, description, price, photo, comments } = res.data;
      const productData = { _id, productName, category, description, price, photo, comments };
      
      dispatch(getProductSuccess(productData));
      payload.setProductData(productData);
    })
    .catch(err => dispatch(getProductError(err)));
};