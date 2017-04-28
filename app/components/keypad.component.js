import React from 'react'
import Key from '../components/key.component'
import KeyExp from '../components/key-exp.component'
import ReactTooltip from 'react-tooltip'

class Keypad extends React.Component {
  renderKey (value, width) {
    return (
      <Key value={value} label={this.props.keys[value]} width={width} handleOnClick={this.props.handleOnClick} />
    )
  }

  render () {
    return (
      <div className='keypad'>
        <ReactTooltip delayShow={1500} />
        <div className='keypad-row'>
          {this.renderKey('root', 1)}
          <KeyExp handleOnClick={this.props.handleOnClick} />
          {this.renderKey('reciprocal', 1)}
          {this.renderKey('divide', 1)}
          {this.renderKey('del', 2)}
        </div>
        <div className='keypad-row'>
          {this.renderKey('key7', 1)}
          {this.renderKey('key8', 1)}
          {this.renderKey('key9', 1)}
          {this.renderKey('multiply', 1)}
          {this.renderKey('clear', 2)}
        </div>
        <div className='keypad-row'>
          {this.renderKey('key4', 1)}
          {this.renderKey('key5', 1)}
          {this.renderKey('key6', 1)}
          {this.renderKey('subtract', 1)}
          {this.renderKey('undo', 2)}
        </div>
        <div className='keypad-row'>
          {this.renderKey('key1', 1)}
          {this.renderKey('key2', 1)}
          {this.renderKey('key3', 1)}
          {this.renderKey('add', 1)}
          {this.renderKey('pop', 2)}
        </div>
        <div className='keypad-row'>
          {this.renderKey('key0', 2)}
          {this.renderKey('dot', 1)}
          {this.renderKey('sum', 1)}
          {this.renderKey('swap', 2)}
        </div>
        <div className='keypad-row'>
          {this.renderKey('enter', 6)}
        </div>
      </div>
    )
  }
}

export default Keypad
