import React from 'react'
import Display from '../components/display.component'
import Header from '../components/header.component'
import Help from '../components/help.component'
import Keypad from '../components/keypad.component'
import Menu from '../components/menu.component'
import Stack from '../components/stack.component'

class AppContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      displayValue: '',
      stack: Array(4)
    }
  }

  handleOnChange (event) {
    this.setState({displayValue: event.target.value})
  }

  handleOnClick (event) {
    this.setState({displayValue: this.state.displayValue + event.target.value})
  }

  handleOnSubmit (event) {
    alert('Submitted ' + this.state.displayValue)
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
        <Stack
          rows={_rows}
          cols={_cols} />
        <Display
          cols={_cols}
          displayValue={this.state.displayValue}
          handleOnChange={this.handleOnChange.bind(this)}
          handleOnSubmit={this.handleOnSubmit.bind(this)} />
        <Help
          style={_modalStyles} />
        <Keypad
          handleOnClick={this.handleOnClick.bind(this)} />
        <Menu />
      </div>
    )
  }
}

export default AppContainer
