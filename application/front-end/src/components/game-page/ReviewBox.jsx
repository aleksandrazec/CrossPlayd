import userapi from "../../services/userapi";
import "./style.css";
import { useEffect, useState } from "react";


function ReviewBox(props) {

    const {
        review_id,
        date,
        user_id,
        review_text,
    } = props

    const formattedDate = date ? new Intl.DateTimeFormat("en-GB").format(new Date(date)) : "Unknown date";

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
        <div className="review-box">
            <div className="user-review">
                <p>{review_text}</p>
                <p>Posted on {formattedDate} by {user}</p>
            </div>
        </div>
    );
}

export default ReviewBox;