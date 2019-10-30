import { combineReducers } from 'redux'
import users from './userReducer'
import tweets from './tweetsReducer'
import authedUser from './authedUserReducer'

let reducers = combineReducers({ users, tweets, authedUser })

export default reducers
