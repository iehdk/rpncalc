import React from 'react'

class Key extends React.Component {
  render () {
    const className = 'key key-width-' + this.props.width

    return (
      <button className={className} type='button' value={this.props.value} onClick={this.props.handleOnClick}>
        {this.props.label}
      </button>
    )
  }
}

export default Key
