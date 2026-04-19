import { useState } from 'react'
import { useNavigate } from 'react-router'
import gamesapi from '../../services/gamesapi'

function GameCard(props) {

    const navigate = useNavigate()
    const [coverImage, setCoverImage] = useState()

    const {
        id,
        cover,
        name,
        rating,
    } = props

    
    // useEffect(() => {
    //     const getCoverImage = async () => {
    //         try {
    //             const { data } = await gamesapi.post('/covers/',
    //                 {body: `fields url; where id=${cover}`},
    //                 { filter: false, sort: false });
    //             setCoverImage(data);
    //             console.log(data)
    //         } catch (err) {
    //             console.error(err.response?.data?.error || err.message);
    //         }
    //     }
    //     getCoverImage()
    // }, [])

    const goToGame=async()=>{
        try {
            navigate(`/gamepage/${id}`)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            <div>
                {
                    coverImage ?
                    <img src={coverImage} onClick={()=>goToGame()}></img>
                    :
                    <p></p>
                }
            </div>
        </div>
    )

}

export default GameCard