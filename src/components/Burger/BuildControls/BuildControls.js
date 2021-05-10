import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

// onAddIngradiant onDeleteIngradient

// eslint-disable-next-line no-unused-vars
const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Burger Price: <strong>{props.price.toFixed(2)}</strong>
      </p>

      {controls.map(ctrl => (
        <BuildControl
          added={() => props.onAddIngradient(ctrl.type)}
          removed={() => props.onDeleteIngradient(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          key={ctrl.label}
          label={ctrl.label}
        />
      ))}
      <button
        disabled={!props.purchasable}
        className={classes.OrderButton}
        type="button"
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
