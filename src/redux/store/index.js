import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

// const logger = store => next => action => {
//   console.log('previous state', store.getState());
//   console.log('dispatching', action);
//   next(action);
//   console.log('next state', store.getState());
// };
const initialState = {}
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, /* preloadedState, */ composeEnhancers(
  
      applyMiddleware(...middleware)
    ));
// const store = createStore(reducer, initialState,
//   // composeWithDevTools(applyMiddleware(...middleware)),
//     applyMiddleware(thunk));

export default store;

// import { combineReducers, applyMiddleware, createStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// const reducer = combineReducers({});

// const initialState = {};

// const middleware =[thunk]

// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

// export default store;