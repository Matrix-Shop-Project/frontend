import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { initProduct, initEdit, deleteProduct, setProductList } from '../../../redux/action/products'
import { Loading, Alert } from './utils';
import Table from './table';
import '../../../sass/AdminProducts.scss'

const Products = ({
  products,
  setProductList,
  initProduct,
  initEdit,
  deleteProduct,
  isLoading,
  error,
  deleteError
}) => {
  useEffect(() => {
    initProduct();
    initEdit();
    setProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const nav = useNavigate();
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

  const handleCreate = e => {
    nav('/admin/createproduct');
  };

  const handleSearch = e => {
    e.preventDefault();
    setActivePage(1);
    setQueryCur(query);
  };

  const handleEdit = id => {
    nav(`/admin/editproduct/${id}`);
  };

  const handleDelete = id => {
    deleteProduct(id);
  };


  const handleSort = e => {
    if (e.target.id === actAttr) {
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
    <div>
      <strong className='navbar-brand'><h1 className='display-3 danger'>Products administration</h1></strong>      <div className='flex gap-3'>
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
      <nav className='navbar navbar-light bg-light mb-2'></nav>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <Table
              queryCur={queryCur}
              sortType={sortType}
              products={products}
              actAttr={actAttr}
              activeProduct={activeProduct}
              activePage={activePage}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleSort={handleSort}
            />
            {error && <Alert waring='server' item='get' />}
            {deleteError && <Alert waring='server' item='delete' />}
          </div>
        )}
      </div>

      <button
        className='btn btn-success btn-lg ml-5'
        onClick={e => handleCreate()}
      >
        Create new Product
      </button>
    </div>
  );
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
)(Products);