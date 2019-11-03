import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
// import { _saveTweet } from '../utils/_DATA.js'
import { connect } from 'react-redux'


class NewTweet extends Component {
    handleNewTweet() {
        console.log(this.props.authedUser.authedUser)
    }
    render() {
        return (
            <div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{marginLeft:'50px'}}>Write new tweet</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="New Tweet" style={{width:'90%', margin:'auto', height:'200px'}} />
                    <Button variant="primary" onClick={()=> this.handleNewTweet()} style={{width:'130px',marginLeft:'50px'}}>Add Tweet</Button>
                </Form.Group>
            </div>
        )
    }
}

function mapStateToProps(authedUser) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewTweet)