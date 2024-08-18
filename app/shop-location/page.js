
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ShopLocation() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Shop Location">
                <section className="location-area pt-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-12">
                                <div className="tpshop__search text-center pb-70">
                                    <form action="#">
                                        <input type="text" placeholder="Search here" />
                                        <button>Find Nearby Store<i className="fal fa-long-arrow-right" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <div className="tpshop__location d-block d-sm-flex align-items-center justify-content-between mb-30">
                                    <div className="tpshop__content">
                                        <h4 className="tpshop__title mb-15">Baldwin Hills Crenshaw Plaza</h4>
                                        <div className="tpshop__info">
                                            <ul>
                                                <li><i className="fal fa-map-marker-alt" /> <Link href="#">24/26 Strait Bargate, Boston, PE21, <br /> United Kingdom</Link></li>
                                                <li>
                                                    <i className="fal fa-phone" />
                                                    <Link href="/tel:0123456789">+098 (905) 786 897 8</Link>
                                                    <Link href="/tel:0123456789">6 - 146 - 389 - 5748</Link>
                                                </li>
                                                <li>
                                                    <i className="fal fa-clock" />
                                                    <span>Store Hours:</span>
                                                    <span>10 am - 10 pm EST, 7 days a week</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tpshop__thumb">
                                        <img src="/assets/img/shop/location-1.jpg" alt="shop" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <div className="tpshop__location d-block d-sm-flex align-items-center justify-content-between mb-30">
                                    <div className="tpshop__content">
                                        <h4 className="tpshop__title mb-15">Ninico Hills Crenshaw Plaza</h4>
                                        <div className="tpshop__info">
                                            <ul>
                                                <li><i className="fal fa-map-marker-alt" /> <Link href="#">36/26 Strait Bargate, Boston, PE21, <br /> United Kingdom</Link></li>
                                                <li>
                                                    <i className="fal fa-phone" />
                                                    <Link href="/tel:0123456789">+098 112 786 897 8</Link>
                                                    <Link href="/tel:0123456789">697 - 146 - 963 - 57</Link>
                                                </li>
                                                <li>
                                                    <i className="fal fa-clock" />
                                                    <span>Store Hours:</span>
                                                    <span>9 am - 10 pm EST, 5 days a week</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tpshop__thumb">
                                        <img src="/assets/img/shop/location-2.jpg" alt="shop" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <div className="tpshop__location d-block d-sm-flex align-items-center justify-content-between mb-30">
                                    <div className="tpshop__content">
                                        <h4 className="tpshop__title mb-15">Vegas BGM Crenshaw Plaza</h4>
                                        <div className="tpshop__info">
                                            <ul>
                                                <li><i className="fal fa-map-marker-alt" /> <Link href="#">40/26 Strait Bargate, Vegas, PE21, <br /> United Kingdom</Link></li>
                                                <li>
                                                    <i className="fal fa-phone" />
                                                    <Link href="/tel:0123456789">+098 (905) 786 897 8</Link>
                                                    <Link href="/tel:0123456789">648 85952 -555</Link>
                                                </li>
                                                <li>
                                                    <i className="fal fa-clock" />
                                                    <span>Store Hours:</span>
                                                    <span>10 am - 10 pm EST, 7 days a week</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tpshop__thumb">
                                        <img src="/assets/img/shop/location-3.jpg" alt="shop" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <div className="tpshop__location d-block d-sm-flex align-items-center justify-content-between mb-30">
                                    <div className="tpshop__content">
                                        <h4 className="tpshop__title mb-15">Bargate Cine Crenshaw Plaza</h4>
                                        <div className="tpshop__info">
                                            <ul>
                                                <li><i className="fal fa-map-marker-alt" /> <Link href="#">38/26 Strait Bargate, Point, PE21, <br /> United Kingdom</Link></li>
                                                <li>
                                                    <i className="fal fa-phone" />
                                                    <Link href="/tel:0123456789">+098 (905) 786 897 8</Link>
                                                    <Link href="/tel:0123456789">6 - 146 - 389 - 5748</Link>
                                                </li>
                                                <li>
                                                    <i className="fal fa-clock" />
                                                    <span>Store Hours:</span>
                                                    <span>10 am - 10 pm EST, 7 days a week</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tpshop__thumb">
                                        <img src="/assets/img/shop/location-4.jpg" alt="shop" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tpshop__location-map mt-40">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193313.696093143!2d-74.25983952323838!3d40.794422695521675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1663062642075!5m2!1sen!2sbd" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </section>

            </Layout>
        </>
    )
}