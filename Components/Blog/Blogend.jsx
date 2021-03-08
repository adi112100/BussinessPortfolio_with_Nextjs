import React from 'react'
import Link from 'next/link'

import Fade from 'react-reveal/Fade';

import styles from '../../styles/Blog.module.css'

const Blogend = () => {
    return (
        <div className={styles.blogend}>
            <Fade top>
                <div className={styles.footeralign}>
                    <Link href='/work'><p className={styles.navlink}>Our Work</p></Link>
                    <Link href='/contactus'><p className={styles.navlink}>Contact us</p></Link>
                </div>
            </Fade>

        </div>
    )
}

export default Blogend
