import React from 'react'
import Modal from 'react-modal'

class Help extends React.Component {
  render () {
    return (
      <div className='help'>
        <button className='button button-help 'type='button' onClick={this.props.openHelp}>?</button>
        <Modal
          isOpen={this.props.helpIsOpen}
          onRequestClose={this.props.closeHelp}
          contentLabel='Help Modal'
        >
          <button type='button' onClick={this.props.closeHelp}>X</button>
          <h2 ref='subtitle'>Help</h2>
          <p>Help text here</p>
        </Modal>
      </div>
    )
  }
}

export default Help
