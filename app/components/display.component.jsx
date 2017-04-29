import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  componentDidMount() {
    const node = document.getElementById('display');
    node.scrollTop = node.scrollHeight;
  }

  componentDidUpdate() {
    const node = document.getElementById('display');
    node.scrollTop = node.scrollHeight;
  }

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
  stack: PropTypes.string,
};

export default Display;
