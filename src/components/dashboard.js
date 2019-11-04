import React, { Component } from 'react'
import { connect } from 'react-redux'
// import handleInitialDAta from '../actions/shared'
import Tweet from './tweet'


class Dashboard extends Component {
    render() {
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>Timeline</h2>
                <ul>
                    {this.props.tweetsIds.map((id) => {
                        return (
                            <li key={id}>
                                <Tweet id={id} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ tweets }) {
    return {
        tweetsIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)