import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import navbar from './Componets/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import { UserContext } from './context/UserProvider.js'

export default function App(){
    const { token } = UseContext(UserContext)
    return (
        <div className='app'>
            <Navbar />
            <Switch>
                <Route
                exact path='/'
                render={()=> token? <Redirect to='profile' /> : <Auth />}
                />
                <Route
                path='/profile'
                render={() => <Profile />}
                />
                <Route
                path='/public'
                render={() => <Public />}
                />
            </Switch>
        </div>
    )
}