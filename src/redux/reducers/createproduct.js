const initState = {
  productName: '',
  category: '',
  description: '',
  price: '',
  photo: '',
  comments: [],
  error: null,
  isLoading: false,
  createSuccess: false
};

const createProduct = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CREATE_PRODUCT_START':
      return { ...state, isLoading: true };
    case 'CREATE_PRODUCT_SUCCESS':
      return {
        ...state,
        ...payload,
        isLoading: false,
        createSuccess: true,
        error: null 
      };
    case 'CREATE_PRODUCT_ERROR':
      return { ...state, ...payload, isLoading: false };
    case 'INIT_PRODUCT':
      return { ...state, ...payload, error: null };
    default:
      return state;
  }
};

export default createProduct;