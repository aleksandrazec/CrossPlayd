import { useState, useEffect } from 'react'
import userapi from "../../services/userapi";

function Comment(props) {
    const {
        comment_id,
        date,
        user_id,
        comment_text,
        forum_id,
    } = props
    
    const [user, SetUser] = useState();

    useEffect(() => {
        const getUser = () => {
            try {
                userapi.get(`/supabase/users/${user_id}`)
                    .then(result => {
                        SetUser(result. data.username)
                        console.log("User_data " + result.data);
                    })
                    .catch(err => console.error(err))
            } catch (error) {
                console.error(error)
            }
        }

        getUser()
    }, [])

    return (
        <div>
            <div>
                <h4>{comment_text}</h4>
                <p>Posted on {date} by {user}</p>
            </div>
        </div>
    )
}
export default Comment