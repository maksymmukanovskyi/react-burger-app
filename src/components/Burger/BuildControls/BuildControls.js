import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

// onAddIngradiant

// eslint-disable-next-line no-unused-vars
const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(ctrl => (
        <BuildControl
          added={() => props.onAddIngradient(ctrl.type)}
          key={ctrl.label}
          label={ctrl.label}
        />
      ))}
    </div>
  );
};

export default buildControls;
