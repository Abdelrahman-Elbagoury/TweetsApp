import React, { Component } from 'react'
import { formatTweet } from '../utils/helpers'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faReply } from '@fortawesome/free-solid-svg-icons'

class Tweet extends Component {
    render() {
        var time = this.props.tweet.timestamp
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8} style={{ border: 'solid 2px #D8D8D8', padding: '10px', borderRadius: '2px' }}>
                            <Row>
                                <Col sm={2} style={{textAlign:'center'}}>
                                    <img src={this.props.tweet.avatar} alt={this.props.tweet.name} style={{ width: '60px', borderRadius: '50%', marginTop: '10px', marginLeft:'auto' }} />
                                </Col>
                                <Col sm={10}>
                                    <div style={{ fontWeight: '700' }}>
                                        {this.props.tweet.name}
                                    </div>
                                    <div style={{ fontSize: '13px', opacity: '.8', marginBottom: '10px' }}>
                                        {new Date(time).toLocaleTimeString("en-US")} ||            {new Date(time).toLocaleDateString("en-US")}
                                    </div>
                                    <div style={{marginRight:'70px'}}>
                                        {this.props.tweet.text}
                                    </div>
                                    <div style={{ marginTop: '20px', fontSize: '15px'}}>
                                        <span style={{paddingRight: '30px'}}>
                                            {this.props.tweet.replies}
                                            <FontAwesomeIcon icon={faReply} style={{marginLeft: '10px', color: this.props.tweet.replies? '#00008B' : 'black' }} />
                                        </span>
                                        <span>
                                            {this.props.tweet.likes}
                                            <FontAwesomeIcon icon={faHeart} style={{marginLeft: '10px', color: this.props.tweet.likes? 'red' : 'black'}} />
                                        </span>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, tweets }, { id }) {
    const tweet = tweets[id]

    return {
        authedUser,
        tweet: formatTweet(tweet, users[tweet.author], authedUser)
    }
}

export default connect(mapStateToProps)(Tweet)