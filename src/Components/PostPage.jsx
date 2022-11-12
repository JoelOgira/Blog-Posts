import { useParams, Link } from "react-router-dom";

const PostPage = ({posts, handleDelete}) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className="PostPage container">
        <div className="card p-4">
          {post && 
            <>
              <h2 className="card-title">{post.title}</h2>
              <p className="card-text" style={{fontSize: '13px'}}>{post.datetime}</p>
              <hr />
              <article className="card-text">{post.body}</article>    
              <Link to={`/edit/${post.id}`}><button className="btn btn-outline-success my-3" style={{width: '100%'}}>Edit Post</button></Link>         
              <button className="btn btn-outline-danger my-3" onClick={() => handleDelete(post.id)}>Delete Post</button>              
            </>
          }
          {!post &&
            <>
              <h2 className="card-title">No posts are currently available</h2>
              <p>
                <Link to="/">Go back to the homepage</Link>
              </p>
            </>
          }
        </div>                
    </main>
  )
}

export default PostPage;