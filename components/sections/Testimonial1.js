'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.tptestiarrow__nxt',
        prevEl: '.tptestiarrow__prv',
    },
}

export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-area pt-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="tpsection mb-35">
                                <h4 className="tpsection__title">User Feedbacks</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="tptestiarrow d-flex align-items-center justify-content-end">
                                <div className="tptestiarrow__prv"><i className="far fa-long-arrow-left" />Prev</div>
                                <div className="tptestiarrow__nxt">Next<i className="far fa-long-arrow-right" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container testi-active">
                        <Swiper {...swiperOptions}>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="/assets/img/svg/testi01.svg" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“ Providing insight-driven transfor- mation to investment banks, wealth and asset mana, exchanges, Finance. Must explain to you how all this mistaken. ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="assets/img/testimonial/testi-avata-01.png" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Miranda H. Halim</h5>
                                            <p>Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="/assets/img/svg/testi01.svg" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“We are the preferred choice by many car owners because our experience and knowledge is self-evident.For your car we will do everything – advice ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="assets/img/testimonial/testi-avata-02.png" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Cameron William</h5>
                                            <p>Head Of Idea</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="/assets/img/svg/testi01.svg" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“ Wualitative and quantitative data from customers on their likes, dislikes,
                                            impressions, and requests about popular product. ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="assets/img/testimonial/testi-avata-03.png" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Robertia</h5>
                                            <p>CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="/assets/img/svg/testi01.svg" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“We are the preferred choice by many car owners because our experience and knowledge is self-evident.For your car we will do everything – advice ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="assets/img/testimonial/testi-avata-02.png" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Cameron William</h5>
                                            <p>Head Of Idea</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
