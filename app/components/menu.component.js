import React from 'react'
import {slide as Burger} from 'react-burger-menu'

class Menu extends React.Component {
  render () {
    const iconBurger = '\u2630'

    return (
      <div className='menu'>
        <button className='button button-menu' type='button' onClick={this.props.openMenu}>{iconBurger}</button>
        <Burger
          isOpen={this.props.menuIsOpen}>
          <ul>
            <li>setting 1</li>
            <li>setting 2</li>
            <li>setting ...</li>
          </ul>
        </Burger>
      </div>
    )
  }
}

export default Menu
