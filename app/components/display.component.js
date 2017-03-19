import React from 'react'

class Display extends React.Component {
  render () {
    return (
      <div className='display'>
        <form onSubmit={this.props.handleOnSubmit}>
          <input
            type='text'
            size={this.props.cols}
            onChange={this.props.handleOnChange}
            value={this.props.displayValue} />
        </form>
      </div>
    )
  }
}

export default Display
