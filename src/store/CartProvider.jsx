import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedItems = [...state.items, action.item];
      console.log({'action.item': action.item})
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return { ...state, items: updatedItems, totalAmount: updatedTotalAmount };
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {

  const [cartState, dispatchCartReducer] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCartReducer({ type: 'ADD_ITEM', item });
  }

  const removeItemHandler = (id) => {
    dispatchCartReducer({ type: 'REMOVE_ITEM', id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};
export default CartProvider;
