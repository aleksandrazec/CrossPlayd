import './style.css';
import GenreTag from "./GenreTag"

function TagsArray(props) {
    const { data = [] } = props;

    return(
        <div className="tag-array">
            {
                data ? 
                data.map(genre => <GenreTag id={genre} key={genre}/>)
                :
                <p></p>
            }
        </div>
    );
}
export default TagsArray;