import React from 'react';
import PropTypes from 'prop-types';

function KeyExp(props) {
  const tip = 'Calculate the exponent ' +
              'of the last two elements ' +
              'on the stack where: ' +
              '2: x and 1: y';

  return (
    <button
      data-tip={tip}
      data-place="right"
      className="key key-width-1"
      type="button"
      value="exp"
      onClick={props.handleOnClick}
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
  handleOnClick: PropTypes.func,
};

export default KeyExp;
