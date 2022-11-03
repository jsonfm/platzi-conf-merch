export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART"
}


export const cartReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {

    case actionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case actionTypes.REMOVE_FROM_CART:
      // const findIndex = state.cart.findIndex(item => item.id === action.payload.id);
      // !findIndex && state.cart.splice(findIndex, 1);
      return {
        ...state,
        cart: state.cart.filter(items => items.id !== action.payload.id),
      };

    default:
      return state;
  }
}
