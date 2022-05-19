import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { HYDRATE,createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/index";


// middleware
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


export const wrapper = createWrapper(initStore);
