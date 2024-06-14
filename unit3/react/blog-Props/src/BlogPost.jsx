import React from 'react';

function BlogPost({ props }) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.subTitle}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
        </div>
    );
}

export default BlogPost;
