import { useState } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Hello world', body: 'lorem ipsum ...', author: 'mario', id: 1},
        { title: 'My name is yoshi', body: 'lorem ipsum ...', author: 'yoshi', id: 2},
        { title: 'Killin the web with tutorials', body: 'lorem ipsum ...', author: 'netninja', id: 3}
    ]);

    return (
        <div className="home">
           <BlogList blogs= {blogs} title="All Blogs"/>
        </div>
    );
}

export default Home