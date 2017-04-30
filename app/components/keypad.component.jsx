import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import Key from '../components/key.component';
import KeyExp from '../components/key-exp.component';
import KeyDel from '../components/key-del.component';
import KeySum from '../components/key-sum.component';
import KeyUndo from '../components/key-undo.component';
import KeySwap from '../components/key-swap.component';
import KeyClear from '../components/key-clear.component';
import KeyPop from '../components/key-pop.component';

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
   * @property {Object} handleOnClick Event handler for clicking the key.
   */
  _renderKey(value, width) {
    return (
      <Key
        value={value}
        label={this.props.keys[value]}
        width={width}
        handleOnClick={this.props.handleOnClick}
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
          <KeyExp handleOnClick={this.props.handleOnClick} />
          {this._renderKey('reciprocal', 1)}
          {this._renderKey('divide', 1)}
          <KeyDel handleOnClick={this.props.handleOnClick} />
        </div>
        <div className="keypad-row">
          {this._renderKey('key7', 1)}
          {this._renderKey('key8', 1)}
          {this._renderKey('key9', 1)}
          {this._renderKey('multiply', 1)}
          <KeyClear handleOnClick={this.props.handleOnClick} />
        </div>
        <div className="keypad-row">
          {this._renderKey('key4', 1)}
          {this._renderKey('key5', 1)}
          {this._renderKey('key6', 1)}
          {this._renderKey('subtract', 1)}
          <KeyUndo handleOnClick={this.props.handleOnClick} />
        </div>
        <div className="keypad-row">
          {this._renderKey('key1', 1)}
          {this._renderKey('key2', 1)}
          {this._renderKey('key3', 1)}
          {this._renderKey('add', 1)}
          <KeyPop handleOnClick={this.props.handleOnClick} />
        </div>
        <div className="keypad-row">
          {this._renderKey('key0', 2)}
          {this._renderKey('dot', 1)}
          <KeySum handleOnClick={this.props.handleOnClick} />
          <KeySwap handleOnClick={this.props.handleOnClick} />
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
  handleOnClick: PropTypes.func,
};

export default Keypad;
