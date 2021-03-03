import React from 'react'

import animation from '../../styles/Animation.module.css'
import styles from '../../styles/Card.module.css'

const AboutusCard = ({title, body, path}) => {
    
    return (
        
            <div className={`card shadow ${styles.aboutuscard}`}>
                <img src={path} style={{width:'100%'}} className={`card-img-top shadow ${animation.imagehover}`} alt="..." />
                <br/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>

                </div>
            </div>
       
    )
}

export default AboutusCard
