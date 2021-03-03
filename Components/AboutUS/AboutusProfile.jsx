import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const AboutusProfile = ({name, path,title,body}) => {
    return (
        <div>

            <div className="card mb-3 shadow" style={{maxWidth: '540px', borderRadius:'50px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={path} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" style={{fontWeight:'bolder', color:'#d6a100'}}>{title}</h5>
                            <p className="card-text">
                                {name}<br/>
                                {body}
                                </p>
                            <li style={{display:'flex', justifyContent:'start', fontSize:'30px', color:'#343a40', cursor:'pointer'}}>
                                <ul><FontAwesomeIcon icon={faFacebook} /></ul>
                                <ul><FontAwesomeIcon icon={faLinkedin} /></ul>
                                <ul><FontAwesomeIcon icon={faInstagram} /></ul>
                                <ul><FontAwesomeIcon icon={faTwitter} /></ul>
                            </li>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutusProfile

