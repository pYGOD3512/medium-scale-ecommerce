import Link from "next/link"


export default function Banner3() {
    return (
        <>
            <section className="banner-area pt-15">
                <div className="bannerborder">
                    <div className="container-fluid">
                        <div className="row gx-3">
                            <div className="col-lg-4 col-md-12">
                                <div className="banneritem banneroverlay p-relative">
                                    <img src="assets/img/banner/banner-thumb-01.jpg" alt="" />
                                    <div className="bannertext text-center">
                                        <span className="bannertext__subtitle">Hair Color</span>
                                        <h4 className="bannertext__title mb-40"><Link href="/shop-2">Reactive Providence <br /> Hair Color</Link></h4>
                                        <div className="bannertext__btn tpexclusive__btn">
                                            <Link href="/shop" className="tp-btn  banner-animation">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="banneritem banner-animation mb-15 p-relative">
                                    <img src="assets/img/banner/banner-thumb-02.jpg" alt="" />
                                    <div className="bannerbox">
                                        <span className="bannerbox__subtitle">Cosmetics</span>
                                        <h4 className="bannerbox__title mb-95">
                                            <Link href="/shop-2">New Modern  <br /> Stylist Makeup</Link>
                                        </h4>
                                        <div className="bannerbox__btn">
                                            <Link className="tp-btn banner-animation mr-25" href="/shop-2">Shop Now
                                                <i className="fal fa-long-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="banneritem banner-animation p-relative">
                                    <img src="assets/img/banner/banner-thumb-03.jpg" alt="" />
                                    <div className="bannerbox">
                                        <h4 className="bannerbox__title banner-bottom-title">
                                            <Link href="/shop">50% Offer On</Link>
                                        </h4>
                                        <span className="bannerbox__subtitle banner-bottom-bg mb-130">Intensive Glow <Link href="/shop">C+ Serum</Link></span>
                                        <div className="bannerbox__btn">
                                            <Link className="tp-btn banner-animation mr-25" href="/shop-2">Shop Now
                                                <i className="fal fa-long-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="banneritem banner-animation p-relative">
                                    <img src="assets/img/banner/banner-thumb-04.jpg" alt="" />
                                    <div className="bannerbox">
                                        <span className="bannerbox__subtitle banner-right-bg mb-200">Featured Brand</span>
                                        <div className="bannerbox__btn">
                                            <Link className="tp-btn banner-animation mr-25" href="/shop-2">Shop Now
                                                <i className="fal fa-long-arrow-right" />
                                            </Link>
                                        </div>
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
