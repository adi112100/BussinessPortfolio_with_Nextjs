import React, { useState, useEffect } from 'react';

import styles from '../../styles/Home.module.css'

import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';



const LeftSideBar = () => {

    const animstyles = {
        fadeInUp: {
            animation: 'x 2s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        }
    }

    const [count, setCount] = useState(0);


    useEffect(

        () => {
            setTimeout(() => {
                setCount(1)
            }, 5000)
            
            setTimeout(() => {
                document.getElementById('introvideo').play()
                // document.getElementById('introvideo1').play()
            }, 1500)
        }

        , [])



    return (
        <>
            <div className="d-none d-lg-block">
                <StyleRoot>
                    <div className={styles.desktopvideo} style={animstyles.fadeInUp}>
                        <video autoPlay loop muted >
                            <source src='/Media/home1.mp4' type="video/mp4" />
                        </video>
                        <video id='introvideo' muted className={count && styles.hideprop}>
                            <source src='/Media/home1intro.mp4' type="video/mp4" />
                        </video>
                    </div>
                </StyleRoot>

            </div>
            <div className="d-lg-none">
                <StyleRoot>
                    <div className={styles.mobvideo} style={animstyles.fadeInUp}>
                        {/* <video autoPlay loop muted >
                            <source src='/Media/home1.mp4' type="video/mp4" />
                        </video>
                        <video id='introvideo1' muted className={count && styles.hideprop}>
                            <source src='/Media/home1intro.mp4' type="video/mp4" />
                        </video> */}
                        <video autoPlay muted>
                            <source src='/Media/home1intro.mp4' type="video/mp4" />
                        </video>
                    </div>
                </StyleRoot>
            </div>

        </>

    )
}

export default LeftSideBar
