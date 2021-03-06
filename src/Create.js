import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom' 

function Create(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("New blog added.");
            setIsPending(false);
            history.push('/')
        })
    }
    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author: </label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled className="button-submitting">Submitting...</button> }
            </form>

            <div className="preview-content">
                <h1>Preview</h1>
                <p className='title'>{title}</p>
                <p className='body'>{body}</p>
                <p className='author'>Written by: <strong>{author}</strong></p>
            </div>
        </div>
    );
}

export default Create;