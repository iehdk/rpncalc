import React from 'react'
import Help from '../components/help.component'
import Exit from '../components/exit.component'

class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      helpIsOpen: false
    }
  }

  openHelp () {
    this.setState({helpIsOpen: true})
  }

  closeHelp () {
    this.setState({helpIsOpen: false})
  }

  exitApp () {
    const remote = require('electron').remote
    remote.app.quit()
  }

  render () {
    return (
      <div className='header'>
        <Exit
          exitApp={this.exitApp.bind(this)} />
        <Help
          helpIsOpen={this.state.helpIsOpen}
          openHelp={this.openHelp.bind(this)}
          closeHelp={this.closeHelp.bind(this)} />
      </div>
    )
  }
}

export default Header
