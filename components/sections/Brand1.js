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

export default function Brand1() {
    return (
        <>
            <section className="brand-area theme-bg pt-110 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="tpsection solid-line text-center mb-45">
                                <h4 className="tpsection__title ">Happy Sponsors</h4>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container brand-active">
                        <Swiper {...swiperOptions} className="brand-items black-bg-brand">
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-01.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-02.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-03.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-04.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-05.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-06.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-04.png" alt="brand" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
