import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// eslint-disable-next-line no-unused-vars
const burger = props => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-buttom" />
    </div>
  );
};

export default burger;
