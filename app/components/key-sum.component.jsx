import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pure React function for the rendering of the SUM key on the keypad.
 * @param {Object} props Component properties.
 * @property {Object} handleOnClick Event handler for clicking the key.
 */
function KeySum(props) {
  const tip = 'Sum all values on the stack';

  return (
    <button
      data-tip={tip}
      className="key key-width-1"
      type="button"
      value="sum"
      onClick={props.handleOnClick}
    >
      {'\u03a3'}
    </button>
  );
}

KeySum.propTypes = {
  handleOnClick: PropTypes.func,
};

export default KeySum;
