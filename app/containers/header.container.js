import React from 'react'
import Help from '../components/help.component'

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

  render () {
    return (
      <div className='header'>
        <Help
          helpIsOpen={this.state.helpIsOpen}
          openHelp={this.openHelp.bind(this)}
          closeHelp={this.closeHelp.bind(this)} />
      </div>
    )
  }
}

export default Header
