import React, { Component } from 'react'
import { connect } from 'react-redux'
import handleInitialDAta from '../actions/shared'
import Dashboard from './dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialDAta())
  }
  render() {
    return (
      <div>
        <Dashboard />
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