import React from 'react'

import styles from '../../styles/Work.module.css'
import {Length, projectJSON} from '../../Data/ProjectJSON.js'

import SwiperCore, { Navigation, Pagination, A11y, EffectFade, EffectCube} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Worktemplate from './Worktemplate';

SwiperCore.use([Navigation, Pagination, A11y]);

const Workmain = () => {

    let swiperSlide = []

    for (let i = 0; i < Length; ++i) swiperSlide.push(<SwiperSlide key={i}><Worktemplate data = {projectJSON[i]}/></SwiperSlide>)

    return (
        <div className='col' style={{padding:0}}>
            <div className={styles.worktitle}>  Our Work  <span> {`< swipe >`} </span> </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                effect="cube"
                cubeEffect
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {swiperSlide}
            </Swiper>
        </div>
    )
}

export default Workmain
