'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1400: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Brand3() {
    return (
        <>
            <div className="brand-area platinam-light pb-60">
                <div className="container">
                    <div className="swiper-container brand-active">
                        <Swiper {...swiperOptions} className="swiper-wrapper brand-items">
                            <SwiperSlide>
                                <img src="assets/img/brand/pla-brand-01.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/img/brand/pla-brand-02.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/img/brand/pla-brand-03.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/img/brand/pla-brand-04.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/img/brand/pla-brand-05.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/img/brand/pla-brand-06.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/img/brand/pla-brand-02.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/img/brand/pla-brand-03.png" alt="brand" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
