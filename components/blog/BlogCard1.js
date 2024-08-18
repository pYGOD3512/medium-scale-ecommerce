import Link from "next/link"

export default function BlogCard1({ item }) {
    return (
        <>
            <article className="postbox__item format-image mb-60 transition-3">
                                        <div className="postbox__thumb w-img mb-25">
                                            <Link href={`/blog/${item.id}`}>
                                                <img src={`/assets/img/blog/${item.img}`} alt="blog-thumg" />
                                            </Link>
                                        </div>
                                        <div className="postbox__content">
                                            <div className="postbox__meta mb-15">
                                                <span><Link href="#"><i className="fal fa-user-alt" /> Alextina</Link></span>
                                                <span><i className="fal fa-clock" /> Dec 28, 2022</span>
                                                <span><Link href="#"><i className="far fa-comment-alt" /> (04) Comments</Link></span>
                                            </div>
                                            <h3 className="postbox__title mb-20">
                                                <Link href={`/blog/${item.id}`}>{item.title}</Link>
                                            </h3>
                                            <div className="postbox__text mb-30">
                                                <p>Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory</p>
                                            </div>
                                            <div className="postbox__read-more">
                                                <Link href={`/blog/${item.id}`} className="tp-btn tp-color-btn banner-animation">Reade More</Link>
                                            </div>
                                        </div>
                                    </article>
        </>
    )
}
