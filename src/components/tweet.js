import React, { Component } from 'react'
import { formatTweet } from '../utils/helpers'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faReply } from '@fortawesome/free-solid-svg-icons'

class Tweet extends Component {
    render() {
        var time = this.props.tweet.timestamp
        // console.log(this.props.tweet.replyingTo)
        const { tweet } = this.props
        if (tweet === null ) {
            return <p>This is empty tweet</p>
        }
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8} style={{ border: 'solid 2px #D8D8D8', padding: '10px', borderRadius: '2px' }}>
                            <Row>
                                <Col sm={2} style={{textAlign:'center'}}>
                                    <img src={tweet.avatar} alt={tweet.name} style={{ width: '60px', borderRadius: '50%', marginTop: '10px', marginLeft:'auto' }} />
                                </Col>
                                <Col sm={10}>
                                    <div style={{ fontWeight: '700' }}>
                                        {tweet.name}
                                    </div>
                                    <div style={{ fontSize: '13px', opacity: '.8', marginBottom: '10px' }}>
                                        {new Date(time).toLocaleTimeString("en-US")} ||            {new Date(time).toLocaleDateString("en-US")}<br/>
                                        {`replying to ${tweet.parent ? tweet.parent.author : null}`}
                                    </div>
                                    <div style={{marginRight:'70px'}}>
                                        {tweet.text}
                                    </div>
                                    <div style={{ marginTop: '20px', fontSize: '15px'}}>
                                        <span style={{paddingRight: '30px'}}>
                                            {tweet.replies}
                                            <FontAwesomeIcon icon={faReply} style={{marginLeft: '10px', color:tweet.replies? '#00008B' : 'black' }} />
                                        </span>
                                        <span>
                                            {tweet.likes}
                                            <FontAwesomeIcon icon={faHeart} style={{marginLeft: '10px', color: tweet.likes? 'red' : 'black'}} />
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
    let parentTweet = tweet ? tweets[tweet.replyingTo] : null

    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
    }
}

export default connect(mapStateToProps)(Tweet)