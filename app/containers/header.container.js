import React from 'react'
import Help from '../components/help.component'
import Menu from '../components/menu.component'

class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      menuIsOpen: false,
      helpIsOpen: false
    }
  }

  openMenu () {
    this.setState({menuIsOpen: true})
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
        {
        // <Menu
        //   menuIsOpen={this.state.menuIsOpen}
        //   openMenu={this.openMenu.bind(this)} />
        }
        <Help
          helpIsOpen={this.state.helpIsOpen}
          openHelp={this.openHelp.bind(this)}
          closeHelp={this.closeHelp.bind(this)} />
      </div>
    )
  }
}

export default Header
