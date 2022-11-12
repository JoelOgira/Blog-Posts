import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
    posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody
}) => {

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if(post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])

    return (
        <main className="EditPost container">
            {editTitle && 
                <>
                    <h2>Edit Post</h2>
                    <form className="newFormPost p-4 form-control" onSubmit={e => e.preventDefault()}>
                    <label htmlFor="editTitle" className="text-teal">Title </label>
                    <input 
                        id="editTitle"
                        type="text" 
                        className="form-control mb-4"
                        required
                        value={editTitle}
                        onChange={e => setEditTitle(e.target.value)}
                    />        
                    <label htmlFor="editBody" className="text-teal">Post </label>
                    <textarea 
                        id="editBody"
                        rows="16"
                        className="form-control mb-4" 
                        required
                        value={editBody}
                        onChange={e => setEditBody(e.target.value)}
                    />
                    <button type="submit" onClick={() => handleEdit(post.id)} style={{width: '100%'}} className="btn btn-outline-success text-teal">Edit Post</button>
                    </form>                                                                                                 
                </>
            }
            {!editTitle && 
                <>
                    <h2 className="card-title">No posts are currently available</h2>
                    <p>
                        <Link to="/">Go back to the homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditPost