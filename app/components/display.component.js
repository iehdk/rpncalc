import React from 'react'

class Display extends React.Component {
  getPadding (size) {
    return (Array(size + 1).join(' '))
  }

  renderStack (stack) {
    let rows = []
    const length = stack.length
    const maxIndexSize = length.toString().length

    for (let i = 0; i < length; ++i) {
      const index = length - i
      const value = stack[i]
      const parts = value.split('.')
      const valueSize = parts[0].length
      const indexSize = index.toString().length
      const indexPadding = this.getPadding(maxIndexSize - indexSize + 1)
      const valuePadding = this.getPadding(this.props.prefixSize - valueSize + 1)

      rows.push(indexPadding + index + ': ' + valuePadding + value)
    }

    return (rows.join('\r\n'))
  }

  render () {
    return (
      <div className='display'>
        <textarea readOnly
          rows={this.props.rows}
          cols={this.props.cols}
          value={this.renderStack(this.props.stack)} />
      </div>
    )
  }
}

export default Display
