import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MyNavLink from '../components/myNavLink'
class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <h2>Home页面的标题</h2>
        <div>
          <ul>
            <li>
              <MyNavLink linktext="News" to="/home/news" />
              <MyNavLink linktext="Message" to="/home/message" />
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/home/news" component></Route>
        </Switch>
      </div>
    )
  }
}

export default Home