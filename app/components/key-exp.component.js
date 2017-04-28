import React from 'react'

class KeyExp extends React.Component {
  render () {
    const tip = 'Calculate the exponent' +
                'of the last two elements ' +
                'on the stack where: ' +
                '2: x and 1: y'

    return (
      <button
        data-tip={tip}
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
