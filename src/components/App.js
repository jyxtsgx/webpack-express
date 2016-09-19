import React from 'react'
import { Link } from 'react-router'
const App = React.createClass({


  render() {
    return (
      <div>
        <ul>
          <li>
              <Link to="/login">login</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/logout">logout</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }

})

module.exports = App