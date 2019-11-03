import React, { Component } from 'react'
import { connect } from 'react-redux'
import handleInitialDAta from '../actions/shared'
import Dashboard from './dashboard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewTweet from './NewTweet'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialDAta())
  }
  render() {
    return (
      <div>
         <Router>
              <div>
              <ul style={{display: 'inline-flex'}}>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/NewTweet">New Tweet</Link>
                  </li>
              </ul>

              <Route exact path="/" component={Dashboard} />
              <Route path="/NewTweet" component={NewTweet} />
              </div>
          </Router>
      </div>
    )
  }
}

// function mapStateToProps({ authedUser }) {
//   return {
//     loading: authedUser !== null
//   }
// }

export default connect()(App)