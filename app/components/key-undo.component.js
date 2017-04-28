import React from 'react'

class KeyUndo extends React.Component {
  render () {
    const tip = 'Undo last stack action'

    return (
      <button
        data-tip={tip}
        className='key key-width-2'
        type='button'
        value='undo'
        onClick={this.props.handleOnClick}
      >
        UNDO
      </button>
    )
  }
}

export default KeyUndo
