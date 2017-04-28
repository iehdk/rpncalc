import React from 'react'

class KeySum extends React.Component {
  render () {
    const tip = 'Sum all values on the stack'

    return (
      <button
        data-tip={tip}
        className='key key-width-1'
        type='button'
        value='sum'
        onClick={this.props.handleOnClick}
      >
        {'\u03a3'}
      </button>
    )
  }
}

export default KeySum
