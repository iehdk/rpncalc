import React from 'react';
import PropTypes from 'prop-types';

function Key(props) {
  const className = `key key-width-${props.width}`;

  return (
    <button className={className} type="button" value={props.value} onClick={props.handleOnClick}>
      {props.label}
    </button>
  );
}

Key.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.number,
  handleOnClick: PropTypes.func,
};

export default Key;
