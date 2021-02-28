import React from 'react'

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
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{body}</p>
                            <p className="card-text"><small className="text-muted">{name}</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutusProfile
