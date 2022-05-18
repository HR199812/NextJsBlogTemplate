import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { HYDRATE,createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/index";

// initial states here
const initalState = {};

// middleware
// const middleware = [thunk];
const bindMiddleware = (middleware) => {
    if(process.env.NODE_ENV != "production"){
        const {composeWithDevTools} = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}

const reducer = (state, action) => {
    if(action.type === HYDRATE){
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState
    }else{
        return rootReducer(state, action);
    }
}
// creating store
const initStore = () =>{

    return createStore(
      reducer,
      bindMiddleware([thunkMiddleware])
    );
}

// assigning store to next wrapper
// const makeStore = () => store;

export const wrapper = createWrapper(initStore);

// import {createStore} from 'redux';
// import rootReducer from './reducers/index';

// const store = createStore(rootReducer);

// export default store;