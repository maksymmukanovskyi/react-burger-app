/* eslint-disable guard-for-in */
import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burder from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
  };

  addIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceDedaction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceDedaction;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState(ingredientsLocal) {
    const total = Object.keys(ingredientsLocal)
      .map(igKey => {
        return ingredientsLocal[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    // eslint-disable-next-line react/no-unused-state
    this.setState({ purchasable: total > 0 });
  }

  render() {
    const { ingredients, totalPrice, purchasable } = this.state;
    const disabledInfo = {
      ...ingredients,
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burder ingredients={ingredients} />
        <BuildControls
          onAddIngradient={this.addIngredientHandler}
          onDeleteIngradient={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={purchasable}
          price={totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
