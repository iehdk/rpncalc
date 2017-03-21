import React from 'react'
import Modal from 'react-modal'
import {slide as Menu} from 'react-burger-menu'

class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      menuIsOpen: false,
      modalIsOpen: false
    }

    this.openMenu = this.openMenu.bind(this)
    this.openHelp = this.openHelp.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openMenu () {
    this.setState({menuIsOpen: true})
  }

  openHelp () {
    this.setState({modalIsOpen: true})
  }

  closeModal () {
    this.setState({modalIsOpen: false})
  }

  render () {
    return (
      <div className='header'>
        <button className='button button-menu' type='button' onClick={this.openMenu}>{'\u2630'}</button>
        <button className='button button-help 'type='button' onClick={this.openHelp}>?</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel='Help Modal'
        >
          <button type='button' onClick={this.closeModal}>X</button>
          <h2 ref='subtitle'>Help</h2>
          <p>Help text here</p>
        </Modal>
        {// <Menu
        //   isOpen={this.state.menuIsOpen}>
        //   <a id='home' className='menu-item' href='/'>Home</a>
        //   <a onClick={this.showSettings} className='menu-item--small' href=''>Settings</a>
        // </Menu>
      }
      </div>
    )
  }
}

export default Header
