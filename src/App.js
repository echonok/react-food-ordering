import React, { useState } from 'react';
import Header from './components/layout/Header/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart/Cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onCartShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
