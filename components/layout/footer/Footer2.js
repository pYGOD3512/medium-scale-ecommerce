import Link from "next/link"

export default function Footer2() {
    return (
        <>
            <footer>
                <div className="footer-area secondary-footer black-bg-2 pt-65">
                    <div className="container">
                        <div className="main-footer pb-15 mb-30">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-1 mb-40">
                                        <div className="footer-logo mb-30">
                                            <Link href="/"><img src="/assets/img/logo/logo-white.png" alt="logo" /></Link>
                                        </div>
                                        <div className="footer-content">
                                            <p>Elegant pink origami design three <br /> dimensional view and decoration co-exist. <br />
                                                Great for adding a decorative touch to <br /> any room’s decor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-2 ml-30 mb-40">
                                        <h4 className="footer-widget__title mb-30">Information</h4>
                                        <div className="footer-widget__links">
                                            <ul>
                                                <li><Link href="#">Custom Service</Link></li>
                                                <li><Link href="#">FAQs</Link></li>
                                                <li><Link href="/track">Ordering Tracking</Link></li>
                                                <li><Link href="/contact">Contacts</Link></li>
                                                <li><Link href="#">Events</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-3 mb-40">
                                        <h4 className="footer-widget__title mb-30">My Account</h4>
                                        <div className="footer-widget__links">
                                            <ul>
                                                <li><Link href="/contact">Delivery Infomation</Link></li>
                                                <li><Link href="#">Privacy Policy</Link></li>
                                                <li><Link href="#">Discount</Link></li>
                                                <li><Link href="#">Custom Service</Link></li>
                                                <li><Link href="#">Terms  Condition</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-4 mb-40">
                                        <h4 className="footer-widget__title mb-30">Social Network</h4>
                                        <div className="footer-widget__links">
                                            <ul>
                                                <li><Link href="#"><i className="fab fa-facebook-f" />Facebook</Link></li>
                                                <li><Link href="#"><i className="fab fa-dribbble" />Dribbble</Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" />Twitter</Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" />Behance</Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" />Youtube</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-8">
                                    <div className="footer-widget footer-col-5 mb-40">
                                        <h4 className="footer-widget__title mb-30">Popular Keywords</h4>
                                        <div className="footer-widget__links keyword">
                                            <Link href="/shop">Makeup</Link>
                                            <Link href="/shop">Dresses For Girls</Link>
                                            <Link href="/shop">T-Shirts</Link>
                                            <Link href="/shop">Sandals</Link>
                                            <Link href="/shop">Headphones</Link>
                                            <Link href="/shop">Baby dolls</Link>
                                            <Link href="/shop">Blazers</Link>
                                            <Link href="/shop">For Men</Link>
                                            <Link href="/shop">Handbags</Link>
                                            <Link href="/shop">Ladies Watches</Link>
                                            <Link href="/shop">Bags</Link>
                                            <Link href="/shop">Sport Shoes</Link>
                                            <Link href="/shop">Reebok Shoes</Link>
                                            <Link href="/shop">Puma Shoes</Link>
                                            <Link href="/shop">Boxers</Link>
                                            <Link href="/shop">Wallets</Link>
                                            <Link href="/shop">Tops</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-cta pb-20">
                            <div className="row justify-content-between">
                                <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer-cta__contact">
                                        <div className="footer-cta__icon">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="footer-cta__text">
                                            <Link href="/tel:0123456">980. 029. 666. 99</Link>
                                            <span>Working 8:00 - 22:00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-8 col-md-8 col-sm-6">
                                    <div className="footer-cta__source">
                                        <div className="footer-cta__source-content">
                                            <h4 className="footer-cta__source-title">Download App on Mobile</h4>
                                            <p>15% discount on your first purchase</p>
                                        </div>
                                        <div className="footer-cta__source-thumb">
                                            <Link href="#"><img src="/assets/img/footer/f-google.jpg" alt="google" /></Link>
                                            <Link href="#"><img src="/assets/img/footer/f-app.jpg" alt="app" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright black-bg-2">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-7 col-md-5">
                                    <div className="footer-copyright__content">
                                        <span>Copyright {new Date().getFullYear()} <Link href="/">©Ninico</Link>. All rights reserved. Developed by <Link href="https://themeforest.net/user/alithemes/portfolio"> AliThemes</Link>.</span>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-7">
                                    <div className="footer-copyright__brand">
                                        <img src="/assets/img/footer/f-brand-icon-01.png" alt="footer-brand" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
