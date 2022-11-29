import WikiPost from "./WikiPost";
import './css/ContentPane.css';
import React from "react";
import { Link } from 'react-router-dom';

function ContentPane({posts, setPosts, validLogin}) {

    //deletes the post whose title is passed in wikiKey
    //called by the button on the individual post
    const delPost = (wikiKey) => {
        if (validLogin)
            setPosts(posts.filter(post => post.title !== wikiKey));
    }

    return (
        <div id="main">
            {posts.map((wiki) => 
                    <WikiPost 
                        wiki={wiki} 
                        key={wiki.title} 
                        deletePost={delPost}
                        validLogin={validLogin}/>
            )}
            {validLogin ? <Link to="/new"><button id="addbut" type="button"></button></Link> : <></> }
        </div>
    )
}

export default ContentPane;