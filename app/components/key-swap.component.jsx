import React from 'react'

class KeySwap extends React.Component {
  render () {
    const tip = 'Swap the last two values on the stack'

    return (
      <button
        data-tip={tip}
        className='key key-width-2'
        type='button'
        value='swap'
        onClick={this.props.handleOnClick}
      >
        SWAP
      </button>
    )
  }
}

export default KeySwap
