import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import userapi from '../../services/userapi'
import './style.css'

function GenreTag(props) {
    const { id } = props;

    const [genre, setGenre] = useState();
    
    useEffect(() => {
        const getGenre = async () => {
            try {
                const {data} = await userapi.post('/igdb/genre/', {genreID: `${id}`});
                setGenre(data[0].name);
                console.log(data[0].name);
            } catch (err) {
                console.error(err.response?.data?.error || err.message);
            }
        }
        getGenre();
        // console.log(id)
    }, [id])

    return(
        <div>
            {
                genre !== '' ?
                <div className='genre-tag'>
                    <p>{genre}</p>
                </div>
                :
                <p>Loading</p>
            }
        </div>
    );
}
export default GenreTag;