import React from 'react';

const BlogPost = ({blog: {title, description, author, authorImg , date} }) => {
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex justify-content-center align-items-center flex-column ">
                <img className="mx-3" src={authorImg} alt="" width="70"/>
                <div className='mt-2'>
                    <h6 className="text-brand">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-justify text-secondary mt-4">{description}</p>
            </div>
            
       </div>
    );
};

export default BlogPost;