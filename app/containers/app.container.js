import React from 'react'
import Display from '../components/display.component'
import Header from '../components/header.component'
import Help from '../components/help.component'
import Keypad from '../components/keypad.component'
import Menu from '../components/menu.component'
import Stack from '../components/stack.component'

class AppContainer extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    let _rows = '4'
    let _cols = '30'

    return (
      <div className='rpncalc'>
        <Header />
        <Display
          cols={_cols} />
        <Help />
        <Keypad />
        <Menu />
        <Stack
          rows={_rows}
          cols={_cols} />
      </div>
    )
  }
}

export default AppContainer
