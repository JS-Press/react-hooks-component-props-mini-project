import React from "react";
import Article from "./Article";




function ArticleList ({posts}){

    const ArticleArr = posts.map((post) => {
       return <Article key = {post.id} title = {post.title} preview = {post.preview} date = {post.date} />
       })
    

    return (
<main>
    {ArticleArr}
</main>
    )
     
 }



export default ArticleList;