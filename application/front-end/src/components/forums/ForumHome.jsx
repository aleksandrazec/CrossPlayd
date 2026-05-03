import { useState, useEffect } from 'react'
import ForumCard from './ForumCard'
import userapi from "../../services/userapi";

function ForumsHome(props) {
    const [forums, setForums] = useState()

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
    }, [])


    return (
        <div>
            <h1>Forums</h1>
            {
                forums ?
                forums.map(forum=>
                <ForumCard id={forum.forum_id} key={forum.forum_id} date={forum.date} text={forum.text} user_id={forum.user_id} title={forum.title}/>)
                :
                <></>
            }
        </div>
    )
}

export default ForumsHome