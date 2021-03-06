import { useParams, useHistory } from 'react-router-dom'
import useFetch from './useFetch'

function ShowBlog(){
    const { id } = useParams();
    const { data: blog , isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const handleDelete = function(){
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        })
        .then(() => history.push('/'))
    }
    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div> { error }</div> }
            { blog && (
                <article>
                    <h2 className="title"> {blog.title} </h2>
                    <div className="body">{blog.body}</div>
                    <p className="author">Written by: <strong>{blog.author}</strong></p>
                    <button onClick={handleDelete}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default ShowBlog;