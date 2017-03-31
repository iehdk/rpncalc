import React from 'react'

class Prompt extends React.Component {
  componentDidMount () {
    alert('mount')
    this.refs.prompt.focus()
  }

  componentDidUpdate () {
    alert('update')
    this.refs.prompt.focus()
  }

  render () {
    return (
      <div className='prompt'>
        <form onSubmit={this.props.handleOnSubmit}>
          <input
            ref={(input) => { this.prompt = input }}
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
