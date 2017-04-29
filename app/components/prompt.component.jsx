import React from 'react';
import PropTypes from 'prop-types';

class Prompt extends React.Component {
  render() {
    return (
      <div className="prompt">
        <form onSubmit={this.props.handleOnSubmit}>
          <input
            id="prompt"
            ref={this.props.inputRef}
            type="text"
            size={this.props.cols}
            onChange={this.props.handleOnChange}
            value={this.props.promptValue}
          />
        </form>
      </div>
    );
  }
}

Prompt.propTypes = {
  handleOnSubmit: PropTypes.func,
  inputRef: PropTypes.func,
  cols: PropTypes.number,
  handleOnChange: PropTypes.func,
  promptValue: PropTypes.string,
};

export default Prompt;
