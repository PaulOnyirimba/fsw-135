import React, { userContext } from 'react'
import UserIssueForm from './UserIssueForm.js'
import UserIssues from './UserIssues.js'
import UserIssue from './UserIssue.js'
import { UserContext} from '../context/UserProvider.js'

export default function Profile(){
    const { user: {username} } = useContext(UserContext)
    return (
        <div className="profile">
            <h1>Welcome @{username}</h1>
            <h3>Add An Issuet</h3>
            <UserIssueForm/>
            <h3>Your Issues</h3>
        </div>
    )
}


