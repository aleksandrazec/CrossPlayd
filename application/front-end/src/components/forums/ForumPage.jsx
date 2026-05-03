import { useParams, useNavigate } from 'react-router'
import { useState, useEffect, useContext } from 'react'
import userapi from "../../services/userapi";
import Comment from "./Comment";

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
    const [user, SetUser] = useState();
    const [results, SetResults] = useState(false);

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
    }, [id])

    useEffect(() => {
        if (results) {
            const getUser = () => {
                try {
                    userapi.get(`/supabase/users/${info.user_id}`)
                        .then(result => {
                            SetUser(result.data.username)
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

    return (
        <div>
            {
                info ?
                    <div>
                        <div>
                            <h1>{info.title}</h1>
                        </div>
                        <p>{info.text}</p>
                        <h5>Posted on {info.date} by User: {user}</h5>
                    </div>
                    :
                    <></>
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