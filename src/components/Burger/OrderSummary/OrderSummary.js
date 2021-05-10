import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delisious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger" type="button">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success" type="button">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
