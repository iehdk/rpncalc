import React from 'react'
import Header from '../components/header.component'
import Help from '../components/help.component'
import Menu from '../components/menu.component'
import Prompt from '../components/Prompt.component'
import Display from '../components/display.component'
import Keypad from '../components/keypad.component'

class AppContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      promptValue: '',
      stack: Array(4)
    }

    this.state.keys = {
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
  }

  handleOnChange (event) {
    this.setState({promptValue: event.target.value})
  }

  handleOnClick (event) {
    let value = event.target.value
    let key = this.state.keys[value]

    switch (value) {
      case 'ac':
        alert('ac')
        break
      case 'c':
        alert('c')
        break
      case 'ret':
        alert('ret')
        break
      default:
        this.setState({promptValue: this.state.promptValue + key})
        break
    }
  }

  handleOnSubmit (event) {
    alert('Submitted ' + this.state.promptValue)
    event.preventDefault()
  }

  render () {
    const _rows = '4'
    const _cols = '30'
    const _modalStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    }

    return (
      <div className='rpncalc'>
        <Header />
        <Display
          rows={_rows}
          cols={_cols} />
        <Prompt
          cols={_cols}
          promptValue={this.state.promptValue}
          handleOnChange={this.handleOnChange.bind(this)}
          handleOnSubmit={this.handleOnSubmit.bind(this)} />
        <Help
          style={_modalStyles} />
        <Keypad
          keys={this.state.keys}
          handleOnClick={this.handleOnClick.bind(this)} />
        <Menu />
      </div>
    )
  }
}

export default AppContainer
