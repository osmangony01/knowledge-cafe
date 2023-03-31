import React from 'react';
import './sidebar.css'

const SideBar = (props) => {

    const selectedBlogs = props.selectedBlogs;

    return (
        <div className='col-sm-12 col-md-4'>
            <div className='spent-time'>
                Spent time on read: {props.spentTime} min
            </div>
            <div className='added-blogs'>
                <p>Bookmarked Blogs : {selectedBlogs.length}</p>
                {
                    selectedBlogs.map(blog =>
                        <div className='added-blog'>{blog.title}</div>
                    )
                }
            </div>
        </div>
    );
};

export default SideBar;