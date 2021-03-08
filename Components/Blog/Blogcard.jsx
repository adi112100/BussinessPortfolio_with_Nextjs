import React from 'react'



import styles from '../../styles/Blog.module.css'
// import { Markup } from 'react-render-markup';

const Blogcard = ({ data }) => {
    console.log(data)
    return (
        
            <div className={`card shadow-lg ${styles.blogcard}`} style={{ borderRadius: '50px', margin: '20px 0px 20px 0px' }}>
                <div className="card-body">
                    <h1 className="card-title">{data.title}</h1>
                    <div className="card-text">{data.body}</div>
                    {/* <Markup markup={data.body} /> */}
                    <p style={{ color: '#392f94', marginTop: '50px' }}>posted on - {data.year}</p>
                </div>
            </div>
       
    )
}

export default Blogcard
