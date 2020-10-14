import { createStore, applyMiddleware, } from "redux";
import rootReducer from './root.reducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware: any[] = [
    thunk,
]

if (process.env.NODE_ENV === 'development') middleware.push(logger)

const store = createStore(rootReducer, applyMiddleware());

export default store;
