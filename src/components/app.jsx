import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'

import MyNavLink from './myNavLink'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="container">
        <div className="nav">
          <MyNavLink to="/home" linktext="Home" />
          <MyNavLink to="/about" linktext="About" />
        </div>
        <div>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/home" component={Home}></Route>
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App