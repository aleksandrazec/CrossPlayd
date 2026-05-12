import { useState, useContext, useEffect } from 'react'
import userapi from '../../services/userapi'
import { useNavigate } from 'react-router'
import { UserContext } from '../../Context'

function LogIn(props) {
    const user = useContext(UserContext)
    const { setUser } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [text, setText] = useState('')

    const goToRegister = async () => {
        try {
            navigate(`/register`)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (user.role !== 'Guest') {
            navigate(`/profile`)
        }
        console.log(user.role)
    }, [user, navigate])

    const logIn = async () => {
        if (username && password) {
            try {
                userapi.post(`/supabase/users/login`, { username: username, password: password })
                    .then(result => {
                        setUser({
                            role: result.data.role,
                            user_id: result.data.user_id
                        })
                        console.log( result.data.role)
                        if (user.role !== 'Guest') {
                            navigate(`/profile`)
                        } else {
                            setText(`Something went wrong`)
                        }

                    })
                    .catch(err => console.error(err))
            } catch (error) {
                console.error(error)
            }
        } else {
            setText('Missing a field')
        }
    }
    return (
        <div>
            <div>
                <p>Username:</p>
                <input type="text" id="username" name="username" onChange={({ target: { value: input } }) => setUsername(input)} value={username} /><br />
                <p>Password:</p>
                <input type="password" id="password" name="password" onChange={({ target: { value: input } }) => setPassword(input)} value={password} /><br />
                <button className="buttons-list" onClick={() => logIn()}>Log In</button>
                <br />
                {text}
                <p>Don't have an account?</p>
                <button className="buttons-list" onClick={() => goToRegister()}>Register</button>
            </div>
        </div>
    )
}

export default LogIn