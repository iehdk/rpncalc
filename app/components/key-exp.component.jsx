import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pure React function for the rendering of the x^y key on the keypad.
 * @param {Object} props Component properties.
 * @property {Object} _handleOnClick Event handler for clicking the key.
 */
function KeyExp(props) {
  const tip = 'Calculate the exponent ' +
              'of the last two elements ' +
              'on the stack where: ' +
              '2: x and 1: y';

  return (
    <button
      data-tip={tip}
      data-place="right"
      className="key key-width-1 exp"
      type="button"
      value="exp"
      onClick={props._handleOnClick}
    >
      <span>
        x
        <sup>
          y
        </sup>
      </span>
    </button>
  );
}

KeyExp.propTypes = {
  _handleOnClick: PropTypes.func,
};

export default KeyExp;
