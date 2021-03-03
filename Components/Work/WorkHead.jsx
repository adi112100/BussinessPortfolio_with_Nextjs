import React from 'react'

import styles from '../../styles/Work.module.css'

import Fade from 'react-reveal/Fade';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const WorkHead = () => {
    
    const animstyles = {
        fadeInUp: {
            animation: 'x 2s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        }
    }

    return (
        <div className={styles.workhead}>
            <div className="col-12 col-md-6">
                <StyleRoot>
                <video autoPlay muted loop className={styles.workvideo} style={animstyles.fadeInUp}>
                    <source src='/Media/workvideo.mp4' type="video/mp4" />
                </video>
                </StyleRoot>
            </div>
            <div className="col-md-6 d-none d-md-block">

                <div className={styles.workheadtitle}>

                    <Fade left>
                        <h1>
                            We know the pain points<br />
                            on developing digital<br />
                            products.
                        </h1>
                    </Fade>
                    <Fade bottom>
                        <h5 className='d-none d-lg-block'>
                            That’s why we has been the choice <br />
                            for many businesses around the globe.
                        </h5>
                    </Fade>
                </div>

            </div>



        </div >
    )
}

export default WorkHead
