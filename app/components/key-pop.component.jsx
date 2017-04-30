import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pure React function for the rendering of the POP key on the keypad.
 * @param {Object} props Component properties.
 * @property {Object} _handleOnClick Event handler for clicking the key.
 */
function KeyPop(props) {
  const tip = 'Remove the last element on the stack';

  return (
    <button
      data-tip={tip}
      className="key key-width-2"
      type="button"
      value="pop"
      onClick={props._handleOnClick}
    >
      POP
    </button>
  );
}

KeyPop.propTypes = {
  _handleOnClick: PropTypes.func,
};

export default KeyPop;
