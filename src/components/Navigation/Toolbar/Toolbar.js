import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrowerToggle from '../SideDrawer/DrawerToggle/DrowerToggle';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrowerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesctopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;
