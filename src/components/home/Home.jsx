import React, { useEffect, useState } from 'react';

import './Home.css';
import Header from '../header/Header';
import Blog from '../blog/Blog';
import SideBar from '../sidebar/SideBar';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [spentTime, setSpentTime] = useState(0);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    console.log(blogs);

    const addSpentTime  = (time) =>{
        let newTime= spentTime + time;
        setSpentTime(newTime);
    }
    console.log(spentTime)
    return (
        <div className="blog-container">
            <Header />
            <hr />
            <div className='row'>
                <div className='col-sm-12 col-md-8'>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog} addSpentTime={addSpentTime}/>)
                    }
                </div>
                <SideBar spentTime={spentTime}/>
            </div>
        </div>
    );
};

export default Home;