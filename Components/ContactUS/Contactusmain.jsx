import React from 'react'


import styles from '../../styles/Contact.module.css'
import animation from '../../styles/Animation.module.css'

import { fadeInUp, fadeInLeft, fadeInUpBig } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Contactusform from './Contactusform';



const Contactusmain = () => {

    const animstyles = {
        fadeInUp: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        },
        fadeInUpBig: {
            animation: 'x 2s',
            animationName: Radium.keyframes(fadeInUpBig, 'fadeInUpBig')
        },
        fadeInLeft: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
        }
    }

    return (
        <StyleRoot>
            <div className={styles.contactustitle} style={animstyles.fadeInLeft}>Contact Us</div>

            <div className={styles.contactusmain} style={animstyles.fadeInUp}>
                <div className={styles.contactimage} style={animstyles.fadeInUpBig}>
                    <img src="Media/contact1.jpg" className='shadow-lg' alt="" />
                </div>
                <br /><br /><br />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>For general inquiries, send an e-mail to :</h2>
                            <h5 style={{ color: '#ffa83d' }}>xyz@gmail.com</h5>
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>Address</h2>
                            <h5 style={{ color: '#ffa83d' }}>Nest Collective Downtown Rua da Sota 2A
                            3000-392 Coimbra Portugal</h5>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <div className="row shadow-lg align-items-center" style={{ borderRadius: '50px', padding: '25px', justifyContent:'center'}}>
                    <div className="col-md-5 col-lg-4 d-none d-md-block">
                        <img src='Media/contactsvg.svg' style={{width:'100%'}} />
                    </div>
                    <div className="col-12 col-md-7 col-lg-8">
                        <Contactusform />
                    </div>
                </div>
                <br /><br /><br />
            </div>
        </StyleRoot>
    )
}

export default Contactusmain
