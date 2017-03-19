import React from 'react'

function Key (props) {
  return (
    <button className='square' onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

class Keypad extends React.Component {
  renderKey (key) {
    return <Key value={key} onClick={() => this.props.onClick(key)} />
  }

  render () {
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
      <div className='keypad'>
        <div className='keypad-row'>
          {this.renderKey(_keys.ac)}
          {this.renderKey(_keys.c)}
          {this.renderKey(_keys.pm)}
          {this.renderKey(_keys.div)}
        </div>
        <div className='keypad-row'>
          {this.renderKey(_keys.key7)}
          {this.renderKey(_keys.key8)}
          {this.renderKey(_keys.key9)}
          {this.renderKey(_keys.mut)}
        </div>
        <div className='keypad-row'>
          {this.renderKey(_keys.key4)}
          {this.renderKey(_keys.key5)}
          {this.renderKey(_keys.key6)}
          {this.renderKey(_keys.sub)}
        </div>
        <div className='keypad-row'>
          {this.renderKey(_keys.key1)}
          {this.renderKey(_keys.key2)}
          {this.renderKey(_keys.key3)}
          {this.renderKey(_keys.add)}
        </div>
        <div className='keypad-row'>
          {this.renderKey(_keys.key0)}
          {this.renderKey(_keys.dot)}
          {this.renderKey(_keys.ret)}
        </div>
      </div>
    )
  }
}

export default Keypad
