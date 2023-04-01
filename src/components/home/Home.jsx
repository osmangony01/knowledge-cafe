import React, { useEffect, useState } from 'react';

import './Home.css';
import Header from '../header/Header';
import Blog from '../blog/Blog';
import SideBar from '../sidebar/SideBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QAnswer from '../QA/QAnswer';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [spentTime, setSpentTime] = useState(0);
    const [selectedBlogs, setSelectedBlogs] = useState([]);

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
    const addedBlogToCart = (newBlog) =>{
        let newBlogs = [];
        const exist = selectedBlogs.find(blog => blog.id === newBlog.id);
        if(!exist){
            newBlogs = [...selectedBlogs, newBlog];
            setSelectedBlogs(newBlogs);
        }
        else{
            toast.warn("You Have Already Bookmarked This Blog");
        }
        console.log(exist);
        console.log(newBlog);
        console.log(newBlogs);
    }
    console.log(spentTime)
    console.log('added length: ',selectedBlogs.length)
    return (
        <div className="blog-container">
            <Header />
            <hr />
            <div className='row'>
                <div className='col-sm-12 col-md-8'>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog} addSpentTime={addSpentTime} addedBlogToCart={addedBlogToCart}/>)
                    }
                </div>
                <SideBar spentTime={spentTime} selectedBlogs={selectedBlogs}/>
                <ToastContainer />
            </div>
            <QAnswer />
        </div>

       
    );
};

export default Home;