import React from 'react'

class Display extends React.Component {
  componentDidMount () {
    const node = document.getElementById('display')
    node.scrollTop = node.scrollHeight
  }

  componentDidUpdate () {
    const node = document.getElementById('display')
    node.scrollTop = node.scrollHeight
  }

  getMaxPrefixSize (stack) {
    let maxPrefixSize = 0

    stack.map(function (value) {
      const parts = value.toString().split('.')
      const prefixSize = parts[0].length

      if (prefixSize > maxPrefixSize) {
        maxPrefixSize = prefixSize
      }
    })

    return (maxPrefixSize)
  }

  getPadding (size) {
    return (Array(size + 1).join(' '))
  }

  renderStack (stack) {
    let rows = []
    const length = stack.length
    const maxIndexSize = length.toString().length
    const maxPrefixSize = this.getMaxPrefixSize(stack)

    for (let i = 0; i < length; ++i) {
      const index = length - i
      const value = stack[i]
      const parts = value.toString().split('.')
      const valueSize = parts[0].length
      const indexSize = index.toString().length
      const indexPadding = this.getPadding(maxIndexSize - indexSize + 1)
      const valuePadding = this.getPadding(maxPrefixSize - valueSize + 1)

      rows.push(indexPadding + index + ': ' + valuePadding + value)
    }

    return (rows.join('\r\n'))
  }

  render () {
    return (
      <div className='display'>
        <textarea readOnly
          id='display'
          rows={this.props.rows}
          cols={this.props.cols}
          value={this.renderStack(this.props.stack)} />
      </div>
    )
  }
}

export default Display
