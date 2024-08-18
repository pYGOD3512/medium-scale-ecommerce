'use client'
import products from "@/data/products"
import { addCart } from "@/features/shopSlice"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1400: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
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
        nextEl: '.tpplatiarrow__nxt',
        prevEl: '.tpplatiarrow__prv',
    },
}


export default function PlatinamProduct() {
    const currentTime = new Date()
    const dispatch = useDispatch()

    const addToCart = (id) => {
        const item = products?.find((item) => item.id === id)
        dispatch(addCart({ product: item }))
    }
    return (
        <>
            <section className="platinam-product-area pt-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="tpsection mb-40">
                                <h4 className="tpsection__title">Popular Products</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="tpplatiarrow d-flex align-items-center justify-content-end">
                                <div className="tpplatiarrow__prv"><i className="far fa-long-arrow-left" />Prev</div>
                                <div className="tpplatiarrow__nxt">Next<i className="far fa-long-arrow-right" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container platinam-pro-active">
                        <Swiper {...swiperOptions}>
                            {products.slice(0, 6).map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="tpratingitem tpproduct text-center">
                                        <div className="tpproduct__thumb p-relative">
                                            <Link href={`/shop/${item.id}`}>
                                                <img src={`/assets/img/product/${item.imgf}`} alt="product-thumb" />
                                                <img className="thumbitem-secondary" src={`/assets/img/product/${item.imgb}`} alt="product-thumb" />
                                            </Link>
                                            <div className="tpproduct__thumb-action">
                                                <Link href="#" onClick={() => addToCart(item.id)}><i className="fal fa-shopping-basket" /></Link>
                                                <Link className="quckview" href="#"><i className="fal fa-eye" /></Link>
                                                <Link className="wishlist" href="/wishlist"><i className="fal fa-heart" /></Link>
                                            </div>
                                        </div>
                                        <div className="tpratingitem__content">
                                            <h4 className="tpratingitem__title mb-5">  <Link href={`/shop/${item.id}`}>Miko: Bold Miranda Joggers</Link></h4>
                                            <span>$31.00</span>
                                            <div className="tpratingitem__star mt-5">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                                <span>81 Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
