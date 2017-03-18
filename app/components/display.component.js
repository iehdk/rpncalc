import React from 'react'

class Display extends React.Component {
  render () {
    return (
      <div className='display'>
        <form>
          <input
            type='text'
            size={this.props.cols}
            value={this.props.value}
            onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default Display
