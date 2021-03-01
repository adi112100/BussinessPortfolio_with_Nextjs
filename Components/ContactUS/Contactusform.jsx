import React from 'react'

const Contactusform = () => {
    return (
        <div>
            <div className="input-group">
                <span className="input-group-text">First and last name</span>
                <input type="text" aria-label="First name" className="form-control" />
                <input type="text" aria-label="Last name" className="form-control" />
            </div>
            <br/>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <br/>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <br/>
            <button className='btn btn-dark' type='submit'>Send</button>
        </div>
    )
}

export default Contactusform
