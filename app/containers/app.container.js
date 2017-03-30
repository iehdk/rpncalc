import React from 'react'
import Header from '../containers/header.container'
import Prompt from '../components/Prompt.component'
import Display from '../components/display.component'
import Keypad from '../components/keypad.component'

const ROWS = '4'
const COLS = '30'
const KEYS = {
  undo: 'UNDO',
  clear: 'CLEAR',
  del: 'DEL',
  pop: 'POP',
  swap: 'SWAP',
  reciprocal: '1/x',
  divide: '/',
  exp: 'x^y',
  multiply: 'x',
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

class AppContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      promptValue: '',
      stack: [],
      history: [],
      keys: KEYS
    }
  }

  handleOnChange (event) {
    this.setState({promptValue: event.target.value})
  }

  handleOnSubmit (event) {
    this.addToStack()
    this.setState({promptValue: ''})
    this.addToHistory()
    event.preventDefault()
  }

  handleOnClick (event) {
    let value = event.target.value
    let key = this.state.keys[value]

    switch (value) {
      case 'root':
        this.calcRoot()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case 'exp':
        this.calcExp()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case 'reciprocal':
        this.calcReciprocal()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case 'add':
        this.calcAdd()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case 'substact':
        if (this.state.promptValue) {
          this.setState({promptValue: '-' + this.state.promptValue})
        } else {
          this.calcSubstract()
          this.setState({promptValue: ''})
        }
        this.addToHistory()
        break
      case 'multiply':
        this.calcMultiply()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case 'divide':
        this.calcDivide()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case 'sum':
        this.calcSum()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case 'del':
        this.setState({promptValue: this.chopPromptValue()})
        this.addToHistory()
        break
      case 'clear':
        this.setState({stack: []})
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case 'undo':
        this.undoHistory()
        this.setState({promptValue: ''})
        break
      case 'pop':
        this.popStack()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case 'swap':
        this.swapStack()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case 'enter':
        this.addToStack()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      default:
        this.setState({promptValue: this.state.promptValue + key})
        break
    }
  }

  chopPromptValue () {
    let promptValue = this.state.promptValue
    promptValue = promptValue.substring(0, promptValue.length - 1)
    return (promptValue)
  }

  popStack () {
    let newStack = this.state.stack.slice()
    const value = newStack.pop()

    if (value) {
      this.setState({stack: newStack})
    }
  }

  swapStack () {
    if (this.state.stack.length < 2) {
      return
    }

    let newStack = this.state.stack.slice()
    const value2 = newStack.pop()
    const value1 = newStack.pop()

    newStack.push(value2)
    newStack.push(value1)
    this.setState({stack: newStack})
  }

  addToStack () {
    switch (this.state.promptValue) {
      case '':
        break
      case '+':
        this.calcAdd()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case '-':
        this.calcSubstract()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case 'x':
        this.calcMultiply()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      case '/':
        this.calcDivide()
        this.setState({promptValue: ''})
        this.addToHistory()
        break
      default:
        let newStack = this.state.stack.slice()
        const value = parseFloat(this.state.promptValue)

        if (value || this.state.promptValue === '0') {
          newStack.push(value)
          this.setState({stack: newStack})
        }

        break
    }
  }

  addToHistory () {
    if (this.state.stack.length === 0) {
      return
    }

    let newStack = this.state.stack.slice()
    let newHistory = this.state.history.slice()
    newHistory.push(newStack)
    this.setState({history: newHistory})
  }

  undoHistory () {
    if (this.state.history.length === 0) {
      return
    }

    let newHistory = this.state.history.slice()
    let newStack = newHistory.pop()
    this.setState({stack: newStack})
    this.setState({history: newHistory})
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

  calcReciprocal () {
    let newStack = this.state.stack.slice()
    const value = newStack.pop()

    if (value) {
      newStack.push(1 / value)
      this.setState({stack: newStack})
    }
  }

  calcSum () {
    if (this.state.stack.length < 1) {
      return
    }

    let sum = 0

    for (let i = 0; i < this.state.stack.length; ++i) {
      sum += this.state.stack[i]
    }

    this.setState({stack: [sum]})
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
    return (
      <div className='rpncalc'>
        <Header />
        <Display
          rows={ROWS}
          cols={COLS}
          prefixSize={this.state.prefixSize}
          suffixSize={this.state.suffixSize}
          stack={this.state.stack} />
        <Prompt
          cols={COLS}
          promptValue={this.state.promptValue}
          handleOnChange={this.handleOnChange.bind(this)}
          handleOnSubmit={this.handleOnSubmit.bind(this)} />
        <Keypad
          keys={this.state.keys}
          handleOnClick={this.handleOnClick.bind(this)} />
      </div>
    )
  }
}

export default AppContainer
