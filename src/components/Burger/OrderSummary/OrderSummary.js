import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  state = {};

  // this could be functional component

  render() {
    const {
      ingredients,
      price,
      purchaseCancelled,
      purchaseContinued,
    } = this.props;
    const ingredientSummary = Object.keys(ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
          {ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delisious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price: {price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={purchaseCancelled} btnType="Danger" type="button">
          CANCEL
        </Button>
        <Button clicked={purchaseContinued} btnType="Success" type="button">
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
