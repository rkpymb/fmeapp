"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={`/jointod.png`} alt="image"
                        layout="responsive"
                        width={200}
                        height={100}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/party.png`} alt="image"
                        layout="responsive"
                        width={200}
                        height={100}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/dsdsdsd.png`} alt="image"
                        layout="responsive"
                        width={200}
                        height={100}
                    />
                </SwiperSlide>
              
            </Swiper>
        </>
    );
}
