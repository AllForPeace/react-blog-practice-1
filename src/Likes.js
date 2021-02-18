import { useState } from 'react'

const Likes = ({ likes, id }) => {
    const [clicked, setClicked] = useState(false);
    let classes = "addLikeButton" + (clicked ? " clicked" : "");
    let myBlogIndex, allBlogs;

    const addLike = function(id) {
        setClicked(true);
        fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => {
            allBlogs = data;
            data.forEach((el, index) => {
                el.id === id ? (myBlogIndex = index) : el = el ;
            });
            allBlogs[myBlogIndex].likes ++;
            console.log(allBlogs[myBlogIndex]);
        })
        .then(() => {
            fetch('http://localhost:8000/blogs', { allBlogs })
        })
        .catch(err => console.log(err))
    }
    console.log(likes, id, classes);
    return (
        <span className="likes">Liked by: { likes } <button className={classes}
        onClick={() => addLike(id)}>Like{clicked?'d':''}</button></span>
    );
}

export default Likes;