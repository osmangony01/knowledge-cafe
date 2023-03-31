import React from 'react';

import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { author, title, images, readTime, types, publishedAt } = props.blog;
    const addSpentTime = props.addSpentTime;

    const addedBlogToCart = props.addedBlogToCart;

    return (
        <div className='blog'>
            <img className='cover-img' src={images.coverImage} alt="img" />
            <div className='d-flex justify-content-between  align-items-center pt-3 '>
                <div className='d-flex align-items-center'>
                    <img className='author-img' src={images.authorImage} alt="img" />
                    <div className='ps-3'>
                        <p className='m-0 pb-2'><strong>{author}</strong></p>
                        <p className='m-0'>{publishedAt}</p>
                    </div>
                </div>
                <div>
                    <p>0{readTime} min read <button className='btn-bookmark' onClick={()=>addedBlogToCart(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button></p>
                </div>
            </div>
            <h3 className='title'>{title}</h3>
            <div>
                {
                    types.map(type => <span className='pe-3'>{type}</span>)
                }
            </div>
           <p className='py-3'><button className='btn-mark' onClick={()=>addSpentTime(readTime)}>Mark as Read</button></p>
            <hr className='pb-3'/>
        </div>
    );
};


export default Blog;