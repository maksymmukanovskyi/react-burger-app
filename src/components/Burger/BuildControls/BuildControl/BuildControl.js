import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      onClick={props.removed}
      className={classes.Less}
      disabled={props.disabled}
      type="button"
    >
      Less
    </button>
    <button onClick={props.added} className={classes.More} type="button">
      More
    </button>
  </div>
);

export default buildControl;
