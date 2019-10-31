import React, { Component } from 'react'
import { connect } from 'react-redux'
// import handleInitialDAta from '../actions/shared'


class Dashboard extends Component {
    // componentDidMount() {
    //     console.log(this.props)
    // }
    render() {
        console.log(this.props)
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>timeline</h2>
                <ul>
                    {this.props.tweetsIds.map((id) => {
                        return (
                            <li key={id}>
                                {id}
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