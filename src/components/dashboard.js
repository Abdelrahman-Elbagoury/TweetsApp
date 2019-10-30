import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
            <div>car</div>
        )
    }
}

function mapStateToProps({tweets}) {
    return {
        tweetsID: tweets
    }
}

export default connect()(Dashboard)