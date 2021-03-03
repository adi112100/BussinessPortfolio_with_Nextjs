import React, {useEffect, useState} from 'react'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
SwiperCore.use([Navigation, Pagination, A11y]);
const AboutusCarousel = () => {
    const [x, setx] = useState(1)
    useEffect(()=> {
        if (window.innerWidth > 800) setx(2)
    }, [])

    return (
        // <div className={styles.carousel}>
        //     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        //         <div className="carousel-inner">
        //             <div className="carousel-item active" data-interval="1000">
        //                 <img src="Media/c1.jpg" className="d-block w-100" alt="..." />
        //             </div>
        //             <div className="carousel-item" data-interval="1000">
        //                 <img src="Media/c2.jpg" className="d-block w-100" alt="..." />
        //             </div>
        //             <div className="carousel-item" data-interval="1000">
        //                 <img src="Media/c3.jpg" className="d-block w-100" alt="..." />
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <Swiper
            spaceBetween={1}
            slidesPerView={x}
            navigation
            pagination={{ clickable: true }}
            
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            
            <SwiperSlide><img src="Media/c1.jpg" className="d-block w-100" alt="..."  style={{borderRadius:0}}/></SwiperSlide>
            <SwiperSlide><img src="Media/c2.jpg" className="d-block w-100" alt="..."  style={{borderRadius:0}}/></SwiperSlide>
            <SwiperSlide> <img src="Media/c3.jpg" className="d-block w-100" alt="..." style={{borderRadius:0}}/></SwiperSlide>
            <SwiperSlide><img src="Media/c1.jpg" className="d-block w-100" alt="..."  style={{borderRadius:0}}/></SwiperSlide>
            <SwiperSlide><img src="Media/c2.jpg" className="d-block w-100" alt="..."  style={{borderRadius:0}}/></SwiperSlide>
            <SwiperSlide> <img src="Media/c3.jpg" className="d-block w-100" alt="..." style={{borderRadius:0}}/></SwiperSlide>


        </Swiper>

    )
}

export default AboutusCarousel
