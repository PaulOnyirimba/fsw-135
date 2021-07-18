import React, { useState } from 'react'
import axios from 'axios'
export const UserContext = React.createContext()

export default function UserProvider(props) {
    const initState = {
     user: JSON.parse(localStorage.getItem('user')) || {}, 
     token: localStorage.getItem('token') || "" 
     errMsg: ''
    }
    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then (res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch (err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
            .then (res =>  {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getUserIssue()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            }) 
            .catch (err => handleAuthErr(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({ user: {}, token: ""})
    }

    function addIssue(newIssue) {
        userAxios.post('/api/issue', newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                todos: [...prevState.todos, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

function getUserIssue() {
    userAxios.get('/api/todo/user')
    .then(res => {
        setUserState(prevState => ({
            ...prevState,
            todos: res.data
        }))
    })
    .catch(err => console.log(err.response.data.errMsg))
}

    return (
        <UserContext.Provider value={ { ...userState, signup, login} }>
            { props.children }
        </UserContext.Provider>
    )
}