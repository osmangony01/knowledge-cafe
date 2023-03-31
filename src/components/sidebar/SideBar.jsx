import React from 'react';
import './sidebar.css'

const SideBar = (props) => {
    return (
        <div className='col-sm-12 col-md-4'>
            <div className='spent-time'>
                Spent time on read: {props.spentTime} min
            </div>
            <div className='added-blogs'>
                <p>Bookmarked Blogs : 8</p>
                <div className='added-blog'>
                Master Microsoft Power Platform and Become an In-Demand!
                </div>
                <div className='added-blog'>
                Master Microsoft Power Platform and Become an In-Demand!
                </div>
            </div>
        </div>
    );
};

export default SideBar;