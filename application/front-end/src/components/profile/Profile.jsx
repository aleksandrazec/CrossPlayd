import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { UserContext } from '../../Context'
import userapi from '../../services/userapi'

function Profile(props) {
    const user = useContext(UserContext)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({
        user_id: 0,
        username: '',
        name: '',
        bio: '',
        email: '',
        password: '',
        game1: 0,
        game2: 0,
        game3: 0
    })

    useEffect(() => {
        if (user.role === 'User') {
            const getUserInfo = async () => {
                try {
                    userapi.get(`/supabase/users/${user.user_id}`)
                        .then((result) => {
                            setUserInfo(result.data)
                        })
                        .catch(err => console.error('api error: ', err));
                } catch (error) {
                    console.error('error: ', error)
                }
            }
            getUserInfo()
        } 
        if (user.role==='Guest'){
            navigate(`/login`)
        }
    }, [user, navigate])

    const logout = async () => {
        try {
            userapi.post(`/supabase/users/logout`)
                .then((result) => {
                    console.log(result.data);
                    setUser({
                        role: 'Guest',
                        user_id: -1
                    })
                    navigate(`/`)
                })
                .catch(err => console.error('api error: ', err));
        } catch (error) {
            console.error('error: ', error)
        }
    }

    const edit = async () => {
        try {
            navigate(`/editprofile`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Your profile</h1>
            <h3>{userInfo.username}</h3>
            <p>Email: {userInfo.email}</p>
            <p>{userInfo.bio}</p>
            <div className="button-div">
                <button className="buttons-list" onClick={() => edit()}>Edit profile</button><br />
                <button className="buttons-list" onClick={() => logout()}>Logout</button><br />
            </div>
        </div>
    )
}

export default Profile