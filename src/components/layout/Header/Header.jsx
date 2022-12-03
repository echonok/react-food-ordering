import React from 'react';
import mealsImage from '../../../assets/images/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onCartShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table fool of delicious food"/>
      </div>
    </React.Fragment>
  )
}

export default Header;
