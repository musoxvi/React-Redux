import {
    createStore,
    applyMiddleware,
    combineReducers
 } from 'redux';
import thunk from 'redux-thunk';

const products = (state=[], action) => {
    const { type, products } = action;


    switch (type) {
        case 'REPLACE_PRODUCTS':
            return  products

        default:
            return state
    }
}

const cart = (state=[], action) => {
    const { type , product } = action;


    switch (type) {

        case 'ADD_TO_CART':
            return state.concat(product)

        case 'REMOVE_FROM_CART':
            return state.filter( pro => pro.id !== product.id )

        default:
            return state
    }
}

const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}

export default 
    createStore(combineReducers({ cart:cart, products:products}),
    applyMiddleware(logger, thunk));