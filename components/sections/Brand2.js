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

export default function Brand2() {
    return (
        <>
            <section className="brand-area tpbrand black-bg-2 pt-65 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="tpsection text-center mb-45">
                                <h4 className="tpsection__title left-line right-line">Happy Sponsors</h4>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container brand-active">
                        <Swiper {...swiperOptions} className="swiper-wrapper brand-items">
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-w-01.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-w-02.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-w-03.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-w-04.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-w-05.png" alt="brand" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/img/brand/brand-w-06.png" alt="brand" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
