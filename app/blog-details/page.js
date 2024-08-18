
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogDetails() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog Details">
                <div className="postbox-area pt-80 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
                                <div className="postbox__wrapper pr-20">
                                    <article className="postbox__item format-image mb-50 transition-3">
                                        <div className="postbox__thumb w-img mb-30">
                                            <img src="/assets/img/blog/blog-in-01.jpg" alt="" />
                                        </div>
                                        <div className="postbox__content">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="postbox__content postbox__content-area mb-55">
                                                        <div className="postbox__meta mb-15">
                                                            <span><Link href="#"><i className="fal fa-user-alt" /> Alextina</Link></span>
                                                            <span><i className="fal fa-clock" /> Dec 28, 2022</span>
                                                            <span><Link href="#"><i className="far fa-comment-alt" /> (04) Comments</Link></span>
                                                        </div>
                                                        <h4 className="mb-35">
                                                            Lavoratories used for scientic reseach take many froms.
                                                        </h4>
                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, aperiam ipsquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, aperiam ipsquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="postbox__content-area mb-60">
                                                        <h4>Our Approach</h4>
                                                        <div className="postbox__text mb-30">
                                                            <p>Must explain to you how all praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater </p>
                                                            <div className="postbox__text-list">
                                                                <ul>
                                                                    <li><i className="fal fa-check" />Extramural Funding</li>
                                                                    <li><i className="fal fa-check" />Bacteria Markers</li>
                                                                    <li><i className="fal fa-check" />Nam nec mi euismod euismod</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="postbox__meta-img w-img mb-60"><img src="/assets/img/blog/blog-in-02.jpg" alt="" /></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="postbox__content-area mb-40">
                                                        <h4 className="mb-25">What Is A Business Technology Roadmap?</h4>
                                                        <p>Unlike detailed blueprints that lay out all tasks, deadlines, bug reports, and more along the way, technology roadmaps are high-level visual summaries highlighting a company’s vision or plans.
                                                        </p>
                                                        <p>In an Agile approach, a technology roadmap feeds the sprint and grooming processes, providing insight into how the product will travel from start to finish. It makes it easier for development teams to:</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="postbox__meta-img mb-60">
                                                        <img src="/assets/img/blog/blog-in-05.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="postbox__meta-img mb-60">
                                                        <img src="/assets/img/blog/blog-in-04.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="postbox__tag-border">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-7 col-md-12">
                                                        <div className="postbox__tag">
                                                            <div className="postbox__tag-list tagcloud">
                                                                <span>Tag</span>
                                                                <Link href="/blog">Furniture</Link>
                                                                <Link href="/blog">Table</Link>
                                                                <Link href="/blog">Fashion</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-5 col-md-12">
                                                        <div className="postbox__social-tag">
                                                            <span>Share</span>
                                                            <Link className="blog-d-lnkd" href="#"><i className="fab fa-linkedin-in" /></Link>
                                                            <Link className="blog-d-pin" href="#"><i className="fab fa-pinterest-p" /></Link>
                                                            <Link className="blog-d-fb" href="#"><i className="fab fa-facebook-f" /></Link>
                                                            <Link className="blog-d-tweet" href="#"><i className="fab fa-twitter" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <div className="postbox__comment mb-65">
                                        <h3 className="postbox__comment-title">(04) Comment</h3>
                                        <ul>
                                            <li>
                                                <div className="postbox__comment-box d-flex">
                                                    <div className="postbox__comment-info">
                                                        <div className="postbox__comment-avater mr-25">
                                                            <img src="/assets/img/blog/comments/comment-1.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="postbox__comment-text">
                                                        <div className="postbox__comment-name">
                                                            <h5>Kristin Watson</h5>
                                                            <span className="post-meta">MARCH 10, 2020</span>
                                                        </div>
                                                        <p>Patient Comments are a collection of comments submitted by viewers in response to <br /> a question posed by a MedicineNet doctor.</p>
                                                        <div className="postbox__comment-reply">
                                                            <Link href="#"><i className="fas fa-reply-all" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="children mb-30">
                                                <div className="postbox__comment-box d-flex">
                                                    <div className="postbox__comment-info">
                                                        <div className="postbox__comment-avater mr-25">
                                                            <img src="/assets/img/blog/comments/comment-2.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="postbox__comment-text">
                                                        <div className="postbox__comment-name">
                                                            <h5>Brooklyn Simmons</h5>
                                                            <span className="post-meta">MARCH 10, 2020</span>
                                                        </div>
                                                        <p>Include anecdotal examples of your experience, or things you took notice of that you <br /> feel others would find useful.</p>
                                                        <div className="postbox__comment-reply">
                                                            <Link href="#"><i className="fas fa-reply-all" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="postbox__comment-form">
                                        <h3 className="postbox__comment-form-title">Leave a Reply</h3>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="postbox__comment-input">
                                                        <input type="text" placeholder="Enter your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="postbox__comment-input">
                                                        <input type="email" placeholder="Enter your email" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="postbox__comment-input">
                                                        <input type="text" placeholder="Enter your number" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="postbox__comment-input">
                                                        <input type="text" placeholder="Enter your website" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-12">
                                                    <div className="postbox__comment-input">
                                                        <textarea placeholder="Type your comment" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-12">
                                                    <div className="postbox__comment-btn ">
                                                        <button type="submit" className="tp-color-btn tp-btn banner-animation">Post Comment</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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
                                                        <Link href="/blog-details"><img src="/assets/img/blog/sidebar/blog-sm-1.jpg" alt="blog-sidebar" /></Link>
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