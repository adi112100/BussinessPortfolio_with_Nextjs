import React from 'react'
import styles from '../../styles/About.module.css'

import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const Aboutustag = () => {

    const animstyles = {
        fadeInUp: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        }
    }
    const mg = "The true secret for our  success are the people  behind the screen. And with it, our culture !!"
    return (
        <div className={styles.aboutustag}>
            <StyleRoot>
                <div className={styles.tag} style={animstyles.fadeInUp}>
                    {mg}
                </div>
            </StyleRoot>

        </div>
    )
}

export default Aboutustag
