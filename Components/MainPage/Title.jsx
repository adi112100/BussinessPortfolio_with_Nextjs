import React from 'react'
import Link from 'next/link'

import styles from '../../styles/Home.module.css'
import animation from '../../styles/Animation.module.css'

const Title = () => {
    const msg = "<Hi Welcome to RedLight!!>"
    return (
        <div className={styles.title}>
            <Link href='/'><h1 style={{cursor:'pointer'}}>Redlight</h1></Link>
            <div className={animation.typewriter}>
                {msg}
            </div>
            
            
        </div>
    )
}

export default Title
