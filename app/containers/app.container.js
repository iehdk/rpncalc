import React from 'react'
import Display from '../components/display.component'
import Header from '../components/header.component'
import Help from '../components/help.component'
import Keypad from '../components/keypad.component'
import Settings from '../components/settings.component'
import Stack from '../components/stack.component'

class AppContainer extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='rpncalc'>
        <Display />
        <Header />
        <Help />
        <Keypad />
        <Settings />
        <Stack />
      </div>
    )
  }
}

export default AppContainer
