import React from 'react'
import { Link } from 'react-router'
const App = React.createClass({


  render() {
    return (
      <div>
        <ul>
          <li>
              <Link to="/login">Sign in</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link> (changes depending on auth status)</li>
          <li><Link to="/page2">Page Two</Link> (authenticated)</li>
          <li><Link to="/user/foo">User: Foo</Link> (authenticated)</li>
        </ul>
        {this.props.children}
      </div>
    )
  }

})

module.exports = App