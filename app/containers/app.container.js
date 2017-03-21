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
      prefixSize: 0,
      suffixSize: 0,
      promptValue: '',
      stack: []
    }

    this.state.keys = {
      undo: 'UNDO',
      clear: 'CLEAR',
      del: 'DEL',
      pop: 'POP',
      swap: 'SWAP',
      reciprocal: '\u215fx',
      divide: '/',
      exp: 'x\u02b8',
      multiply: '*',
      substact: '-',
      add: '+',
      dot: '.',
      root: '\u221a',
      sum: '\u03a3',
      enter: 'ENTER',
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
      case 'root':
        this.calcRoot()
        this.setState({promptValue: ''})
        break
      case 'exp':
        this.calcExp()
        this.setState({promptValue: ''})
        break
      case 'add':
        this.calcAdd()
        this.setState({promptValue: ''})
        break
      case 'substact':
        this.calcSubstract()
        this.setState({promptValue: ''})
        break
      case 'multiply':
        this.calcMultiply()
        this.setState({promptValue: ''})
        break
      case 'divide':
        this.calcDivide()
        this.setState({promptValue: ''})
        break
      case 'enter':
        this.addToStack()
        this.setState({promptValue: ''})
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

  addToStack () {
    let newStack = this.state.stack.slice()
    const value = parseFloat(this.state.promptValue)
    const parts = value.toString().split('.')
    const prefixSize = parts[0].length
    const suffixSize = parts[1] ? parts[1].length : 0

    if (prefixSize > this.state.prefixSize) {
      this.setState({prefixSize: prefixSize})
    }

    if (suffixSize > this.state.suffixSize) {
      this.setState({suffixSize: suffixSize})
    }

    newStack.push(value)
    this.setState({stack: newStack})
  }

  calcRoot () {
    let newStack = this.state.stack.slice()
    const value = newStack.pop()

    if (value) {
      newStack.push(Math.sqrt(value))
      this.setState({stack: newStack})
    }
  }

  calcExp () {
    if (this.state.stack.length < 2) {
      return
    }

    let newStack = this.state.stack.slice()
    const value2 = newStack.pop()
    const value1 = newStack.pop()

    newStack.push(value1 ** value2)
    this.setState({stack: newStack})
  }

  calcAdd () {
    if (this.state.stack.length < 2) {
      return
    }

    let newStack = this.state.stack.slice()
    const value2 = newStack.pop()
    const value1 = newStack.pop()

    newStack.push(value1 + value2)
    this.setState({stack: newStack})
  }

  calcSubstract () {
    if (this.state.stack.length < 2) {
      return
    }

    let newStack = this.state.stack.slice()
    const value2 = newStack.pop()
    const value1 = newStack.pop()

    newStack.push(value1 - value2)
    this.setState({stack: newStack})
  }

  calcMultiply () {
    if (this.state.stack.length < 2) {
      return
    }

    let newStack = this.state.stack.slice()
    const value2 = newStack.pop()
    const value1 = newStack.pop()

    newStack.push(value1 * value2)
    this.setState({stack: newStack})
  }

  calcDivide () {
    if (this.state.stack.length < 2) {
      return
    }

    let newStack = this.state.stack.slice()
    const value2 = newStack.pop()
    const value1 = newStack.pop()

    newStack.push(value1 / value2)
    this.setState({stack: newStack})
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
          cols={_cols}
          prefixSize={this.state.prefixSize}
          suffixSize={this.state.suffixSize}
          stack={this.state.stack} />
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
