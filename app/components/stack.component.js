import React from 'react'

class Stack extends React.Component {
  render () {
    return (
      <div className='stack'>
        <textarea readOnly
          rows={this.props.rows}
          cols={this.props.cols}
          value={this.props.value} />
      </div>
    )
  }
}

export default Stack
