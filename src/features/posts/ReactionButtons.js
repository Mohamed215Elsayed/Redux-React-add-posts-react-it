import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
};

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();
    const reactionButtons =  Object.entries(reactionEmoji).map(([count, emoji]) => {
        return (
            <button
            key={count}
            type="button"
            className="reactionButton"
            onClick={() =>
                dispatch(reactionAdded({ postId: post.id, reaction: count }))
            }
            >
            {emoji} {post.reactions[count]}
            </button>
        )
    });
  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButtons;