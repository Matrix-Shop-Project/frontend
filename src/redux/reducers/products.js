const initState = {
  products: [],
  error: null,
  deleteError: null,
  isLoading: false
};

const products = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_PRODUCT_LIST_START':
      return { ...state, isLoading: true };
    case 'SET_PRODUCT_LIST_SUCCESS':
      return { ...state, ...payload, isLoading: false };
    case 'SET_PRODUCT_LIST_ERROR':
      return { ...state, ...payload, isLoading: false };
    case 'DELETE_PRODUCT_START':
      return { ...state, isLoading: true };
    case 'DELETE_PRODUCT_ERROR':
      return { ...state, ...payload, isLoading: false };
    case 'DELETE_PRODUCT_SUCCESS':
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};

export default products;