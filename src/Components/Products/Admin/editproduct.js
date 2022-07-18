import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { editProduct, initEdit } from '../../../redux/action/products';
import { getProduct } from '../../../redux/action/products';
import { setAlert } from '../../../redux/action/alert';
import { Loading, Alert } from './utils';
import { useParams } from 'react-router-dom';
import { useUser } from '../../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import jwtdecode from 'jwt-decode'

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
  getError
}) => {
  const nav = useNavigate();
  const {token} = useUser();
  const params = useParams();
  const id = params.productId;

  const [productData, setProductData] = useState({
    productName: '',
    category: '',
    description: '',
    price: ''
  });


  useEffect(() => {
    
    if(id){
      console.log("Edit id:", id)
    getProduct({id, setProductData, token});
    
  }}, [getProduct, id, token]);
  const { productName, category, description, price, photo } = productData;

  const handleChange = e => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleEdit = e => {
    console.log("Edit Token:", jwtdecode(token))
    e.preventDefault();
    if (productName === 0) {
      setAlert('ProductName pls!');
    } else {
      editProduct({productData: {productName, category, description, price, photo}, token, initEdit, id}
      ); 
      console.log("Edit pul:", )
    }
  };

  const handleBack = () => {
    nav('/admin');
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
  return (
    <div>
      {
      isLoading || isGetting ? (
        <Loading />
      ) : (
        <div>
          <div className='create'>Edit Product </div>
          <div className='container'>
            <form onSubmit={e => handleEdit(e)}>
              <small className='form-text text-muted'>
                Blank with * is reuiqred
              </small>
              <div className='form-group'>
                * Product Name:{' '} - {productName}
                <input
                  className='form-control'
                  name='productName'
                  value={productName}
                  onChange={e => handleChange(e)}
                  placeholder='productName'
                />
                {!productName && <Alert warning='empty' item='productName' />}
              </div>
              <div className='form-group'>
                * Category:{' '} - {category}
                <input
                  className='form-control'
                  name='category'
                  value={category}
                  onChange={e => handleChange(e)}
                  placeholder='Category'
                />
                {!category && <Alert warning='empty' item='category' />}
                
              </div>
              <div className='form-group'>
                * Description:{' '}
                <input
                  className='form-control'
                  name='description'
                  value={description}
                  onChange={e => handleChange(e)}
                  placeholder='description'
                />
                {!description && <Alert warning='empty' item='description' />}
              </div>
              <div className='form-group'>
                * Price:{' '} - {price}
                <input
                  className='form-control'
                  name='price'
                  value={price}
                  onChange={e => handleChange(e)}
                  placeholder='Price'
                />
                {!price && <Alert warning='empty' item='price' />}
              </div>
              <div className='btn-row'>
                <div className='btn-left'>
                  <button
                    className='btn btn-success'
                    // value='Submit'
                    type='submit'
                    // disabled={
                    //   disableEdit(
                    //     productName,
                    //     category,
                    //     description,
                    //     price
                    //   )
                    // }
                  >
                    <i className='fas fa-arrow-down' /> Save Changes
                  </button>
                </div>
                <div className='btn-middle' />

                <div className='btn-right'>
                  <button className='btn btn-secondary' onClick={handleBack}>
                    <i className='fas fa-arrow-left' /> Back
                  </button>
                </div>
              </div>
            </form>
            <div className='alert-text'>{alertContent}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    alertContent: state.alert.alertContent,
    editSuccess: state.editProduct.editSuccess,
    isLoading: state.editProduct.isLoading,
    isGetting: state.getProduct.isLoading,
    product: state.getProduct.product,
    error: state.editProduct.error,
    getError: state.getProduct.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAlert: alert => dispatch(setAlert(alert)),
    editProduct: (data, history) => dispatch(editProduct(data, history)),
    initEdit: () => dispatch(initEdit()),
    getProduct: (id, setProductData) => dispatch(getProduct(id, setProductData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProduct);