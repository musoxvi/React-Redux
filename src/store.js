import { createStore } from 'redux';

const reducer = (state, action) => {
    const { type , product } = action;


    switch (type) {
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
export default createStore(reducer, { cart: [] });