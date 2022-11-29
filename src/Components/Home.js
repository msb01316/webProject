import React from 'react';
import Header from './Header';
import ContentPane from './ContentPane';

export default function Home ({posts, setPosts, validLogin, isLoggedIn}) {
    return (
        <>
            <Header validLogin={validLogin} isLoggedIn={isLoggedIn}/>
            <ContentPane posts={posts} setPosts={setPosts} validLogin={validLogin}/>
        </>
    )
}