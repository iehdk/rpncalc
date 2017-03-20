import React from 'react'

class Prompt extends React.Component {
  render () {
    return (
      <div className='prompt'>
        <form onSubmit={this.props.handleOnSubmit}>
          <input
            type='text'
            size={this.props.cols}
            onChange={this.props.handleOnChange}
            value={this.props.promptValue} />
        </form>
      </div>
    )
  }
}

export default Prompt
