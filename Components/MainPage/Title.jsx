import React from 'react'
import Link from 'next/link'

import styles from '../../styles/Home.module.css'
import animation from '../../styles/Animation.module.css'

const Title = () => {
    const msg = "<Hi Welcome to My Webpage!!>"
    return (
        <div className={styles.title}>
            <Link href='/'><h1 style={{cursor:'pointer'}}>Harshit Sahu</h1></Link>
            <div className={animation.typewriter}>
                {msg}
            </div>
            
            
        </div>
    )
}

export default Title
