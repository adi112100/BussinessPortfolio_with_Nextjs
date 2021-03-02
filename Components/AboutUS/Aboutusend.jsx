import React from 'react'
import Link from 'next/link'

import Fade from 'react-reveal/Fade';

import styles from '../../styles/About.module.css'

const Aboutusend = () => {
    return (
        <div className={styles.aboutusend}>
            <Fade top>
                <div className={styles.footeralign}>
                    <Link href='/'><p className={styles.navlink}>Home Page</p></Link>
                    <Link href='/contactus'><p className={styles.navlink}>Contact us</p></Link>
                </div>
            </Fade>

        </div>
    )
}

export default Aboutusend
