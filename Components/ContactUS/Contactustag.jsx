import React from 'react'
import styles from '../../styles/Contact.module.css'

import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const Contactustag = () => {

    const animstyles = {
        fadeInUp: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        }
    }
    const mg = "We are home of creatives, strategists and digital illusionists."
    return (
        <div className={styles.contactustag}>
            <StyleRoot>
                <div className={styles.tag} style={animstyles.fadeInUp}>
                    {mg}
                </div>
            </StyleRoot>

        </div>
    )
}

export default Contactustag
