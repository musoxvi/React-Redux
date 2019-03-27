import { createStore } from 'redux';

const reducer = (state, action) => {
    const { type , product } = action;
    if (type === 'ADD_TO_CART') {
        return {
            ...state,
            cart: state.cart.concat(product)
        }

    } else if (type === 'REMOVE_FROM_CART' ) {
        return {
            ...state,
            cart: state.cart.filter( pro => pro.id !== product.id )
        }

    }
    return state;
}
export default createStore(reducer, { cart: [] });