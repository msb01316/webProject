import { Link } from 'react-router-dom';
import './css/Wikipost.css';

function WikiPost({wiki, deletePost, validLogin}) {

    return (
        <div className='post'>
            { validLogin
            ? <button type="button" 
            className='delbut' 
            onClick={() => deletePost(wiki.title)}>X</button> 
            : <></> }
            <Link to={`/detail/${wiki.title}`}><img src={wiki.img}></img></Link>
            <p>{wiki.title}</p>
        </div>
    )
}

export default WikiPost;