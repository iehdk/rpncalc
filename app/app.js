import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/app.container'

require('./stylesheets/main.scss')

class App extends React.Component {
  render () {
    return (
      <AppContainer />
    )
  }
}

// Render to index.html
ReactDOM.render(
  <App />,
  document.getElementById('content')
)
