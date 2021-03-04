import React from 'react'
import Link from 'next/link';

import styles from '../../styles/Home.module.css'
import animation from '../../styles/Animation.module.css'
import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const RightSideBar = () => {
    return (
        <>
            <div className="d-none d-lg-block">
                <div className={styles.rightsidebar}>
                    <Fade left>
                        <div className={styles.rightsidecontent}>
                            <div className={animation.vertical_scrolleffect} >
                                <h1>Look at our past work!!! <br />
                                    <div className={styles.navlink_rightside}>
                                        <Link href='/work'> Click here </Link>
                                        <FontAwesomeIcon icon={faLocationArrow} style={{ color: 'black' }} />
                                    </div>
                                </h1>
                                <br />

                                <h1>Want To Know About Us ? <br />
                                    <div className={styles.navlink_rightside}>
                                        <Link href='/about'> Click here </Link>
                                        <FontAwesomeIcon icon={faLocationArrow} style={{ color: 'black' }} /> </div>
                                </h1>
                                <br />

                                <h1>Hey There We Are Passionate Developers!!</h1>

                                <h1> Feel Free to ContactUs !! <br />
                                    <div className={styles.navlink_rightside}>
                                        <Link href='/contactus'> Click here </Link>
                                        <FontAwesomeIcon icon={faLocationArrow} style={{ color: 'black' }} /> </div>
                                </h1>
                                <br />

                            </div>
                        </div>
                    </Fade>
                </div>
                <Fade top>
                    <div className={styles.rightsidefooter}>
                        <h4>hi@</h4>
                        <h4>harshit.dev</h4>
                    </div>
                </Fade>
                <Fade right>
                    <div className={styles.rightsidelinks}>
                        <a href='/' ><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href='/' ><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='/' ><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href='/' ><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </Fade>
            </div>
        </>
    )
}

export default RightSideBar
