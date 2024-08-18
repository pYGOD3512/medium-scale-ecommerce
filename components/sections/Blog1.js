
import Link from "next/link"

export default function Blog1() {
    return (
        <>
            <section className="blog-area pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-main-box">
                                <div className="row">
                                    <div className="col-md-12 col-12">
                                        <div className="blogheader mb-20 d-flex align-items-center justify-content-between">
                                            <div className="tpsection mb-20">
                                                <h4 className="tpsection__title">Popular Products</h4>
                                            </div>
                                            <div className="tpallblog mb-20">
                                                <h4 className="blog-btn"><Link href="/blog-details">All Blog <i className="far fa-long-arrow-right" /></Link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="blogitem mb-40">
                                            <div className="blogitem__thumb fix mb-20">
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog-01.jpg" alt="blog-bg" /></Link>
                                            </div>
                                            <div className="blogitem__content">
                                                <div className="blogitem__contetn-date mb-10">
                                                    <ul>
                                                        <li>
                                                            <Link className="date-color" href="#">Jan 21, 2022</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/blog-details">Fashion</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4 className="blogitem__title"><Link href="/blog-details">Here is why you cannot miss EORS 15</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="blogitem mb-40">
                                            <div className="blogitem__thumb fix mb-20">
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog-02.jpg" alt="blog-bg" /></Link>
                                            </div>
                                            <div className="blogitem__content">
                                                <div className="blogitem__contetn-date mb-10">
                                                    <ul>
                                                        <li>
                                                            <Link className="date-color" href="#">Jan 21, 2022</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/blog-details">Fashion</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4 className="blogitem__title"><Link href="/blog-details">Myntra launches international brand DeFacto</Link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="blogitem mb-40">
                                            <div className="blogitem__thumb fix mb-20">
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog-03.jpg" alt="blog-bg" /></Link>
                                            </div>
                                            <div className="blogitem__content">
                                                <div className="blogitem__contetn-date mb-10">
                                                    <ul>
                                                        <li>
                                                            <Link className="date-color" href="#">Jan 21, 2022</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/blog-details">Fashion</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4 className="blogitem__title"><Link href="/blog-details">Ruskin Bond Shares His Life Experiences</Link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 text-md-center">
                            <div className="tpcta slider-bg text-center">
                                <h5 className="tpcta__subtitle">Subscribe</h5>
                                <h4 className="tpcta__title mb-30">Get Newsletter Update</h4>
                                <div className="tpcta__input p-relative mb-10">
                                    <form action="#">
                                        <input type="email" placeholder="Enter email address" />
                                        <span className="tpcta__input-icon"><i className="far fa-envelope" /></span>
                                        <div className="tpcta__btn banner-animation mt-10">
                                            <button>Subscribe Now <span><i className="far fa-long-arrow-right" /></span></button>
                                        </div>
                                    </form>
                                </div>
                                <p>We will not share your email anywhere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
