import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* Have header and pass into it blog name */}
      <Header name={blogData.name} address={"101 place street"} date={"01/10"}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
