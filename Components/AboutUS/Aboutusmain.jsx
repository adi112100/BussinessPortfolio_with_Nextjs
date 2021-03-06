import React from 'react'

import styles from '../../styles/About.module.css'
import animation from '../../styles/Animation.module.css'

import { fadeInUp, fadeInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Fade from 'react-reveal/Fade';

import AboutusCarousel from './AboutusCarousel';
import AboutusCard from './AboutusCard';
import AboutusProfile from './AboutusProfile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faNode, faReact, faAws, faJs } from '@fortawesome/free-brands-svg-icons'

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
                <div style={{ overflow: 'hidden', borderRadius: '50px' }}>
                    <img className={animation.imagehover_long} src='/Media/aboutus1.jpg' />
                </div>



                <div className={`container ${styles.aboutusmid}`}>
                    <div className="row" >
                        <Fade left>
                            <div className="col-12 col-md-6 d-none d-md-block">
                                <img src='/Media/aboutus2.svg' className={animation.svgtranslate} />
                            </div>
                        </Fade>
                        <div className="col-12 col-md-6 align-middle shadow " style={{ textAlign: 'left', padding: '15px', borderRadius: '50px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus recusandae dolores nulla! Magni quae consequatur,
                            tenetur, odio voluptas nostrum autem reprehenderit ad delectus dolorem consectetur! Quia similique cumque maiores!
                        </div>
                    </div>
                    <br /><br /><br />
                    <div className="row" >
                        <div className="col-12 col-md-6 align-middle shadow " style={{ textAlign: 'left', padding: '15px', borderRadius: '50px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus recusandae dolores nulla! Magni quae consequatur,
                            tenetur, odio voluptas nostrum autem reprehenderit ad delectus dolorem consectetur! Quia similique cumque maiores!
                        </div>
                        <Fade right>
                            <div className="col-12 col-md-6 d-none d-md-block">
                                <img src='/Media/aboutus3.svg' className={animation.svgtranslate} />
                            </div>
                        </Fade>
                    </div>
                    <div style={{marginTop:'20vh'}}></div>
                    <div className="row" >
                        <h1 style={{ textAlign: 'center', color: '#FF9600' }}>We think and speak javascript, python or any language you really need. </h1>
                        <Fade bottom>
                            <div className="col-12">
                                <div className={styles.iconalign}>
                                    <FontAwesomeIcon icon={faPython} />
                                    <FontAwesomeIcon icon={faNode} />
                                    <FontAwesomeIcon icon={faReact} />
                                    <FontAwesomeIcon icon={faAws} />
                                    <FontAwesomeIcon icon={faJs} />

                                </div>
                            </div>
                        </Fade>
                    </div>
                    <br /><br /><br />
                    <div className="row">
                        <AboutusCarousel />
                    </div>
                    <div style={{marginTop:'150px'}}></div>
                    <div className="row">
                        <div className={styles.cardalign}>
                            <Fade bottom>
                                <AboutusCard title='Server Deployment and DevOps'
                                    body='Don’t rely on imagination only. We can picture your product before it comes to life.'
                                    path='Media/card2.svg' />
                                <AboutusCard title='UI/UX design'
                                    body='Don’t rely on imagination only. We can picture your product before it comes to life.'
                                    path='Media/card1.svg' />
                                <AboutusCard title='Software Engineering'
                                    body='Don’t rely on imagination only. We can picture your product before it comes to life.'
                                    path='Media/card3.svg' />
                            </Fade>
                        </div>
                    </div>
                    <div style={{marginTop:'150px'}}></div>
                    <div className="row">
                        <h1 style={{ textAlign: 'center', color: '#FF9600', fontSize:'60px' }}>Our Team</h1>
                        <Fade>
                            <div className={styles.profilealign} >
                                <AboutusProfile
                                    name='Mr X'
                                    title='CEO and Co-Founder'
                                    body='ceo of xyz company.'
                                    path='Media/profile1.jpg' />
                                <AboutusProfile
                                    name='Mr X'
                                    title='CEO and Co-Founder'
                                    body='ceo of xyz company.'
                                    path='Media/profile1.jpg' />
                                <AboutusProfile
                                    name='Mr X'
                                    title='CEO and Co-Founder'
                                    body='ceo of xyz company.'
                                    path='Media/profile1.jpg' />
                                <AboutusProfile
                                    name='Mr X'
                                    title='CEO and Co-Founder'
                                    body='ceo of xyz company.'
                                    path='Media/profile1.jpg' />
                            </div>
                        </Fade>

                    </div>

                </div>
            </div>

        </StyleRoot>
    )
}

export default Aboutusmain
