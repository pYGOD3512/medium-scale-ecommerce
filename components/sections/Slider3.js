'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.greenslider-pagination',
        clickable: true,
    },

}

import Link from "next/link"

export default function Slider3() {
    return (
        <>
            <section className="slider-area">
                <div className="secondary-slider p-relative">
                    <div className="swiper-container greenslider-active">
                        <Swiper {...swiperOptions}>
                            <SwiperSlide className="slider-bg-2 slider-3">
                                <div className="container">
                                    <div className="row p-relative justify-content-xl-end align-items-center">
                                        <div className="col-xl-5 col-lg-6 col-md-6">
                                            <div className="tpslidertwo__content slider-content-3">
                                                <h3 className="tpslidertwo__title mb-10">Wooden <br /> Lounge Furniture</h3>
                                                <p>New Modern Stylist Fashionable Women's Wear holder</p>
                                                <div className="tpslidertwo__slide-btn d-flex align-items-center ">
                                                    <Link className="tp-btn banner-animation mr-25" href="/shop">Shop Now <i className="fal fa-long-arrow-right" /></Link>
                                                    <span>Start From <br /> <b>$99.99</b></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6 col-md-6 d-none d-md-block">
                                            <div className="tpsliderthree__img p-relative text-end pt-55">
                                                <img src="/assets/img/slider/slider-04.png" alt="" />
                                                <div className="tpslidertwo__img-shape">
                                                    <img src="/assets/img/slider/fasion-tag-02.png" alt="tag" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slider-bg-2 slider-3">
                                <div className="container">
                                    <div className="row p-relative justify-content-xl-end align-items-center">
                                        <div className="col-xl-5 col-lg-6 col-md-6">
                                            <div className="tpslidertwo__content slider-content-3">
                                                <h3 className="tpslidertwo__title mb-10">Wooden <br /> Lounge Chair</h3>
                                                <p>New Modern Stylist Fashionable Women's Wear holder</p>
                                                <div className="tpslidertwo__slide-btn d-flex align-items-center ">
                                                    <Link className="tp-btn banner-animation mr-25" href="/shop-2">Shop Now <i className="fal fa-long-arrow-right" /></Link>
                                                    <span>Start From <br /> <b>$99.99</b></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6 col-md-6 d-none d-md-block">
                                            <div className="tpsliderthree__img p-relative text-end pt-55">
                                                <img src="/assets/img/slider/slider-05.png" alt="" />
                                                <div className="tpslidertwo__img-shape">
                                                    <img src="/assets/img/slider/fasion-tag-02.png" alt="tag" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slider-bg-2 slider-3">
                                <div className="container">
                                    <div className="row p-relative justify-content-xl-end align-items-center">
                                        <div className="col-xl-5 col-lg-6 col-md-6">
                                            <div className="tpslidertwo__content slider-content-3">
                                                <h3 className="tpslidertwo__title mb-10">Wooden <br /> Houston Furniture</h3>
                                                <p>New Modern Stylist Fashionable Women's Wear holder</p>
                                                <div className="tpslidertwo__slide-btn d-flex align-items-center ">
                                                    <Link className="tp-btn banner-animation mr-25" href="/shop-2">Shop Now <i className="fal fa-long-arrow-right" /></Link>
                                                    <span>Start From <br /> <b>$99.99</b></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6 col-md-6 d-none d-md-block">
                                            <div className="tpsliderthree__img p-relative text-end pt-55">
                                                <img src="/assets/img/slider/slider-06.png" alt="" />
                                                <div className="tpslidertwo__img-shape">
                                                    <img src="/assets/img/slider/fasion-tag-02.png" alt="tag" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="greenslider-pagination" />
                </div>
            </section>
        </>
    )
}
