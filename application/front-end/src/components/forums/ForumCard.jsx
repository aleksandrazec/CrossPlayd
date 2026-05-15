import { useNavigate} from 'react-router'
import { useState, useEffect } from 'react'
import userapi from "../../services/userapi";

function ForumCard(props) {

    const navigate = useNavigate()

    const {
        id,
        date,
        text,
        user_id,
        title,
    } = props

    const [user, SetUser] = useState();
    const formattedDate = new Intl.DateTimeFormat("en-GB").format(new Date(date));

    const goToForum=async()=>{
        try {
            navigate(`/community/${id}`)
        } catch (error) {
            console.error(error)
        }
    }

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
        <div className='forum-card' onClick={()=>goToForum()}>  
            <div>
                <h2>{title}</h2>
            </div>
            <p>{text}</p>
            <p>Posted on {formattedDate} by {user}</p>
        </div>
    )

}

export default ForumCard