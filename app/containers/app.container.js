import React from 'react'
import History from '../utils/history.util'
import Prompt from '../components/prompt.component'
import Display from '../components/display.component'
import Keypad from '../components/keypad.component'

/**
 * Number of rows in the textarea used in the Display component.
 * @type {String}
 */
const ROWS = '4'

/**
 * Number of columns in the textarea used in the Display component and the input
 * field used in the Prompt component.
 * @type {String}
 */
const COLS = '30'

/**
 * Calculator keypad keys.
 * @type {Object}
 */
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
  subtract: '-',
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

/**
 * Main application container for the RPN calculator.
 * @type {React.Component}
 */
class AppContainer extends React.Component {
  /**
   * Constructor for AppContainer.
   * @return {React.Component} Main application container.
   */
  constructor () {
    super()

    let history = new History()
    history.load()
    let stack = history.last() || []

    this.state = {
      promptValue: '',
      stack: stack,
      history: history,
      keys: KEYS
    }
  }

  /**
   * React lifecycle method called when component is mounted.
   */
  componentDidMount () {
    this.inputElement.focus()
  }

  /**
   * React lifecycle method called when component is updated.
   */
  componentDidUpdate () {
    this.state.history.save()
    this.inputElement.focus()
  }

  /**
   * Event handler for OnChange events in the Prompt component.
   * @param {Object} event Input field OnChange event.
   */
  handleOnChange (event) {
    this.setState({promptValue: event.target.value})
  }

  /**
   * Event handler for OnSubmit events in the Prompt component.
   * @param {Object} event Form submit event.
   */
  handleOnSubmit (event) {
    this.addToStack()
    this.setState({promptValue: ''})
    this.addToHistory()
    event.preventDefault()
  }

  /**
   * Event handler for OnClick events in the Keypad component.
   * @param {Object} event Button OnClick event.
   */
  handleOnClick (event) {
    let value = event.currentTarget.value
    let key
    let skipHistory = false

    switch (value) {
      case 'root':
        this.calcRoot()
        this.setState({promptValue: ''})
        break
      case 'exp':
        this.calcExp()
        this.setState({promptValue: ''})
        break
      case 'reciprocal':
        this.calcReciprocal()
        this.setState({promptValue: ''})
        break
      case 'add':
        this.calcAdd()
        this.setState({promptValue: ''})
        break
      case 'subtract':
        if (this.state.promptValue) {
          if (this.state.promptValue.charAt(0) !== '-') {
            this.setState({promptValue: '-' + this.state.promptValue})
          }
        } else {
          this.calcSubstract()
          this.setState({promptValue: ''})
        }
        break
      case 'multiply':
        this.calcMultiply()
        this.setState({promptValue: ''})
        break
      case 'divide':
        this.calcDivide()
        this.setState({promptValue: ''})
        break
      case 'sum':
        this.calcSum()
        this.setState({promptValue: ''})
        break
      case 'del':
        this.setState({promptValue: this.chopPromptValue()})
        break
      case 'clear':
        this.setState({stack: []})
        this.setState({promptValue: ''})
        break
      case 'undo':
        this.undoHistory()
        this.setState({promptValue: ''})
        break
      case 'pop':
        this.popStack()
        this.setState({promptValue: ''})
        break
      case 'swap':
        this.swapStack()
        this.setState({promptValue: ''})
        break
      case 'enter':
        this.addToStack()
        this.setState({promptValue: ''})
        break
      default:
        key = this.state.keys[value]
        this.setState({promptValue: this.state.promptValue + key})
        skipHistory = true
        break
    }

    if (!skipHistory) {
      this.addToHistory()
    }
  }

  /**
   * Method that chops the promptValue, that is remove the last char.
   * @return {String} Chopped promptValue
   */
  chopPromptValue () {
    let promptValue = this.state.promptValue
    promptValue = promptValue.substring(0, promptValue.length - 1)
    return (promptValue)
  }

  /**
   * Remove the last value on the stack.
   */
  popStack () {
    let newStack = this.state.stack.slice()
    const value = newStack.pop()

    if (value) {
      this.setState({stack: newStack})
    }
  }

  /**
   * Swap the last two values on the stack.
   */
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

  /**
   * Add the promptValue to the stack unless it is an operator in which case
   * the appropriate action is taken.
   */
  addToStack () {
    let skipHistory = false

    switch (this.state.promptValue) {
      case '':
        break
      case '+':
        this.calcAdd()
        this.setState({promptValue: ''})
        break
      case '-':
        this.calcSubstract()
        this.setState({promptValue: ''})
        break
      case '*':
        this.calcMultiply()
        this.setState({promptValue: ''})
        break
      case '/':
        this.calcDivide()
        this.setState({promptValue: ''})
        break
      default:
        let newStack = this.state.stack.slice()
        const value = parseFloat(this.state.promptValue)

        if (value || this.state.promptValue === '0') {
          newStack.push(value)
          this.setState({stack: newStack})
        } else {
          skipHistory = true
        }

        break
    }

    if (!skipHistory) {
      this.addToHistory()
    }
  }

  /**
   * Add the current stack to the history if the stack is not empty.
   */
  addToHistory () {
    if (this.state.stack.length === 0) {
      return
    }

    let newStack = this.state.stack.slice()
    let newHistory = new History(this.state.history.ary)

    newHistory.push(newStack)
    this.setState({history: newHistory})
  }

  /**
   * Undo action by replacing the current stack with last one saved in the
   * history.
   */
  undoHistory () {
    if (this.state.history.length === 0) {
      return
    }

    let newHistory = new History(this.state.history.ary)
    let newStack = newHistory.pop()

    this.setState({stack: newStack})
    this.setState({history: newHistory})
  }

  /**
   * Calculate the square root of the last stack value which is replaced by the
   * result.
   */
  calcRoot () {
    let newStack = this.state.stack.slice()
    const value = newStack.pop()

    if (value && value > 0) {
      newStack.push(Math.sqrt(value))
      this.setState({stack: newStack})
    }
  }

  /**
   * Calculate the exponent x**y of using the two last stack values which are
   * replaced by the result.
   */
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

  /**
   * Calculate the reciprocal value of using the last stack value which is
   * replaced by the result.
   */
  calcReciprocal () {
    let newStack = this.state.stack.slice()
    const value = newStack.pop()

    if (value) {
      newStack.push(1 / value)
      this.setState({stack: newStack})
    }
  }

  /**
   * Calculate the sum of all stack values which are replaced by the
   * result.
   */
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

  /**
   * Calculate the sum of the last two stack values which are replaced by the
   * result.
   */
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

  /**
   * Calculate the subtraction of the last two stack values which are replaced
   * by the result.
   */
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

  /**
   * Calculate the multiplication of the last two stack values which are
   * replaced by the result.
   */
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

  /**
   * Calculate the division of the last two stack values which are replaced by
   * the result.
   */
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

  /**
   * React.component's required render method.
   * @return {Object} JSX code that is transpiled to Javascript.
   */
  render () {
    return (
      <div className='app'>
        <Display
          rows={ROWS}
          cols={COLS}
          prefixSize={this.state.prefixSize}
          suffixSize={this.state.suffixSize}
          stack={this.state.stack} />
        <Prompt
          cols={COLS}
          inputRef={(inputElement) => { this.inputElement = inputElement }}
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
