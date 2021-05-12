import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

export default class Layout extends Component {
  state = {};

  render() {
    const { children } = this.props;
    return (
      <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>{children}</main>
      </Aux>
    );
  }
}
