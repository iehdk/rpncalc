import React from 'react'
import Modal from 'react-modal'

class Help extends React.Component {
  render () {
    return (
      <div className='help'>
        <button className='button button-help' type='button' onClick={this.props.openHelp}>?</button>
        <Modal
          isOpen={this.props.helpIsOpen}
          className='modal'
          overlayClassName='overlay'
          onRequestClose={this.props.closeHelp}
          contentLabel='Help Modal'
        >
          <button className='button button-close' type='button' onClick={this.props.closeHelp}>X</button>
          <h2 ref='subtitle'>Help</h2>
          <p>Reverse Polish notation (RPN) is a method for representing
             expressions in which the operator symbol is placed after the
             arguments being operated on.
          </p>
          <p>
            For example, the following RPN expression will produce the sum of 2
            and 3, namely 5: 2 3 +.
          </p>
          <p>
            Copyright 2017 Martin Asser Hansen mail@maasha.dk
          </p>
        </Modal>
      </div>
    )
  }
}

export default Help
