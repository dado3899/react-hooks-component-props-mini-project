// a <main> element with the following components inside:
// an array of Article components (one component for each of the posts passed down as props to ArticleList)
import Article from "./Article"

// make sure to assign a unique key attribute to each Article
function ArticleList({posts}){
    const postComponents = posts.map((post)=>{
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    })
    return(
        <main>
            {postComponents}
        </main>
    )
}

export default ArticleList