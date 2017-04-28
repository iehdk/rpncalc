import React from 'react'

class KeyClear extends React.Component {
  render () {
    const tip = 'Clear the stack'

    return (
      <button
        data-tip={tip}
        className='key key-width-2'
        type='button'
        value='clear'
        onClick={this.props.handleOnClick}
      >
        CLEAR
      </button>
    )
  }
}

export default KeyClear
