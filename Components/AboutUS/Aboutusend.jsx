import React from 'react'
import Link from 'next/link'

import Fade from 'react-reveal/Fade';

import styles from '../../styles/About.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Aboutusend = () => {
    return (
        <div className={styles.aboutusend}>
            <Fade top>
                <div className={styles.footeralign} style={{ cursor: 'pointer' }}>
                    <div className={styles.linkgroup}>
                        <Link href='/'><p className={styles.navlink}>Home Page</p></Link>
                        <a className={styles.sociallink} href='/'><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className={styles.sociallink} href='/'><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className={styles.sociallink} href='/'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className={styles.sociallink} href='/'><FontAwesomeIcon icon={faTwitter} /></a>
                        <Link href='/work'><p className={styles.navlink}>Our Work</p></Link>
                    </div>
                    <div className={styles.contactinfo}>
                        <div className="p"><FontAwesomeIcon icon={faWhatsapp} /> 1234567890</div>
                        <div className="p"><FontAwesomeIcon icon={faEnvelope} /> xyz@gmail.com</div>
                    </div>

                </div>
            </Fade>
        </div>
    )
}

export default Aboutusend
