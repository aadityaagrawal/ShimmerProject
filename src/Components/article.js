import React, { useEffect, useState } from "react";
import { ShimmerSectionHeader } from "react-shimmer-effects";

function Article() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsondata = await response.json();
        setArticles(jsondata);
      } catch (error) {
        console.error(error);
      }
    }, 3000);
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      {articles ? (
        articles.map((article) => (
          <div style={{border:"2px solid", padding : "10px" , margin : "5px"}} key={article.id}>
            <h3>{article.title}</h3>
            <div>{article.body}</div>   
          </div>
        ))
      ) : (
        [1,2,3,4,5,6,7].map((e) => { return <div style={{margin:"10px"}}> <ShimmerSectionHeader gap={10} /> </div>}) 
        
      )}
    </div>
  );
}

export default Article;
