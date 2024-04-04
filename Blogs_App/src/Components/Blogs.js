import React, { useContext } from 'react'
import { AppContext } from '../Context/App_Context'
import Spinner from './Spinner';
import './Blogs.css';


const Blogs = () => {
    //consume
    const {posts,loading} = useContext(AppContext);
    console.log("Printing inside blogs component");
    console.log(posts);


  return (
    <div className='BD'>
    {
        loading ? 

        (<Spinner/>) : 

        (   
            posts.length === 0 ? 
            (<div>
                <p>No Post Found</p>
            </div>) : 
            (posts.map( (post) => (
                <div key={post.id}>
                    <p className='title'>{post.title}</p>
                    <p className='ac'>
                        By <span className='author'>{post.author}</span> on <span className='cate'>{post.category} </span>
                    </p>
                    <p className='date'>Posted on {post.date}</p>
                    <p className='content'>{post.content}</p>
                    <div >
                        {post.tags.map( (tag, index) => {
                            return <span className='tags' key={index} >{` #${tag}`}</span>
                        } )}
                    </div>
                </div>
            ) ))
        ) 
    }
      
    </div>
  )
}

export default Blogs;
