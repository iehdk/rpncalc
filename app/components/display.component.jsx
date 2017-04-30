import React from 'react';
import PropTypes from 'prop-types';

/**
 * Container for rendering the calculater display which is where the stack, or
 * list of entered and calculated numbers, is displayed.
 * @type {[type]}
 */
class Display extends React.Component {
  /**
   * React life cycle method we use to scroll to the bottom of the display when
   * the component mounts.
   */
  componentDidMount() {
    const node = document.getElementById('display');
    node.scrollTop = node.scrollHeight;
  }

  /**
   * React life cycle method we use to scroll to the bottom of the display when
   * the component updates.
   */
  componentDidUpdate() {
    const node = document.getElementById('display');
    node.scrollTop = node.scrollHeight;
  }

  /**
   * React.component's required render method for rendering the display.
   * @return {Object} JSX code that is transpiled to Javascript.
   * @property {Integer} rows Number of rows in the display textarea.
   * @property {Integer} cols Number of columns in the display textaera.
   * @property {String} stack A text rendering of the stack for the display value.
   */
  render() {
    return (
      <div
        className="display"
      >
        <textarea
          readOnly
          id="display"
          rows={this.props.rows}
          cols={this.props.cols}
          value={this.props.stack.render()}
        />
      </div>
    );
  }
}

Display.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  stack: PropTypes.instanceOf(Object),
};

export default Display;
