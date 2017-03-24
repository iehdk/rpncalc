import React from 'react'
import Help from '../components/help.component'

// import {slide as Menu} from 'react-burger-menu'

class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      menuIsOpen: false,
      helpIsOpen: false
    }

    this.openMenu = this.openMenu.bind(this)
    this.openHelp = this.openHelp.bind(this)
    this.closeHelp = this.closeHelp.bind(this)
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
        <button className='button button-menu' type='button' onClick={this.openMenu}>{'\u2630'}</button>
        {// <Menu
        //   isOpen={this.state.menuIsOpen}>
        //   <a id='home' className='menu-item' href='/'>Home</a>
        //   <a onClick={this.showSettings} className='menu-item--small' href=''>Settings</a>
        // </Menu>
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
