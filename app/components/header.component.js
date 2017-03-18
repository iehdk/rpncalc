import React from 'react'
import Modal from 'react-modal'

class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      modalIsOpen: false
    }

    this.openHelp = this.openHelp.bind(this)
    this.closeModal = this.closeModal.bind(this)
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
        <button type='button' onClick={this.props.openMenu}>{'\u2630'}</button>
        <button type='button' onClick={this.openHelp}>?</button>
        <button type='button' onClick={this.props.exitApp}>X</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={this.props.style}
          contentLabel='Help Modal'
        >
          <button type='button' onClick={this.closeModal}>X</button>
          <h2 ref='subtitle'>Help</h2>
          <p>Help text here</p>
        </Modal>
      </div>
    )
  }
}

export default Header
