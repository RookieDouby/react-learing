import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MyNavLink extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return <NavLink {...this.props} activeClassName="activeClass">{ this.props.linktext }</NavLink>
  }
}

export default MyNavLink