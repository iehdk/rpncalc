import React from 'react';
import PropTypes from 'prop-types';

function KeyUndo(props) {
  const tip = 'Undo the last stack action';

  return (
    <button
      data-tip={tip}
      className="key key-width-2"
      type="button"
      value="undo"
      onClick={props.handleOnClick}
    >
      UNDO
    </button>
  );
}

KeyUndo.propTypes = {
  handleOnClick: PropTypes.func,
};

export default KeyUndo;
