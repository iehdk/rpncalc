import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pure React function for the rendering of a key on the keypad.
 * @param {Object} props Component properties.
 * @property {Object} label Key label
 * @property {Object} value Key value
 * @property {Object} width Width of the key
 * @property {Object} _handleOnClick Event handler for clicking the key.
 */
function Key(props) {
  const className = `key key-width-${props.width}`;

  return (
    <button className={className} type="button" value={props.value} onClick={props._handleOnClick}>
      {props.label}
    </button>
  );
}

Key.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.number,
  _handleOnClick: PropTypes.func,
};

export default Key;
