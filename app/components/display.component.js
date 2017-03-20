import React from 'react'

class Display extends React.Component {
  render () {
    return (
      <div className='display'>
        <textarea readOnly
          rows={this.props.rows}
          cols={this.props.cols}
          value={this.props.value} />
      </div>
    )
  }
}

export default Display
