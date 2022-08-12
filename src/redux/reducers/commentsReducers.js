const initState = {
  comments: [],
  error: null,
  isLoading: false,
  createSuccess: false
};

const createComment = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CREATE_COMMENT_START':
      return { ...state, isLoading: true };
    case 'CREATE_COMMENT_SUCCESS':
      return {
        ...state,
        ...payload,
        isLoading: false,
        createSuccess: true,
        error: null 
      };
    case 'CREATE_COMMENT_ERROR':
      return { ...state, ...payload, isLoading: false };
    case 'INIT_COMMENT':
      return { ...state, ...payload, error: null };
    default:
      return state;
  }
};

export default createComment;