import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for the rending of the calculator prompt where you enter numbers
 * and operators.
 */
class Prompt extends React.Component {
  /**
   * React.component's required render method for rendering the prompt.
   * @return {Object} JSX code that is transpiled to Javascript.
   * @property {Object} inputRef Callback for something clever.
   * @property {Integer} cols Number of columns in the prompt input field.
   * @property {Object} handleOnChange Event handler changes in the prompt.
   * @property {String} promptValue Value in the prompt.
   */
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
