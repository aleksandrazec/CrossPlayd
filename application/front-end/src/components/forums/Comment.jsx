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
    
    const formattedDate = new Intl.DateTimeFormat("en-GB").format(new Date(date));
    const [username, SetUsername] = useState();
    const user = useContext(UserContext)
    const [replies, setReplies] = useState()
    const [createReply, SetCreateReply] = useState(false)
    const [prompt, setPrompt] = useState('');
    const [commentText, setCommentText] = useState('');
    const [warning, setWarning] = useState('');

    const buttonHandler = () => {
        SetCreateReply(current => !current)
    }

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

        getReplies()
        getUser()
        setPrompt('')
    }, [comment_id, prompt])

    const postComment = async () => {
        try {
            userapi.post(`/community/forum/comment/add/`, { comment_text:`${commentText}`, user_id:`${user.user_id}`, forum_id:`${forum_id}`, reply_id:`${comment_id}` })
                .then(result => {
                    try {
                        setPrompt('Succesfully added reply');
                        SetCreateReply(false);
                    } catch (error) {
                        console.error(error)
                    }
                })
                .catch(err => setPrompt(`Couldn't add reply`))
        } catch (error) {
            console.error(error)
            setPrompt(`Couldn't add reply`)
        }
    }

    return (
        <div>
            <div>
                <h4>{comment_text}</h4>
                <p>Posted on {formattedDate} by {username}</p>
            </div>
            {
                user.role != 'User' ?
                    <p>{warning}</p> :
                    <div>
                        <button onClick={buttonHandler}>+</button>  <br />
                        <p>{prompt}</p>
                    </div>
            }
            {
                createReply ?
                    <div>
                        <textarea id='text' rows="5" cols="80" value={commentText} onChange={(event) => setCommentText(event.target.value)} required></textarea><br />
                        <button onClick={() => postComment()}>Post</button>
                    </div>
                    : <></>
            }
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