import React from 'react'

class KeyDel extends React.Component {
  render () {
    const tip = 'Delete last character from prompt'

    return (
      <button
        data-tip={tip}
        className='key key-width-2'
        type='button'
        value='del'
        onClick={this.props.handleOnClick}
      >
        DEL
      </button>
    )
  }
}

export default KeyDel
