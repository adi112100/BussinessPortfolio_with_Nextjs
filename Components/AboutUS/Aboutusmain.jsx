import React from 'react'

import styles from '../../styles/About.module.css'

import { fadeInUp, fadeInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import AboutusCarousel from './AboutusCarousel';
import AboutusCard from './AboutusCard';
import AboutusProfile from './AboutusProfile';


const Aboutusmain = () => {

    const animstyles = {
        fadeInUp: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        },
        fadeInLeft: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
        }
    }

    return (
        <StyleRoot>
            <div className={styles.aboutustitle} style={animstyles.fadeInLeft}>About Us</div>
            <div className={styles.aboutusmain} style={animstyles.fadeInUp}>
                <img src='/Media/aboutus1.jpg' />


                <div className={`container ${styles.aboutusmid}`}>
                    <div className="row" >
                        <div className="col-12 col-md-6 d-none d-md-block">
                            <img src='/Media/aboutus2.svg' />
                        </div>
                        <div className="col-12 col-md-6 align-middle shadow " style={{textAlign:'left', padding:'15px', borderRadius:'50px'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus recusandae dolores nulla! Magni quae consequatur,
                            tenetur, odio voluptas nostrum autem reprehenderit ad delectus dolorem consectetur! Quia similique cumque maiores!
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div className="row" >
                        <div className="col-12 col-md-6 align-middle shadow " style={{textAlign:'left', padding:'15px', borderRadius:'50px'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus recusandae dolores nulla! Magni quae consequatur,
                            tenetur, odio voluptas nostrum autem reprehenderit ad delectus dolorem consectetur! Quia similique cumque maiores!
                        </div>
                        <div className="col-12 col-md-6 d-none d-md-block">
                            <img src='/Media/aboutus3.svg' />
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div className="row" >
                        <h1 style={{textAlign:'center', color:'#FF9600'}}>We think and speak javascript, python or any language you really need. </h1>
                        <div className={`col-12 ${styles.iconalign}`}>
                        <i className="fab fa-python"></i>
                        <i className="fab fa-node"></i>
                        <i className="fab fa-react"></i>
                        <i className="fab fa-aws"></i>
                        <i className="fab fa-js"></i>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div className="row">
                        <AboutusCarousel />
                    </div>
                    <br/><br/><br/>
                    <div className="row">
                        <div className={styles.cardalign}>
                            <AboutusCard title='UI/UX design'
                                body= 'Don’t rely on imagination only. We can picture your product before it comes to life.'
                                path='Media/card1.svg'/>
                             <AboutusCard title='Server Deployment and DevOps'
                                body= 'Don’t rely on imagination only. We can picture your product before it comes to life.'
                                path='Media/card2.svg'/>
                             <AboutusCard title='Software Engineering'
                                body= 'Don’t rely on imagination only. We can picture your product before it comes to life.'
                                path='Media/card3.svg'/>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div className="row">
                    <h1 style={{textAlign:'center', color:'#FF9600'}}>Our Team</h1>
                    
                    <div className={styles.profilealign} >
                    <AboutusProfile
                        name='Mr X'
                        title='CEO and Co-Founder'
                        body='ceo of xyz company.'
                        path='Media/profile1.jpg'/>
                    <AboutusProfile
                        name='Mr X'
                        title='CEO and Co-Founder'
                        body='ceo of xyz company.'
                        path='Media/profile1.jpg'/>
                    <AboutusProfile
                        name='Mr X'
                        title='CEO and Co-Founder'
                        body='ceo of xyz company.'
                        path='Media/profile1.jpg'/>
                    <AboutusProfile
                        name='Mr X'
                        title='CEO and Co-Founder'
                        body='ceo of xyz company.'
                        path='Media/profile1.jpg'/>
                    </div>
                    
                    </div>

                </div>
            </div>

        </StyleRoot>
    )
}

export default Aboutusmain