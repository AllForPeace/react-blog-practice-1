import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const [name, setName] = useState('mario');

    useEffect(() => setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data);
            setIsPending(false);
        })
    }, 1000), []); /* setTimeout only for display of loading screen visible to the human eye */
    return (
        <div className="home">
            { isPending && <div>Loading ... </div>}
           {blogs && <BlogList blogs= {blogs} title="All Blogs!"/>}
           <button onClick={ () => setName ('luigi') }>Change Name</button>
           <p> { name } </p>
        </div>
    );
}

export default Home