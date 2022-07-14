
const initState = {
  productName: '',
  category: '',
  description: '',
  price: '',
  photo: '',
  error: null,
  isLoading: false,
  editSuccess: false
};

const editProduct = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'EDIT_PRODUCT_START':
      return { ...state, isLoading: true };
    case 'EDIT_PRODUCT_SUCCESS':
      return {
        ...state,
        ...payload,
        isLoading: false,
        editSuccess: true,
        error: null
      };
    case 'EDIT_PRODUCT_ERROR':
      return { ...state, ...payload, isLoading: false };
    case 'INIT_EDIT':
      return { ...state, ...payload, error: null };
    default:
      return state;
  }
};

export default editProduct;