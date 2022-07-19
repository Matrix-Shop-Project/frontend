import React from 'react';

const Table = ({
  queryCur,
  sortType,
  products,
  actAttr,
  activePage,
  activeProduct,
  handleDelete,
  handleEdit,
  handleSort
}) => {
  const displayProduct = (
    queryCur,
    sortType,
    products,
    actAttr,
    activePage
  ) => {
    return activeProduct(queryCur, sortType, products, actAttr).slice(
      (activePage - 1)
    );
  };

  const showOrder = attr => {
    return (
      actAttr === attr &&
      (sortType === 1 ? (
        <i className='fas fa-arrow-up sort' />
      ) : (
        sortType === 2 && <i className='fas fa-arrow-down sort' />
      ))
    );
  };
  const ImageBase64 = ({ data }) => (
    <>
      {data ? <img style={{ width: 150 }} alt="Avatar" src={data} /> : undefined}
    </>
  );

  return (
    <div>
      <table className='table table-sm'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col' id='productName' onClick={e => handleSort(e)}>
              Product Name {showOrder('productName')}
            </th>
            <th scope='col' id='category' onClick={e => handleSort(e)}>
              Products Category {showOrder('category')}
            </th>
            <th scope='col' id='descrition' onClick={e => handleSort(e)}>
              Description {showOrder('description')}
            </th>
            <th scope='col' id='price' onClick={e => handleSort(e)}>
              Price in Euro {showOrder('price')}
            </th>
            <th scope='col' id='photo' onClick={e => handleSort(e)}>
              Bild {showOrder('photo')}
            </th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>

        <tbody>
          {displayProduct(
            queryCur,
            sortType,
            products,
            actAttr,
            activePage,
            activeProduct
          ).map(products=> {
            console.log("Table:",products);
            return (
              <tr className='product' key={products._id}>
                
                <td>
                  <div className='table-data'>{products.productName}</div>
                </td>
                <td>
                  <div className='table-data'>{products.category}</div>
                </td>
                <td>
                  <div className='table-data'>{products.description}</div>
                </td>
                <td>
                  <div className='table-data'>{products.price}</div>
                </td>
                <td>
                  <div className='table-data'>
                    <ImageBase64 data={products.photo} alt='Bild' />
                    </div>
                </td>
                <td>
                  <button
                    className='btn btn-outline-primary btn-sm'
                    onClick={e => handleEdit(products._id)}
                  >
                    <i className='fas fa-pen' /> Edit
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-outline-danger btn-sm'
                    onClick={e => handleDelete(products._id)}
                  >
                    <i className='fas fa-trash' /> Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;