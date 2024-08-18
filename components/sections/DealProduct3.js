
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Countdown from "../elements/CountDown"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    centeredSlides: true,
    speed: 30000,
    slidesPerView: 1,
    autoplay: {
        delay: 1,
    },
    freeMode: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    // disableOnInteraction: true,
}


export default function DealProduct3() {
    const currentTime = new Date()
    return (
        <>
            <section className="dealproduct-area platinam-light pt-80 pb-10  p-relative fix">
                <div className="container-fluid g-0">
                    <div className="mp-marque-slider">
                        <div className="swiper-container swiper--top">
                            <Swiper {...swiperOptions}>
                                <SwiperSlide>
                                    <p>Great Deal Of The Day <span><Link href="/shop">Shop Now</Link></span></p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Great Deal Of The Day <span><Link href="/shop">Shop Now</Link></span></p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="platinamdell pt-140">
                        <div className="row">
                            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12">
                                <div className="tpdealcontact tp-red-deal-text pt-30 mb-30">
                                    <div className="tpdealcontact__price mb-5">
                                        <span>$49.00</span>
                                        <del>$59.00</del>
                                    </div>
                                    <div className="tpdealcontact__text mb-30">
                                        <h4 className="tpdealcontact__title mb-10"><Link href="/shop-details">Pro2 Abstract Folded Pots</Link></h4>
                                        <p>Elegant pink origami design three-dimensional view and decoration co-exist.
                                            Great for adding a decorative touch to any room’s decor.</p>
                                    </div>
                                    <div className="tpdealcontact__progress mb-30">
                                        <div className="progress">
                                            <div className="progress-bar w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="tpdealcontact__count">
                                        <div className="tpdealcontact__countdown">
                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                        </div>
                                        <i>Remains until the <br /> end of the offer</i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-12">
                                <div className="tpdealproduct mb-30">
                                    <div className="tpdealproduct__thumb">
                                        <img src="assets/img/floded/floded-03.png" alt="dealproduct-thumb" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
