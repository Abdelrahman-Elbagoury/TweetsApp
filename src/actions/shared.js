import {getInitialData} from '../utils/api'
import receiveTweets from './tweetsAction'
import receiveUsers from './userAction'
import setAuthedUser from './authedUser'

const AUTHED_ID = "tylermcginnis"

export default function handleInitialDAta() {
    return (dispatch) => {
        return getInitialData().then(({users, tweets}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}