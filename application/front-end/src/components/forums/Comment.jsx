import { useContext, useState, useEffect } from 'react'
import userapi from "../../services/userapi";
import { UserContext } from '../../Context'

function Comment(props) {
    const {
        comment_id,
        date,
        user_id,
        comment_text,
        forum_id,
    } = props
    
    const [username, SetUsername] = useState();
    const user = useContext(UserContext)
    const [replies, setReplies] = useState()

    useEffect(() => {
        const getUser = () => {
            try {
                userapi.get(`/supabase/users/${user_id}`)
                    .then(result => {
                        SetUsername(result. data.username)
                        console.log("User_data " + result.data);
                    })
                    .catch(err => console.error(err))
            } catch (error) {
                console.error(error)
            }
        }

        const getReplies = () => {
            try {
                console.log(comment_id)
                userapi.get(`/community/forums/comments/replies/${comment_id}`)
                    .then(result => {
                        console.log(result.data.data)
                        setReplies(result.data.data)
                    })
                    .catch(err => console.error(err))
            } catch (error) {
                console.error(error)
            }
        }

        getReplies();

        getUser()
    }, [comment_id])

    return (
        <div>
            <div>
                <h4>{comment_text}</h4>
                <p>Posted on {date} by {username}</p>
            </div>

            <div id='replies'>
                {
                    replies ?
                        replies.map(com => <div className='reply'><Comment key={com.comment_id} comment_id={com.comment_id} forum_id={com.forum_id} comment_text={com.comment_text} date={com.date} user_id={com.user_id}/></div>)
                        :
                        <></>
                }
            </div>
        </div>
    )
}
export default Comment