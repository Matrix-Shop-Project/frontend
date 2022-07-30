import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { initProduct, initEdit, deleteProduct, setProductList } from '../../redux/action/products'
import { Loading, Alert } from './utils';
import Cart from './cart';
import '../../sass/AdminProducts.scss'

const CartComponent = ({
  products,
  setProductList,
  initProduct,
  isLoading,
  error
}) => {
  useEffect(() => {
    initProduct();
    setProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [query, setQuery] = useState('');
  const [actAttr, setActAttr] = useState('');
  const [sortType, setSortType] = useState(0);
  const [queryCur, setQueryCur] = useState('');
  const [activePage, setActivePage] = useState(1);


  const handleChange = e => {
    if (e.target.id === 'search') {
      setQuery(e.target.value);
    }
  };

  const handleSearch = e => {
    e.preventDefault();
    setActivePage(1);
    setQueryCur(query);
  };


  const handleSort = e => {

    if (e.target.category === actAttr) {

      setSortType((sortType + 1) % 3);
    } else {
      setSortType(1);
    }


    setActAttr(e.target.id);

  };


  const searchProduct = (products, queryCur) => {
    return products.filter(
      products =>
        products.productName
          .toLowerCase()
          .indexOf(queryCur.toString().toLowerCase()) !== -1 ||
        products.category
          .toLowerCase()
          .indexOf(queryCur.toString().toLowerCase()) !== -1 ||
        products.description.toLowerCase().indexOf(queryCur.toString().toLowerCase()) !==
        -1 ||
        products.price.toString().indexOf(queryCur.toString()) !== -1
    );
  };

  const selectSort = (sortType, products, actAttr) => {
    switch (sortType) {
      default:
        return products;
    }
  };

  const activeProduct = (queryCur, sortType, products, actAttr) => {
    if (queryCur) {
      const searchedProducts = searchProduct(products, queryCur);
      return selectSort(sortType, searchedProducts, actAttr);
    } else {
      return selectSort(sortType, products, actAttr);
    }
  };

  if (
    activeProduct(queryCur, sortType, products, actAttr).length > 0 &&
    activeProduct(queryCur, sortType, products, actAttr).length ===
    (activePage - 1)
  ) {
    setActivePage(activePage - 1);
  }

  return (
        <>
    <div style={{margin: 20}}>
         
      <div className='flex gap-3'>
        <form className='form-inline p-5' onSubmit={e => handleSearch(e)}>
          {' '}
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
            id='search'
            value={query}
            onChange={e => handleChange(e)}
          />
          {/* <input type='submit' value='Search' /> */}
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> </form>
      </div>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className='container-fluid'>
            <Cart
              queryCur={queryCur}
              sortType={sortType}
              products={products}
              actAttr={actAttr}
              activeProduct={activeProduct}
              activePage={activePage}
              handleSort={handleSort}
            />
            {error && <Alert waring='server' item='get' />}
          </div>
        )}
      </div>
    </div>
    </>
    )
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    isLoading: state.products.isLoading,
    error: state.products.error,
    deleteError: state.products.deleteError
  };
};

const mapStateToDispatch = dispatch => {
  return {
    setProductList: () => dispatch(setProductList()),
    initProduct: () => dispatch(initProduct()),
    initEdit: () => dispatch(initEdit()),
    deleteProduct: id => dispatch(deleteProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(CartComponent);