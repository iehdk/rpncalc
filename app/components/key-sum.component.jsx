import React from 'react';
import PropTypes from 'prop-types';

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
