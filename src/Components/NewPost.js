import { useParams, useLocation, Link } from "react-router-dom";
import React from "react";
import './css/InfoPane.css';

export default function NewPost ({posts, setPosts}) {

    const addPost = e => {
        e.preventDefault();
        const wiki = {title: e.target.newTitle.value, img: e.target.newUrl.value, text: e.target.newText.value};
        setPosts( prev => [...prev, wiki]);
    }

    return (
        <form onSubmit={addPost}>
            <input type="text" name="newUrl" className="short" placeholder="Image url..." />
            <input type="text" name="newTitle" className="short" placeholder="Wiki title..." />
            <input type="text" name="newText" className="long" placeholder="Wiki text..." />
            <button type="submit">Publish</button>
            <Link to="/"><button type="button">Go back</button></Link>
        </form>
    )
}