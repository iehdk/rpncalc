import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pure react function for the rendering of the CLEAR key on the keypad.
 * @param {Object} props Component properties.
 * @property {Object} handleOnClick Event handler for clicking the key.
 */
function KeyClear(props) {
  const tip = 'Clear the stack';

  return (
    <button
      data-tip={tip}
      className="key key-width-2"
      type="button"
      value="clear"
      onClick={props.handleOnClick}
    >
      CLEAR
    </button>
  );
}

KeyClear.propTypes = {
  handleOnClick: PropTypes.func,
};

export default KeyClear;
