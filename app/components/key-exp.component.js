import React from 'react'

class KeyExp extends React.Component {
  render () {
    const tip = 'Calculate the exponent<br>' +
                'of the last two elements<br>' +
                'on the stack where:<br>' +
                '2: x and 1: y'

    return (
      <button
        data-tip={tip}
        data-multiline='true'
        data-place='right'
        className='key key-width-1'
        type='button'
        value='exp'
        onClick={this.props.handleOnClick}
      >
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
