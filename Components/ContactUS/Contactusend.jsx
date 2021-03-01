import React from 'react'
import Link from 'next/link'

import styles from '../../styles/Contact.module.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Contactusend = () => {
    return (

        <div className={styles.contactusend}>
            <div className={styles.footeralign} style={{cursor:'pointer'}}>
                <Link href='/about'><p className={styles.navlink}>About Us</p></Link>
                {/* <Link href='/'><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link href='/'><FontAwesomeIcon icon={faLinkedin} /></Link>
                <Link href='/'><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link href='/'><FontAwesomeIcon icon={faTwitter} /></Link> */}
                <Link href='/work'><p className={styles.navlink}>Our Work</p></Link>
            </div>

        </div>

    )
}

export default Contactusend
