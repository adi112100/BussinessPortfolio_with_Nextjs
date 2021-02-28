import React from 'react'
import styles from '../../styles/Home.module.css'
import animation from '../../styles/Animation.module.css'

const Title = () => {
    const msg = "<Hi Welcome to RedLight!!>"
    return (
        <div className={styles.title}>
            <h1>Redlight</h1>
            <div className={animation.typewriter}>
                {msg}
            </div>
            
            
        </div>
    )
}

export default Title
