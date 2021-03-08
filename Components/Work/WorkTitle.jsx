import React from 'react'
import Link from 'next/link'

import styles from '../../styles/Work.module.css'
import animation from '../../styles/Animation.module.css'

const WorkTitle = () => {
    const msg = "<Hi Welcome to My Page!!>"
    return (
        <div className={styles.title}>
            <Link href='/'><h1 style={{cursor:'pointer'}}>Harshit Sahu</h1></Link>
            <div className={animation.typewriter_long}>
                {msg}
            </div>
            
            
        </div>
    )
}

export default WorkTitle
