import React, { userContext } from 'react'
import { link } from 'react-router-dom'
import { userContext } from '../context/UserProvider.js'

export default function Navbar(){
    const { logout } = useContext(UserContext)
    return (
        <div className="navbar">
            <Link to="/profile">Profile</Link>
            <Link to="/public">Public</Link>
            <button onClick={ logout }>Logout</button>
        </div>
    )
}