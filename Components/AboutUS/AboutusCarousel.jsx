import React from 'react'
import styles from '../../styles/About.module.css'

const AboutusCarousel = () => {
    return (
        <div className={styles.carousel}>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="1000">
                        <img src="Media/c1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="1000">
                        <img src="Media/c2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="1000">
                        <img src="Media/c3.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutusCarousel
