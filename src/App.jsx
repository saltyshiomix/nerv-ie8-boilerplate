import React from 'react'
import Feature from './Feature'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <hr />
        <Feature />
      </div>
    )
  }
}
