
'use client'
import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 4000,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".postbox-slider-button-next",
        prevEl: ".postbox-slider-button-prev",
    },
}
export default function Blog() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog">
                <div className="postbox-area pt-80 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
                                <div className="postbox pr-20 pb-50">
                                    <BlogPost showItem={6} style={1} showPagination />
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
                                <div className="sidebar__wrapper pl-25 pb-50">
                                    <div className="sidebar__widget mb-45">
                                        <div className="sidebar__widget-content">
                                            <h3 className="sidebar__widget-title mb-25">Search</h3>
                                            <div className="sidebar__search">
                                                <form action="#">
                                                    <div className="sidebar__search-input-2 p-relative">
                                                        <input type="text" placeholder="Search post" />
                                                        <button type="submit"><i className="far fa-search" /></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar__widget mb-40">
                                        <h3 className="sidebar__widget-title mb-25">Category</h3>
                                        <div className="sidebar__widget-content">
                                            <ul>
                                                <li><Link href="/blog-details">Chemistry<span>03</span></Link></li>
                                                <li><Link href="/blog-details">Forensic science <span>07</span></Link></li>
                                                <li><Link href="/blog-details">Gemological <span>09</span></Link></li>
                                                <li><Link href="/blog-details">COvid Analysis <span>01</span></Link></li>
                                                <li><Link href="/blog-details">Becteriology <span>00</span></Link></li>
                                                <li><Link href="/blog-details">Angiosperm <span>26</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar__widget mb-55">
                                        <h3 className="sidebar__widget-title mb-25">Recent Post</h3>
                                        <div className="sidebar__widget-content">
                                            <div className="sidebar__post rc__post">
                                                <div className="rc__post mb-20 d-flex align-items-center">
                                                    <div className="rc__post-thumb">
                                                        <Link href="/blog-details"><img src="/assets/img/blog/blog-in-01.jpg" alt="blog-sidebar" /></Link>
                                                    </div>
                                                    <div className="rc__post-content">
                                                        <div className="rc__meta">
                                                            <span>4 March. 2022</span>
                                                        </div>
                                                        <h3 className="rc__post-title">
                                                            <Link href="/blog-details">Don't Underestimate Tree for Furniture</Link>
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="rc__post mb-20 d-flex align-items-center">
                                                    <div className="rc__post-thumb">
                                                        <Link href="/blog-details"><img src="/assets/img/blog/sidebar/blog-sm-2.jpg" alt="blog-sidebar" /></Link>
                                                    </div>
                                                    <div className="rc__post-content">
                                                        <div className="rc__meta">
                                                            <span>12 February. 2022</span>
                                                        </div>
                                                        <h3 className="rc__post-title">
                                                            <Link href="/blog-details">Equipping Researchers in the Developing World</Link>
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="rc__post mb-20 d-flex align-items-center">
                                                    <div className="rc__post-thumb">
                                                        <Link href="/blog-details"><img src="/assets/img/blog/sidebar/blog-sm-3.jpg" alt="blog-sidebar" /></Link>
                                                    </div>
                                                    <div className="rc__post-content">
                                                        <div className="rc__meta">
                                                            <span>14 January. 2022</span>
                                                        </div>
                                                        <h3 className="rc__post-title">
                                                            <Link href="/blog-details">Things to do before shopping</Link>
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="rc__post d-flex align-items-center">
                                                    <div className="rc__post-thumb">
                                                        <Link href="/blog-details"><img src="/assets/img/blog/sidebar/blog-sm-4.jpg" alt="blog-sidebar" /></Link>
                                                    </div>
                                                    <div className="rc__post-content">
                                                        <div className="rc__meta">
                                                            <span>18 March. 2021</span>
                                                        </div>
                                                        <h3 className="rc__post-title">
                                                            <Link href="/blog-details">Research And Verify of a Quality Product</Link>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar__widget mb-55">
                                        <h3 className="sidebar__widget-title mb-25">Popular Tag</h3>
                                        <div className="sidebar__widget-content">
                                            <div className="tagcloud">
                                                <Link href="/blog-details">Furniture</Link>
                                                <Link href="/blog-details">Table</Link>
                                                <Link href="/blog-details">Chair</Link>
                                                <Link href="/blog-details">Cloths</Link>
                                                <Link href="/blog-details">Toy</Link>
                                                <Link href="/blog-details">Suit</Link>
                                                <Link href="/blog-details">T-Shirt </Link>
                                                <Link href="/blog-details">Dress</Link>
                                                <Link href="/blog-details">Wooden</Link>
                                                <Link href="/blog-details">Clock</Link>
                                                <Link href="/blog-details">Craft</Link>
                                                <Link href="/blog-details">Gift</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}