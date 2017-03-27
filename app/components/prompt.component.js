import React from 'react'

class Prompt extends React.Component {
  componentDidMount () {
    alert('here')
    let node = document.getElementById('prompt')
    node.focus()
  }

  render () {
    return (
      <div className='prompt'>
        <form onSubmit={this.props.handleOnSubmit}>
          <input
            id='prompt'
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
