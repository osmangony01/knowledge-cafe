import React, { useEffect, useState } from 'react';

import './Home.css';
import Header from '../header/Header';
import Blog from '../blog/Blog';
import SideBar from '../sidebar/SideBar';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    console.log(blogs);

    return (
        <div className="blog-container">
            <Header />
            <hr />
            <div className='row'>
                <div className='col-sm-12 col-md-8'>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog} />)
                    }
                </div>
                <SideBar />
            </div>
        </div>
    );
};

export default Home;