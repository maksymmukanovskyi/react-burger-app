/* eslint-disable guard-for-in */
import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burder from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get(
        'https://react-burger-app-98b69-default-rtdb.firebaseio.com/ingredients.json',
      )
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

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

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // alert('You continue');
    this.setState({ loading: true });
    const { ingredients, totalPrice } = this.state;
    const order = {
      ingredients,
      price: totalPrice,
      customer: {
        name: 'Max Muller',
        adress: {
          street: 'Broadway 10',
          zipCode: '12345',
          countre: 'Canada',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };

    axios
      .post('/orders.json', order)
      .then(() => this.setState({ loading: false, purchasing: false }))
      .catch(() => this.setState({ loading: false, purchasing: false }));
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
    const {
      ingredients,
      totalPrice,
      purchasable,
      purchasing,
      loading,
      error,
    } = this.state;
    const disabledInfo = {
      ...ingredients,
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = error ? <p>Ingredients can&apos;t be loaded!</p> : <Spinner />;

    if (ingredients) {
      burger = (
        <Aux>
          <Burder ingredients={ingredients} />
          <BuildControls
            onAddIngradient={this.addIngredientHandler}
            onDeleteIngradient={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={purchasable}
            price={totalPrice}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          price={totalPrice}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          ingredients={ingredients}
        />
      );

      if (loading) {
        orderSummary = <Spinner />;
      }
    }

    return (
      <Aux>
        <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
