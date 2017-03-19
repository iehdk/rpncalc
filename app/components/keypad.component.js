import React from 'react'

class Keypad extends React.Component {
  renderKey (key) {
    const _keys = {
      ac: 'AC',
      c: 'C',
      pm: '\u00B1',
      div: '/',
      mut: '*',
      sub: '-',
      add: '+',
      dot: '.',
      ret: '\u21B5',
      key0: '0',
      key1: '1',
      key2: '2',
      key3: '3',
      key4: '4',
      key5: '5',
      key6: '6',
      key7: '7',
      key8: '8',
      key9: '9'
    }

    return (
      <button className='key' value={key} onClick={this.props.handleOnClick}>
        {_keys[key]}
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
