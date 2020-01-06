import React, { Component } from 'react'
import Home from './page/home'
import { Route, BrowserRouter } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    )
  }
}
