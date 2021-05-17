import React from 'react';
import classes from './DrowerToggle.module.css';

const DrowerToggle = props => {
  const { clicked } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={classes.DrawerToggle} type="button" onClick={clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default DrowerToggle;
