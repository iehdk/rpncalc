import React from 'react';
import PropTypes from 'prop-types';

function KeyPop(props) {
  const tip = 'Remove the last element on the stack';

  return (
    <button
      data-tip={tip}
      className="key key-width-2"
      type="button"
      value="pop"
      onClick={props.handleOnClick}
    >
      POP
    </button>
  );
}

KeyPop.propTypes = {
  handleOnClick: PropTypes.func,
};

export default KeyPop;
