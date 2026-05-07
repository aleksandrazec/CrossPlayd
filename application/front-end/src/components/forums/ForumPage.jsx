import { useParams, useNavigate } from 'react-router'
import { useState, useEffect, useContext } from 'react'
import userapi from "../../services/userapi";
import Comment from "./Comment";
import { UserContext } from '../../Context';

function ForumPage(props) {
    const { id } = useParams()
    const navigate = useNavigate()

    const [info, setInfo] = useState({
        id: undefined,
        date: undefined,
        text: undefined,
        user_id: undefined,
        title: undefined
    })

    const [comments, setComments] = useState()
    const [userInfo, SetUserInfo] = useState()
    const [results, SetResults] = useState(false)
    const user = useContext(UserContext)
    const [createComment, SetCreateComment] = useState(false)
    const [prompt, setPrompt] = useState(' ');
    const [commentText, setCommentText] = useState('');
    const [warning, setWarning] = useState('Please log in to post comments');
    const [formattedDate, SetFormattedDate] = useState('')
    const buttonHandler = () => {
        SetCreateComment(current => !current)
    }

    useEffect(() => {
        const getInfo = () => {
            try {
                console.log("ID " + id);
                userapi.get(`/community/forums/${id}`)
                    .then(result => {
                        setInfo(result.data.data)
                        SetResults(true)
                        console.log(result.data);
                    })
                    .catch(err => console.error(err))
            } catch (error) {
                console.error(error)
            }
        }

        const getComments = () => {
            try {
                userapi.get(`/community/forums/comments/${id}`)
                    .then(result => {
                        setComments(result.data.data)
                    })
                    .catch(err => console.error(err))
            } catch (error) {
                console.error(error)
            }
        }

        getComments();
        getInfo();
        setPrompt('');
    }, [id, prompt])

    useEffect(() => {
        if (results) {
            const getUser = () => {
                try {
                    userapi.get(`/supabase/users/${info.user_id}`)
                        .then(result => {
                            SetUserInfo(result.data.username)
                            console.log("User_data " + result.data);
                        })
                        .catch(err => console.error(err))
                } catch (error) {
                    console.error(error)
                }
            }
            getUser()
        }
    }, [results])

    useEffect(() => {
    if (info.date) {
        SetFormattedDate(new Intl.DateTimeFormat("en-GB").format(new Date(info.date)));
    }
    }, [info.date]);

    const postComment = async () => {
        try {
            userapi.post(`/community/forum/comment/add/`, { comment_text:`${commentText}`, user_id:`${user.user_id}`, forum_id:`${id}` })
                .then(result => {
                    try {
                        setPrompt('Succesfully added comment');
                        SetCreateComment(false);
                    } catch (error) {
                        console.error(error)
                    }
                })
                .catch(err => setPrompt(`Couldn't add comment`))
        } catch (error) {
            console.error(error)
            setPrompt(`Couldn't add comment`)
        }
    }

    return (
        <div>
            {
                info ?
                    <div>
                        <div>
                            <h1>{info.title}</h1>
                        </div>
                        <p>{info.text}</p>
                        <h5>Posted on {formattedDate} by User: {userInfo}</h5>
                    </div>
                    :
                    <></>
            }

            {
                user.role != 'User' ?
                    <p>{warning}</p> :
                    <div>
                        <button onClick={buttonHandler}>Add Comment</button>  <br />
                        <p>{prompt}</p>
                    </div>
                    
            }
            {
                createComment ?
                    <div>
                        <textarea id='text' rows="5" cols="80" value={commentText} onChange={(event) => setCommentText(event.target.value)} required></textarea><br />
                        <button onClick={() => postComment()}>Post</button>
                    </div>
                    : <></>
            }
            <div>
                {
                    comments && comments.length > 0 ?
                        <div>
                            <h2>Comments: </h2>
                            {comments.map(com => <Comment key={com.comment_id} comment_id={com.comment_id} forum_id={com.forum_id} comment_text={com.comment_text} date={com.date} user_id={com.user_id} />)}
                        </div>
                        :
                        <h1>No comments yet.</h1>
                }
            </div>
        </div>
    )
}

export default ForumPage