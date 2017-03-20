import React from 'react'

class Keypad extends React.Component {
  renderKey (key) {
    return (
      <button className='key' value={key} onClick={this.props.handleOnClick}>
        {this.props.keys[key]}
      </button>
    )
  }

  render () {
    return (
      <div className='keypad'>
        <div className='keypad-row'>
          {this.renderKey('ac')}
          {this.renderKey('c')}
          {this.renderKey('pm')}
          {this.renderKey('div')}
        </div>
        <div className='keypad-row'>
          {this.renderKey('key7')}
          {this.renderKey('key8')}
          {this.renderKey('key9')}
          {this.renderKey('mut')}
        </div>
        <div className='keypad-row'>
          {this.renderKey('key4')}
          {this.renderKey('key5')}
          {this.renderKey('key6')}
          {this.renderKey('sub')}
        </div>
        <div className='keypad-row'>
          {this.renderKey('key1')}
          {this.renderKey('key2')}
          {this.renderKey('key3')}
          {this.renderKey('add')}
        </div>
        <div className='keypad-row'>
          {this.renderKey('key0')}
          {this.renderKey('dot')}
          {this.renderKey('ret')}
        </div>
      </div>
    )
  }
}

export default Keypad
