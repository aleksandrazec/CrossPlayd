import userapi from "../../services/userapi";
import "./style.css";
import { useEffect, useState } from "react";

//data base val: review_id, date, user_id, game_id, review_text

function ReviewBox(props) {

    const {
        review_id,
        date,
        user_id,
        review_text,
    } = props

    const formattedDate = date ? new Intl.DateTimeFormat("en-GB").format(new Date(date)) : "Unknown date";
    const [username, setUsername] = useState('');
    const [reviews, setReviews] = useState();
    const [reviewText, setReviewText] = useState('');
    const [areReviewsHidden, setAreReviewsHidden] = useState(false);
    const [createReply, setCreateReply] = useState(false);

    const buttonHandlerAdd = () => {
        setCreateReply(current => !current);
    };

    const buttonHandlerHide = () => {
        setAreReviewsHidden(current => !current);
    };

    useEffect(() => {
        const getUser = () => {
            try {
                userapi.get(`/supabase/users/${user_id}`)
                    .then(result => {
                        setUsername(result.data.username);
                        console.log("HELLO MY USER is:", result.data);
                    })
                    .catch(err => console.error(err));
            } catch (err) {
                console.error(err);
            }
        };

        const getReviews = () => {
            try {
                userapi.get(`/community/gamepage/reviews/${review_id}`)
                    .then(result => {
                        console.log(result.data.data);
                        setReviews(result.data.data);
                    })
                    .catch(err => console.error(err));
            } catch (err) {
                console.error(err);
            }
        };

        getReviews();
        getUser();
        setReviewText('');

    }, [review_id]);

    // const postReview = async () => {
    //     try{
    //         userapi.post(`/community/forum/comment/add`, { review_text: `${review_text}` , user_id: `${user.user_id}`, forum_id: `${forum_id}`, reply_id: `${comment_id}` })
    //         .then(result => {
    //             try{
    //                 setReview("Review added");
    //             }
    //             catch{
                    
    //             }
    //         })
    //         .catch(err => setReview ("Could not add a review"))
    //     }
    //     catch(err){ 
    //         console.error(err)
    //         setReview(`Could not add a review`)
    //     }
    // }

    return (
        <div className="review-box">
            <div className="header-div">
                <h1>Reviews</h1>
                <button>Add a review</button>
            </div>

            <div className="user-review">
                {reviews && !areReviewsHidden
                    ? reviews.map(review => (
                        <div className="review" key={review.comment_id}>
                            <ReviewBox
                                review_id={review.comment_id}
                                review_text={review.review_text}
                                date={review.date}
                                user_id={review.user_id}
                            />
                        </div>
                    ))
                    : null
                }
            </div>
        </div>
    );
}

export default ReviewBox;