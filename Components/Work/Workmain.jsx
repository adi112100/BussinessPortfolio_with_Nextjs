import React from 'react'

import styles from '../../styles/Work.module.css'

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Worktemplate from './Worktemplate';

SwiperCore.use([Navigation, Pagination, A11y]);

const Workmain = () => {
    return (
        <div className='col'>
            <div className={styles.worktitle}>  Our Work  <span> {`< swipe >`} </span> </div>
            <Swiper
                spaceBetween={1}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide>   <Worktemplate />   </SwiperSlide>
                <SwiperSlide>   <Worktemplate />   </SwiperSlide>
                <SwiperSlide>   <Worktemplate />   </SwiperSlide>
                <SwiperSlide>   <Worktemplate />   </SwiperSlide>
                <SwiperSlide>   <Worktemplate />   </SwiperSlide>
                <SwiperSlide>   <Worktemplate />   </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Workmain
