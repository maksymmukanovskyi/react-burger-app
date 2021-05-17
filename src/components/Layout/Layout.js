import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

export default class Layout extends Component {
  state = {
    showSideDarawer: true,
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDarawer: false,
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({
      showSideDarawer: !prevState.showSideDarawer,
    }));
  };

  render() {
    const { showSideDarawer } = this.state;
    const { children } = this.props;

    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          openned={showSideDarawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{children}</main>
      </Aux>
    );
  }
}
