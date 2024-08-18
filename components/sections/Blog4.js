import Link from "next/link"


export default function Blog4() {
    return (
        <>
            <section className="blog-area pb-35 pt-65">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="tpsection mb-40">
                                <h4 className="tpsection__title">Blog  Insights</h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tpallblog mb-20 text-end">
                                <h4 className="blog-btn"><Link href="#">All News <i className="far fa-long-arrow-right" /></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-6">
                        <div className="col-lg-3 col-md-6 col-sm-6 tpblogborder mb-30">
                            <div className="blogitem">
                                <div className="blogitem__thumb fix mb-20">
                                    <Link href="/blog-details"><img src="assets/img/blog/blog-thumb-01.jpg" alt="blog-bg" /></Link>
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
                                    <h4 className="blogitem__title mb-15">
                                        <Link href="/blog-details">Here is why you cannot miss EORS 15</Link>
                                    </h4>
                                    <div className="blogitem__btn">
                                        <Link href="/blog-details">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 tpblogborder mb-30">
                            <div className="blogitem">
                                <div className="blogitem__thumb fix mb-20">
                                    <Link href="/blog-details"><img src="assets/img/blog/blog-thumb-02.jpg" alt="blog-bg" /></Link>
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
                                    <h4 className="blogitem__title">
                                        <Link href="/blog-details">Myntra launches international brand DeFacto</Link>
                                    </h4>
                                    <div className="blogitem__btn">
                                        <Link href="/blog-details">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 tpblogborder mb-30">
                            <div className="blogitem">
                                <div className="blogitem__thumb fix mb-20">
                                    <Link href="/blog-details"><img src="assets/img/blog/blog-thumb-03.jpg" alt="blog-bg" /></Link>
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
                                    <h4 className="blogitem__title">
                                        <Link href="/blog-details">Ruskin Bond Shares His Life Experiences</Link>
                                    </h4>
                                    <div className="blogitem__btn">
                                        <Link href="/blog-details">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                            <div className="blogitem">
                                <div className="blogitem__thumb fix mb-20">
                                    <Link href="/blog-details"><img src="assets/img/blog/blog-thumb-04.jpg" alt="blog-bg" /></Link>
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
                                    <h4 className="blogitem__title">
                                        <Link href="/blog-details">The House That Will Instantly Update</Link>
                                    </h4>
                                    <div className="blogitem__btn">
                                        <Link href="/blog-details">Read More</Link>
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
