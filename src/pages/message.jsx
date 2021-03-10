import React, { PureComponent } from 'react'

class Message extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 3, title: 'message003'},
        {id: 5, title: 'message005'}
      ]
      this.setState({
        messages
      })
    }, 1000)
  }

  render() {
    return (
      <ul>
        {
          this.state.messages.map((m, index) => (
            <li>
              <a href="javascript:;">{m.title}</a>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default Message