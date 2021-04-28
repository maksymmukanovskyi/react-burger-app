import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burder from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {};

  render() {
    return (
      <Aux>
        <Burder />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
