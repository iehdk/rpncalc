import React from 'react'

class Display extends React.Component {
  render () {
    return (
      <div className='display'>
        <form onSubmit={this.props.handleOnSubmit}>
          <input
            type='text'
            size={this.props.cols}
            value={this.props.value} />
        </form>
      </div>
    )
  }
}

export default Display
