import React from 'react';
import PropTypes from 'prop-types';

function KeyDel(props) {
  const tip = 'Delete last character from prompt';

  return (
    <button
      data-tip={tip}
      className="key key-width-2"
      type="button"
      value="del"
      onClick={props.handleOnClick}
    >
      DEL
    </button>
  );
}

KeyDel.propTypes = {
  handleOnClick: PropTypes.func,
};

export default KeyDel;
