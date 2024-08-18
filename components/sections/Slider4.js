'use client'
import Link from "next/link"
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
        el: '.tpsliderthree__pagination',
        clickable: true,
    },

}


export default function Slider4() {
    return (
        <>
            <section className="slider-area platinam-light pb-70">
                <div className="container">
                    <div className="platinamborder p-relative">
                        <div className="platinam-slidershape d-none d-md-block">
                            <img src="assets/img/slider/fasion-tag-03.png" alt="tag" />
                        </div>
                        <div className="swiper-container sliderthree-active">
                            <Swiper {...swiperOptions}>
                                <SwiperSlide className="platinam-light slider-bg-four">
                                    <div className="row align-items-center">
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="tpslidertwo__item slidre-item-4 ml-145 text-center">
                                                <div className="tpslidertwo__content">
                                                    <h3 className="tpslidertwo__title mb-10">Will Never <br /> Compromise Beauty</h3>
                                                    <p>New Modern Stylist Fashionable Women's Wear holder</p>
                                                    <div className="tpslidertwo__slide-btn d-flex justify-content-center">
                                                        <Link className="tp-btn banner-animation tpslider-btn-4 mr-25" href="/shop">Shop Now <i className="fal fa-long-arrow-right" />
                                                        </Link>
                                                        <span>Start From <br /> <b>$99.99</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                                            <div className="tpslidertwo__img p-relative pt-80 pb-80">
                                                <img src="assets/img/slider/slider-bg-04.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="tpsliderthree__pagination" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="platinam-light slider-bg-four">
                                    <div className="row align-items-center">
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="tpslidertwo__item slidre-item-4 ml-145 text-center">
                                                <div className="tpslidertwo__content">
                                                    <h3 className="tpslidertwo__title mb-10">Will Never <br /> Compromise Glow</h3>
                                                    <p>New Modern Stylist Fashionable Women's Wear holder</p>
                                                    <div className="tpslidertwo__slide-btn d-flex justify-content-center">
                                                        <Link className="tp-btn banner-animation tpslider-btn-4 mr-25" href="/shop">Shop Now
                                                            <i className="fal fa-long-arrow-right" />
                                                        </Link>
                                                        <span>Start From <br /> <b>$99.99</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                                            <div className="tpslidertwo__img p-relative pt-80 pb-80">
                                                <img src="assets/img/slider/slider-bg-05.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="tpsliderthree__pagination" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="platinam-light slider-bg-four">
                                    <div className="row align-items-center">
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="tpslidertwo__item slidre-item-4 ml-145 text-center">
                                                <div className="tpslidertwo__content">
                                                    <h3 className="tpslidertwo__title mb-10">Will Never <br /> Compromise Helath</h3>
                                                    <p>New Modern Stylist Fashionable Women's Wear holder</p>
                                                    <div className="tpslidertwo__slide-btn d-flex justify-content-center">
                                                        <Link className="tp-btn banner-animation tpslider-btn-4 mr-25" href="/shop">Shop Now
                                                            <i className="fal fa-long-arrow-right" />
                                                        </Link>
                                                        <span>Start From <br /> <b>$99.99</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                                            <div className="tpslidertwo__img p-relative pt-80 pb-80">
                                                <img src="assets/img/slider/slider-bg-06.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="tpsliderthree__pagination" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
