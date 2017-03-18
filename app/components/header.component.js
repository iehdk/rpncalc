import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <button type='button' onClick={this.openMenu}>{'\u2630'}</button>
        <button type='button' onClick={this.getHelp}>?</button>
        <button type='button' onClick={this.exitApp}>X</button>
      </div>
    )
  }

}

export default Header
