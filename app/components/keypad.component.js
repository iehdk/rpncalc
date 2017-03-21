import React from 'react'

class Keypad extends React.Component {
  renderKey (key, width) {
    const _className = 'key key-width-' + width
    return (
      <button className={_className} value={key} onClick={this.props.handleOnClick}>
        {this.props.keys[key]}
      </button>
    )
  }

  render () {
    return (
      <div className='keypad'>
        <div className='keypad-row'>
          {this.renderKey('root', 1)}
          {this.renderKey('exp', 1)}
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
          {this.renderKey('substact', 1)}
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
