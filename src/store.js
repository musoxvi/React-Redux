import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
    const { type , product, products } = action;


    switch (type) {
        case 'REPLACE_PRODUCTS':
            return  {
                ...state,
                products: products
            }
        case 'ADD_TO_CART':
            return  {
                ...state,
                cart: state.cart.concat(product)
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter( pro => pro.id !== product.id )
            }
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
    createStore(reducer, { cart: [], products: [] },
    applyMiddleware(logger, thunk));