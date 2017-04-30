import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pure React function for the rendering of the DEL key on the keypad.
 * @param {Object} props Component properties.
 * @property {Object} _handleOnClick Event handler for clicking the key.
 */
function KeyDel(props) {
  const tip = 'Delete last character from prompt';

  return (
    <button
      data-tip={tip}
      className="key key-width-2"
      type="button"
      value="del"
      onClick={props._handleOnClick}
    >
      DEL
    </button>
  );
}

KeyDel.propTypes = {
  _handleOnClick: PropTypes.func,
};

export default KeyDel;
