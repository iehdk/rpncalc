import React from 'react'

class Exit extends React.Component {
  render () {
    return (
      <div className='exit'>
        <button className='button button-exit' type='button' onClick={this.props.exitApp}>X</button>
      </div>
    )
  }
}

export default Exit
