import React from 'react'

class KeyPop extends React.Component {
  render () {
    const tip = 'Remove last element on the stack'

    return (
      <button
        data-tip={tip}
        className='key key-width-2'
        type='button'
        value='pop'
        onClick={this.props.handleOnClick}
      >
        POP
      </button>
    )
  }
}

export default KeyPop
