import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function WhyPolyStarterSlider({children}) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                className="mySwiper"
                slidesPerView={"auto"}
                >
                {children}
            </Swiper>
        </>
    );
}
