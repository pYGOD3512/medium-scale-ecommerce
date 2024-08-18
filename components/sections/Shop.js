'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 25,
    autoplay: {
        delay: 3500,
    },
    breakpoints: {
        1400: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 4,
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

export default function Shop() {
    return (
        <>
            <section className="shop-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tpsectionarea text-center mb-35">
                                <h5 className="tpsectionarea__subtitle">Follow On</h5>
                                <h4 className="tpsectionarea__title"><i className="fab fa-instagram" /> ninico-shop</h4>
                            </div>
                        </div>
                    </div>
                    <div className="shopareaitem">
                        <div className="shopslider-active swiper-container">
                            <Swiper {...swiperOptions}>
                                <SwiperSlide className="tpshopitem">
                                    <Link className="popup-image" href="#">
                                        <img src="/assets/img/instagram/instagram-01.jpg" alt="shop-thumb" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className="tpshopitem">
                                    <Link className="popup-image" href="#">
                                        <img src="/assets/img/instagram/instagram-02.jpg" alt="shop-thumb" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className="tpshopitem">
                                    <Link className="popup-image" href="#">
                                        <img src="/assets/img/instagram/instagram-03.jpg" alt="shop-thumb" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className="tpshopitem">
                                    <Link className="popup-image" href="#">
                                        <img src="/assets/img/instagram/instagram-04.jpg" alt="shop-thumb" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className="tpshopitem">
                                    <Link className="popup-image" href="#">
                                        <img src="/assets/img/instagram/instagram-05.jpg" alt="shop-thumb" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className="tpshopitem">
                                    <Link className="popup-image" href="#">
                                        <img src="/assets/img/instagram/instagram-06.jpg" alt="shop-thumb" />
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
