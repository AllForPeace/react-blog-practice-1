import Likes from './Likes'

const BlogList = ({blogs, title}) => {
    return (
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map((blog) => (
                <div className="preview-content" key = { blog.id }>
                    <h2> {blog.title} </h2>
                    <p> Written by: {blog.author} <Likes likes={blog.likes} id={ blog.id }/></p>
                </div>
            ))}
        </div>
    );
}

export default BlogList