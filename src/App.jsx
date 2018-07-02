import React from 'react'
import Feature from './Feature'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <a href="https://github.com/saltyshiomix/nerv-ie8-boilerplate">GitHub</a>
        <hr />
        <Feature />
      </div>
    )
  }
}
