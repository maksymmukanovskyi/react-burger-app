import React from 'react';

const DrowerToggle = props => {
  const { clicked } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div type="button" onClick={clicked}>
      MENU
    </div>
  );
};

export default DrowerToggle;
