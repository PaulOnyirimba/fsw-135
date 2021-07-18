import React, { userContext } from 'react'
import { link } from 'react-router-dom'
import { userContext } from '../context/UserProvider.js'

export default function Navbar(){
    const { logout } = useContext(UserContext)
    return (
        <div className="navbar">
            { token && <Link to="/profile">Profile</Link> }
            <Link to="/public">Public</Link>
            { token && <button onClick={ logout }>Logout</button>}
        </div>
    )
}