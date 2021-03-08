import React from 'react'

import styles from '../../styles/Blog.module.css'
import { blogdataJSON } from '../../Data/BlogdataJSON.js'
import Blogcard from './Blogcard'

import Fade from 'react-reveal/Fade';

const Blogmain = () => {
    
    const blogView = blogdataJSON.map(
        (blog)=> <Blogcard key={blog.id} data = {blog}/>
    )


    return (
        <Fade bottom>
            <div className="container">
                <div className="row">
                    <div className={`col-12 ${styles.blogmain}`}>
                        {blogView}
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Blogmain
