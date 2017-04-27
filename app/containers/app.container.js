import React from 'react'
import History from '../utils/history.util'
import Stack from '../utils/stack.util'
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

    let history, stack

    history = new History()
    // history.load() // FIXME
    stack = new Stack(history.last())

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
    // this.state.history.save() // FIXME
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
    let newStack = new Stack(this.state.stack.ary)
    newStack.push(this.state.promptValue)

    this.setState({
      promptValue: '',
      stack: newStack
    })

    this.addToHistory()
    event.preventDefault()
  }

  /**
   * Event handler for OnClick events in the Keypad component.
   * @param {Object} event Button OnClick event.
   */
  handleOnClick (event) {
    let value = event.currentTarget.value
    let newStack = new Stack(this.state.stack.ary)
    let skipHistory = false
    let newPromptValue

    switch (value) {
      case 'root':
        newStack.calcRoot()
        break
      case 'exp':
        newStack.calcExp()
        break
      case 'reciprocal':
        newStack.calcReciprocal()
        break
      case 'add':
        newStack.calcAdd()
        break
      case 'subtract':
        if (this.state.promptValue) {
          if (this.state.promptValue.charAt(0) !== '-') {
            newPromptValue = '-' + this.state.promptValue
            skipHistory = true
          }
        } else {
          newStack.calcSubstract()
        }
        break
      case 'multiply':
        newStack.calcMultiply()
        break
      case 'divide':
        newStack.calcDivide()
        break
      case 'sum':
        newStack.calcSum()
        break
      case 'del':
        newPromptValue = this.chopPromptValue()
        break
      case 'clear':
        newStack.empty()
        break
      case 'pop':
        newStack.pop()
        break
      case 'swap':
        newStack.swap()
        break
      case 'enter':
        newStack.push(this.state.promptValue)
        break
      case 'undo':
        this.undoHistory()
        skipHistory = true
        break
      default:
        const key = this.state.keys[value]
        newPromptValue = this.state.promptValue + key
        skipHistory = true
        break
    }

    this.setState({stack: newStack})
    this.setState({promptValue: newPromptValue || ''})

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
   * Add the current stack to the history if the stack is not empty.
   */
  addToHistory () {
    if (this.state.stack.ary.length === 0) {
      return
    }

    let newHistory = new History(this.state.history.ary)
    let newStack = new Stack(JSON.parse(JSON.stringify(this.state.stack.ary)))

    newHistory.push(newStack.ary)
    this.setState({history: newHistory})
  }

  /**
   * Undo action by replacing the current stack with last one from the history.
   */
  undoHistory () {
    if (this.state.history.ary.length === 0) {
      return
    }

    let newHistory = new History(this.state.history.ary)
    newHistory.pop()
    let newStack = new Stack(newHistory.last())

    console.log('here')
    console.log(newHistory)
    console.log(newStack)

    this.setState({stack: newStack})
    this.setState({history: newHistory})
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
