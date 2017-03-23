import React, { PropTypes } from 'react';

const styles = {
  borderRadius: 12,
  borderStyle: 'solid',
  borderColor: 'blue',
  backgroundColor: 'blue',
  padding: 16
};

const VeryStylishButton = (props) => (
  <button style={styles} onClick={props.onClick}>
    {props.label}
  </button>
);

VeryStylishButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};


export default VeryStylishButton;
