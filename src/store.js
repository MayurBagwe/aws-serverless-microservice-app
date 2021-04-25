import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const { productListReducer, productDetailsReducer } = require('./reducers/productReducers')


const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

const initialState = {}

const middleware = [thunk]


const store = createStore(reducers, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
));


export default store