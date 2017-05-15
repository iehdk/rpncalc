import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import Key from '../components/key.component';
import KeyExp from '../components/key-exp.component';

/**
 * Component for the rending of the calculator keypad.
 * @type {React.Component}
 * @extends {React.Component}
 */
class Keypad extends React.Component {
  /**
   * Method for rendering a Key component.
   * @param  {String} value Key value
   * @param  {Number} width Key width
   * @property {Object} label Key label
   * @property {Object} value Key value
   * @property {Object} width Width of the key
   * @property {Object} toolTip Description of key action - optional
   * @property {Object} _handleOnClick Event handler for clicking the key.
   */
  _renderKey(value, width, toolTip) {
    return (
      <Key
        toolTip={toolTip}
        value={value}
        label={this.props.keys[value]}
        width={width}
        _handleOnClick={this.props._handleOnClick}
      />
    );
  }

  /**
   * React.component's required render method for rendering the keypad.
   * @return {Object} JSX code that is transpiled to Javascript.
   */
  render() {
    return (
      <div className="keypad">
        <ReactTooltip delayShow={1500} />
        <div className="keypad-row">
          {this._renderKey('root', 1)}
          <KeyExp _handleOnClick={this.props._handleOnClick} />
          {this._renderKey('reciprocal', 1)}
          {this._renderKey('divide', 1)}
          {this._renderKey('del', 2, 'Delete last character from prompt')}
        </div>
        <div className="keypad-row">
          {this._renderKey('key7', 1)}
          {this._renderKey('key8', 1)}
          {this._renderKey('key9', 1)}
          {this._renderKey('multiply', 1)}
          {this._renderKey('clear', 2, 'Clear the stack')}
        </div>
        <div className="keypad-row">
          {this._renderKey('key4', 1)}
          {this._renderKey('key5', 1)}
          {this._renderKey('key6', 1)}
          {this._renderKey('subtract', 1)}
          {this._renderKey('undo', 2, 'Undo the last stack action')}
        </div>
        <div className="keypad-row">
          {this._renderKey('key1', 1)}
          {this._renderKey('key2', 1)}
          {this._renderKey('key3', 1)}
          {this._renderKey('add', 1)}
          {this._renderKey('pop', 2, 'Remove the last element on the stack')}
        </div>
        <div className="keypad-row">
          {this._renderKey('key0', 2)}
          {this._renderKey('dot', 1)}
          {this._renderKey('sum', 1, 'Sum all values on the stack')}
          {this._renderKey('swap', 2, 'Swap the last two values on the stack')}
        </div>
        <div className="keypad-row">
          {this._renderKey('enter', 6)}
        </div>
      </div>
    );
  }
}

Keypad.propTypes = {
  keys: PropTypes.instanceOf(Object),
  _handleOnClick: PropTypes.func,
};

export default Keypad;
