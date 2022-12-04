import CartIcon from '../../cart/CartIcon/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);

  console.log({ cartCtx })

  const numberOfCartItems = cartCtx.items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}{cartCtx.totalAmount}</span>
    </button>
  )
}

export default HeaderCartButton;
