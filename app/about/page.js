'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 25,
    autoplay: {
        delay: 3500,
    },
    breakpoints: {
        1400: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
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

export default function About() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us">
                <div>
                    <section className="about-area pt-80  pb-40">
                        <div className="container">
                            <div className="tpabout__inner-logo p-relative">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tpabout__inner-thumb mb-40">
                                            <img src="/assets/img/banner/about-img-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tpabout__inner-thumb mb-40">
                                            <img src="/assets/img/banner/about-img-2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tpabout__logo">
                                    <Link href="/"><img src="/assets/img/banner/about-img-3.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="tpabout__inner-title-area mt-25 mb-45">
                                        <h4 className="tpabout__inner-sub-title">About Us</h4>
                                        <h4 className="tpabout__inner-title">About Our Story</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpabout__inner-story mb-40">
                                        <p>Publish your eCommerce site quickly with our easy-to-use store
                                            builder— no coding required. Migrate your items from your
                                            point of sale system or turn your Instagram feed into a shopping
                                            site and start selling fast. Square Online works for all kinds of
                                            businesses—retail, restaurants, services without costly
                                            customization or add ons. Get orders to your customers in lots
                                            of ways by offering shipping, pickup, delivery, and even QR
                                            code ordering.</p>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpabout__inner-story-2 mb-40">
                                        <p>Expand your reach and sell more using seamless integrations with
                                            Google, Instagram, Facebook, and more. Built- in SEO tools make
                                            it easy for shoppers to find your business on search engines. Get
                                            access to the entire suite of integrated Square solutions to help you
                                            run your business. Integration between Square Online and all
                                            Square point of sale systems makes inventory management easy.
                                            Subscribe to Square Marketing and easily send email promotions
                                            to your customers using the contact information</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
                                    <div className="tpabout__inner-list mb-40">
                                        <ul>
                                            <li> <Link href="#"><i className="fal fa-check" /> Orders go right to your restaurant point of sale, KDS, and kitchen</Link>
                                            </li>
                                            <li> <Link href="#"><i className="fal fa-check" /> Provide in-person pickup,  delivery by professional couriers</Link>
                                            </li>
                                            <li><Link href="#"><i className="fal fa-check" /> Offer in-person diners self-serve, contactless ordering via QR codes.</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* about-area-end */}
                    {/* team-area-start */}
                    <section className="team-area grey-bg-3 pb-30">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="tpabout__inner-title-area mt-65 mb-45 text-center">
                                        <h4 className="tpabout__inner-sub-title">Team</h4>
                                        <h4 className="tpabout__inner-title">Meet With Team</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-container tp-team-active">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="tpteam__item p-relative mb-40">
                                            <div className="tpteam__thumb">
                                                <img src="/assets/img/testimonial/team-1.jpg" alt="" />
                                            </div>
                                            <div className="tpteam__content">
                                                <h4 className="tpteam__position">Founder</h4>
                                                <h5 className="tpteam__title">Rosalina D. Willson</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tpteam__item p-relative mb-40">
                                            <div className="tpteam__thumb">
                                                <img src="/assets/img/testimonial/team-2.jpg" alt="" />
                                            </div>
                                            <div className="tpteam__content">
                                                <h4 className="tpteam__position">CEO</h4>
                                                <h5 className="tpteam__title">Ukolilix X. Xilanorix</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tpteam__item p-relative mb-40">
                                            <div className="tpteam__thumb">
                                                <img src="/assets/img/testimonial/team-3.jpg" alt="" />
                                            </div>
                                            <div className="tpteam__content">
                                                <h4 className="tpteam__position">Designer</h4>
                                                <h5 className="tpteam__title">Alonso M. Miklonax</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tpteam__item p-relative mb-40">
                                            <div className="tpteam__thumb">
                                                <img src="/assets/img/testimonial/team-4.jpg" alt="" />
                                            </div>
                                            <div className="tpteam__content">
                                                <h4 className="tpteam__position">Developer</h4>
                                                <h5 className="tpteam__title">Miranda H. Halim</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tpteam__item p-relative mb-40">
                                            <div className="tpteam__thumb">
                                                <img src="/assets/img/testimonial/team-1.jpg" alt="" />
                                            </div>
                                            <div className="tpteam__content">
                                                <h4 className="tpteam__position">Founder</h4>
                                                <h5 className="tpteam__title">Rosalina D. Willson</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tpteam__item p-relative mb-40">
                                            <div className="tpteam__thumb">
                                                <img src="/assets/img/testimonial/team-2.jpg" alt="" />
                                            </div>
                                            <div className="tpteam__content">
                                                <h4 className="tpteam__position">CEO</h4>
                                                <h5 className="tpteam__title">Ukolilix X. Xilanorix</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </section>
                    {/* team-area-end */}
                    {/* feature-area-start */}
                    <section className="feature-area pt-70 pb-10">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpfeature__inner-thumb mb-70">
                                        <img src="/assets/img/banner/about-banner-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpabout__inner-title-area about-inner-content ml-50 mr-50 mb-70">
                                        <h4 className="tpabout__inner-sub-title mb-5">Features #01</h4>
                                        <h4 className="tpabout__inner-title mb-25">Solutions that work together</h4>
                                        <p>Publish your eCommerce site quickly with our easy-to-use store builder— no
                                            coding required. Migrate your items from your point of sale system or turn your
                                            Instagram feed into a shopping site and start selling fast. Square Online works
                                            for all kinds of businesses—retail, restaurants, services.
                                        </p>
                                        <Link className="tpteam__btn" href="/contact">Get In Touch</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpabout__inner-title-area about-inner-content mr-100 mb-70">
                                        <h4 className="tpabout__inner-sub-title mb-5">Features #02</h4>
                                        <h4 className="tpabout__inner-title mb-25">All kinds of payments securely</h4>
                                        <p>Publish your eCommerce site quickly with our easy-to-use store builder— no
                                            coding required. Migrate your items from your point of sale system or turn your
                                            Instagram feed into a shopping site and start selling fast. Square Online works
                                            for all kinds of businesses—retail, restaurants, services.
                                        </p>
                                        <Link className="tpteam__btn" href="/contact">Contact With Us</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="tpfeature__inner-thumb mb-70">
                                        <img src="/assets/img/banner/about-banner-2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}