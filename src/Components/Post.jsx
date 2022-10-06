import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="card my-3 p-4">
        <Link to={`/post/${post.id}`}>
            <h2 className="card-title">{post.title}</h2>
            <p className="card-text" style={{fontSize: '13px'}}>{post.datetime}</p>
        </Link>
        <hr />
        <p className="card-text">{
            (post.body).length <= 45 ? post.body
            : `${(post.body).slice(0, 45)}...`
        }</p>
    </div>
  )
}

export default Post;