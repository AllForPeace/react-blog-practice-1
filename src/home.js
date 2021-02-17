import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Hello world', body: 'lorem ipsum ...', author: 'mario', id: 1},
        { title: 'My name is yoshi', body: 'lorem ipsum ...', author: 'yoshi', id: 2},
        { title: 'Killin the web with tutorials', body: 'lorem ipsum ...', author: 'netninja', id: 3}
    ]);

    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    };

    const [name, setName] = useState('mario');

    useEffect(() => {
        console.log("Use effect ran");
        console.log(name);
    }, [name]);

    return (
        <div className="home">
           <BlogList blogs= {blogs} title="All Blogs!" handleDelete={handleDelete}/>
           <button onClick={ () => setName ('luigi') }>Change Name</button>
            <p> { name } </p>
        </div>
    );
}

export default Home