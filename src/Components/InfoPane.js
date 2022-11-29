import "./css/InfoPane.css";
import { useParams, Link } from "react-router-dom";

export default function InfoPane({posts, setPosts, validLogin}) {

    const wikiKey = useParams().wikiTitle;
    const wiki = posts.find(post => post.title === wikiKey);
    let image, title, text;
    if (wiki == undefined) {
        image = "";
        title = "";
        text = "";
    } else {
        image = wiki.img;
        title = wiki.title;
        text = wiki.text;
    }

    const updateInfo = e => {
        e.preventDefault();
        setPosts(posts.filter(post => post.title !== wikiKey));
        const updated = {title: e.target.title.value, img: e.target.url.value, text: e.target.text.value};
        setPosts( prev => [...prev, updated]);
        console.log(posts);
    }

    return (
        <form onSubmit={updateInfo}>
            <img src={image}></img>
            <input type="text" name="url" className="short" defaultValue={image} />
            <input type="text" name="title" className="short" defaultValue={title} />
            <input type="textarea" name="text" className="long" defaultValue={text} />
            {validLogin ? <button type="submit">Publish</button> : <></>}
            <Link to="/"><button type="button">Go back</button></Link>
        </form>
    )
}