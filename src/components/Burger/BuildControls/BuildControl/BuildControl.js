import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} type="button">
      Less
    </button>
    <button className={classes.MOre} type="button">
      More
    </button>
  </div>
);

export default buildControl;
