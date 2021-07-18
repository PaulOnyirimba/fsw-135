import AuthForm from "./AuthForm"








const [toggle, setToggle] = useState(false)

const {signup, login, errMsg } = useContext(UserContext)

fundtion handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}

function handlesignup(e){
    e.preventDefault()
    signup(inputs)
}

function handleLogin(e){
    e.preventDefault()
    signup(inputs)
}

return (
    <div className="auth-container">
        <h1>Rock the Vote</h1>
        { !toggle ?
        <>
        <AuthForm
        handleChange={handleChange}
        handleSubmit={handleLogin}
        inputs={inputs}
        btnText="Login"
        errMsg={errMsg}
        />    
    }
    </div>
)