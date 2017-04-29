import React from 'react';
import PropTypes from 'prop-types';

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
