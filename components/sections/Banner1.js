
import Link from "next/link"

export default function Banner1() {
    return (
        <>
            <section className="banner-area pt-100 pb-95">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-3 col-md-3">
                            <div className="banneritem__thumb banner-animation text-center p-relative">
                                <img src="/assets/img/banner/banner-2-01.jpg" alt="" />
                                <div className="banneritem__content">
                                    <Link href="/shop"><i className="far fa-long-arrow-right" /></Link>
                                    <p>19 Items</p>
                                    <h4 className="banneritem__content-tiele"><Link href="/shop">Pro Glasses</Link></h4>
                                </div>
                            </div>
                            <div className="banneritem__thumb banner-animation text-center p-relative">
                                <img src="/assets/img/banner/banner-2-02.jpg" alt="" />
                                <div className="banneritem__content">
                                    <Link href="/shop-2"><i className="far fa-long-arrow-right" /></Link>
                                    <p>22 Items</p>
                                    <h4 className="banneritem__content-tiele"><Link href="/shop">Casual Shoes</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="banneritem__thumb banner-animation text-center p-relative">
                                <img src="/assets/img/banner/banner-2-03.jpg" alt="" />
                                <div className="banneritem__content banner-center">
                                    <Link href="/shop-2"><i className="far fa-long-arrow-right" /></Link>
                                    <p>30 Items</p>
                                    <h4 className="banneritem__content-tiele"><Link href="/shop">Winter Jacket</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="banneritem__thumb banner-animation text-center p-relative">
                                <img src="/assets/img/banner/banner-2-04.jpg" alt="" />
                                <div className="banneritem__content">
                                    <Link href="/shop-2"><i className="far fa-long-arrow-right" /></Link>
                                    <p>13 Items</p>
                                    <h4 className="banneritem__content-tiele"><Link href="/shop">New Added</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
