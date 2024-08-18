'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
    },
    breakpoints: {
        1400: {
            slidesPerView: 5,
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
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.tpproductarrow__nxt',
        prevEl: '.tpproductarrow__prv',
    },
}

export default function WhiteProduct() {
    return (
        <>
            <section className="white-product-area grey-bg-2 pt-65 pb-70 fix p-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-12">
                            <div className="tpsection mb-40">
                                <h4 className="tpsection__title">Top Sell In Month</h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="tpproductarrow d-flex align-items-center">
                                <div className="tpproductarrow__prv"><i className="far fa-long-arrow-left" />Prev</div>
                                <div className="tpproductarrow__nxt">Next<i className="far fa-long-arrow-right" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container product-active">
                        <Swiper {...swiperOptions}>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/shop-details"><img src="/assets/img/shop/w-product-01.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/shop-details-2">CLCo. Incredible Paper Car</Link></h5>
                                            <span>$31.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/shop-details"><img src="/assets/img/shop/w-product-02.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/shop-details-2">Progash Durable Granite Hat</Link></h5>
                                            <span>$31.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/shop-details"><img src="/assets/img/shop/w-product-03.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/shop-details-2">Miklonda Co. Crafted Candles</Link></h5>
                                            <span>$31.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/shop-details"><img src="/assets/img/shop/w-product-04.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/shop-details-2">Weddonix Mediocre Silk Hat</Link></h5>
                                            <span>$31.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/shop-details"><img src="/assets/img/shop/w-product-05.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/shop-details-2">Gorgeous Wooden Gloves</Link></h5>
                                            <span>$31.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/shop-details"><img src="/assets/img/shop/w-product-01.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/shop-details-2">CLCo. Incredible Paper Car</Link></h5>
                                            <span>$31.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/shop-details"><img src="/assets/img/shop/w-product-02.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/shop-details-2">Progash Durable Granite Hat</Link></h5>
                                            <span>$31.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="banner-shape">
                    <img src="/assets/img/banner/product-shape-01.png" alt="shape" className="banner-shape-primary" />
                    <img src="/assets/img/banner/product-shape-02.png" alt="shape" className="banner-shape-secondary" />
                </div>
            </section>
        </>
    )
}
