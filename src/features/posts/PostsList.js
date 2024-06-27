import { useSelector } from "react-redux";
import {selctAllPosts} from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";//npm i date-fns
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    // const posts = useSelector((state)=>state.posts);
    const posts = useSelector(selctAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
//the sorting is done in descending order, meaning the posts with the latest dates will appear first in the orderedPosts array.
    const renderedPosts =  orderedPosts.map((post)=>
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
            <PostAuthor userId={post.userId}/>
            <TimeAgo timestamp={post.date}/>
            <ReactionButtons post={post} />
            </p>
        </article>);
  return (
    <section>
    <h2>Posts</h2>
    {renderedPosts}
</section>
  )
}

export default PostsList;