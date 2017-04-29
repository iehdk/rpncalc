import React from 'react';
import PropTypes from 'prop-types';

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
