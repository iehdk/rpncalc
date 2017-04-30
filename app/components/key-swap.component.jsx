import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pure React function for the rendering of the SWAP key on the keypad.
 * @param {Object} props Component properties.
 * @property {Object} handleOnClick Event handler for clicking the key.
 */
function KeySwap(props) {
  const tip = 'Swap the last two values on the stack';

  return (
    <button
      data-tip={tip}
      className="key key-width-2"
      type="button"
      value="swap"
      onClick={props.handleOnClick}
    >
      SWAP
    </button>
  );
}

KeySwap.propTypes = {
  handleOnClick: PropTypes.func,
};

export default KeySwap;
