import React from 'react'

class KeyExp extends React.Component {
  render () {
    return (
      <button className='key key-width-1' type='button' value='exp' onClick={this.props.handleOnClick}>
        <span>
          x
          <sup>
            y
          </sup>
        </span>
      </button>
    )
  }
}

export default KeyExp
