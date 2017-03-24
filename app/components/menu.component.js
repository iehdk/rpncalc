import React from 'react'
import {slide as Burger} from 'react-burger-menu'

class Menu extends React.Component {
  render () {
    return (
      <div className='menu'>
        <button className='button button-menu' type='button' onClick={this.props.openMenu}>{'\u2630'}</button>
        <Burger
          isOpen={this.props.menuIsOpen}>
          <a id='home' className='menu-item' href='/'>Home</a>
          <a onClick={this.props.showSettings} className='menu-item--small' href=''>Settings</a>
        </Burger>
      </div>
    )
  }
}

export default Menu
