const initState = {
  error: null,
  product: {},
  isLoading: false
};

const getProduct = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_PRODUCT_START':
      return { ...state, isLoading: true };
    case 'GET_PRODUCT_SUCCESS':
      return {
        ...state,
        ...payload,
        isLoading: false
      };
    case 'GET_PRODUCT_ERROR':
      return { ...state, ...payload, isLoading: false };
    default:
      return state;
  }
};

export default getProduct;