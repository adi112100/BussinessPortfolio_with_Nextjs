import React from 'react'

const AboutusCard = ({title, body, path}) => {
    
    return (
        
            <div className="card shadow" style={{width:'350px', borderRadius:'50px', margin:'10px 0px 10px 0px'}}>
                <img src={path} style={{width:'100%'}} className="card-img-top shadow" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>

                </div>
            </div>
       
    )
}

export default AboutusCard
