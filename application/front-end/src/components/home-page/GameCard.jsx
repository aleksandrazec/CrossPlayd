import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import userapi from '../../services/userapi'
import './styles.css'

function GameCard(props) {

    const navigate = useNavigate()
    const [coverImage, setCoverImage] = useState()
    const size = '1080p'
    const {
        id,
        cover,
        cover_id,
        name,
        rating,
    } = props


    useEffect(() => {
        const getCoverImage = async () => {
            try {
                // const { data } = await userapi.post('/igdb/cover/',
                //     {coverID: `${cover}`});
                if (cover_id) {
                    setCoverImage(`https://images.igdb.com/igdb/image/upload/t_${size}/${cover_id}.jpg`);
                }
            } catch (err) {
                console.error(err.response?.data?.error || err.message);
            }
        }
        getCoverImage()
    }, [cover])

    const goToGame = async () => {
        try {
            navigate(`/gamepage/${id}`)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            <div className='game-card'>
                {
                    coverImage ?
                        <div >
                            <img className='game-images' src={coverImage} onClick={() => goToGame()}></img>
                        </div>
                        :
                        <p></p>
                }
            </div>
        </div>
    )

}

export default GameCard