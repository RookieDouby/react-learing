import React, { Component } from 'react'

class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newsArr: ['news01', 'news02', 'news03']
    }
  }

  render() {
    return (
      <ul>
        {
          this.state.newsArr.map((news, index) => <li>news</li>)
        }
      </ul>
    )
  }
}

export default News