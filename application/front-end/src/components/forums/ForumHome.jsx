import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../Context'
import ForumCard from './ForumCard'
import userapi from "../../services/userapi";

function ForumsHome(props) {
    const [forums, setForums] = useState()
    const [createForum, setCreateForum] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const user = useContext(UserContext)

    const buttonHandler = () => {
        setCreateForum(current => !current)
    }

    useEffect(() => {
        const getForums = async () => {
            try {
                const { data } = await userapi.get('/community/allforums');
                setForums(data.data);
                console.log(data.data);
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        }

        getForums();
        setPrompt("")
    }, [prompt])

    const SubmitForum = () => {
        event.preventDefault();
        
        const form = {
            title: title,
            text: text,
            user_id: user.user_id
            // change user_id to dynamic
        };
        try {
            userapi.post(`/community/forum/add`, {form})
            .then(result => {
                    try {
                        setPrompt('Succesfully created forum');
                        setCreateForum(false)
                    } catch (error) {
                        console.error(error)
                    }
                })
                .catch(err => setPrompt(`Couldn't create forum`))
        } catch (error) {
            console.error(error)
            setPrompt(`Couldn't create forum`)
        }
    }


    return (
        <div>
            <h1>Forums</h1>
            {
                user.role != 'User' ?
                <p></p> :
                <div>
                    <button onClick={buttonHandler}>Create Forum</button>  <br />
                </div>
            }
            {
                createForum ?
                    <div>
                        <form onSubmit={() => SubmitForum()} method="POST">
                            <label>Title:</label> <input type='text' id='title' required value={title} onChange={(event) => setTitle(event.target.value)}></input><br /> <br />
                            <textarea id='text' rows="10" cols="80" value={text} onChange={(event) => setText(event.target.value)} required></textarea><br />
                            <button type="submit">Post</button>
                        </form>
                        <p>{prompt}</p>
                    </div>
                    : <></>
            }
            {
                forums ?
                    forums.map(forum =>
                        <ForumCard id={forum.forum_id} key={forum.forum_id} date={forum.date} text={forum.text} user_id={forum.user_id} title={forum.title} />)
                    :
                    <></>
            }
        </div>
    )
}

export default ForumsHome