import React, { PropTypes } from 'react';

const FunctionalButton = (props) => (
  <button onClick={props.onClick}>
    {props.label}
  </button>
);

FunctionalButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default FunctionalButton;
