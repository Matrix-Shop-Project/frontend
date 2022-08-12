import axios from 'axios';


const createCommentStart = () => {
  return {
    type: 'CREATE_COMMENT_START',
    payload: {}
  };
};
const createCommentSuccess = newComment=> {
  return {
    type: 'CREATE_COMMENT_SUCCESS',
    payload: newComment
  };
};

const createCommentError = err => {
  return {
    type: 'CREATE_COMMENT_ERROR',
    payload: { error: err }
  };
};

export const createComment = payload => dispatch => {
  dispatch(createCommentStart());
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': payload.token
    }
  };
  console.log("createComment:", payload.newComment);
  console.log("Redux IDComment:", payload._id)
  axios
    .post(`${process.env.REACT_APP_API}/comment/add/${payload.id}`, payload.productData, config)
    .then(res => dispatch(createCommentSuccess(res.data)))
    .catch(err => dispatch(createCommentError(err)));
};
export const initProduct = () => dispatch => {
  dispatch({
    type: 'INIT_PRODUCT',
    payload: {
      comments: [],
      createSuccess: false,
      error: null
    }
  });
};