import React from 'react'

import styles from '../../styles/Work.module.css'

import Fade from 'react-reveal/Fade';


const WorkHead = () => {
    return (
        <div className={styles.workhead}>

            <video autoPlay muted className={styles.workvideo}>
                <source src='/Media/workvideo.mp4' type="video/mp4" />
            </video>

            <div className="d-none d-md-block">
                <div className={styles.workheadtitle}>
                    <Fade right>
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
            </div >
        </div >
    )
}

export default WorkHead
