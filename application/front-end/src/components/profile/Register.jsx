import { useState, useEffect, useContext } from "react"
import userapi from '../../services/userapi'
import { UserContext } from '../../Context'
import { useNavigate } from 'react-router'

function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const user = useContext(UserContext)
    useEffect(()=>{
        if(user.role!=='Guest'){
            navigate(`/profile`)
        }
    },[navigate, user])
    const register = async () => {
        try {
            userapi.post(`/supabase/users/`, { email: email, password: password, username: username,})
                .then(result => {
                    try {
                        navigate(`/registersuccess`)
                    } catch (error) {
                        console.error(error)
                    }
                })
                .catch(err => console.error(err))
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <p>Email:</p>
            <input type="text" id="email" name="email" onChange={({ target: { value: input } }) => setEmail(input)} value={email} /><br />
            <p>Username:</p>
            <input type="text" id="username" name="username" onChange={({ target: { value: input } }) => setUsername(input)} value={username} /><br />
            <p>Password:</p>
            <input type="password" id="password" name="password" onChange={({ target: { value: input } }) => setPassword(input)} value={password} /><br />
            <button className="buttons-list" onClick={() => register()}>Register</button>
        </div>
    )
}

export default Register