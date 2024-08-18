
import Link from "next/link"

export default function Category() {
    return (
        <>
            <section className="category-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tpsection mb-40">
                                <h4 className="tpsection__title">Top <span> Categories <img src="/assets/img/icon/title-shape-01.jpg" alt="" /></span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="custom-row category-border pb-45 justify-content-xl-between">
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon p-relative">
                                <img src="/assets/img/svg/cat01.svg" alt="" className="fn__svg" />
                                <span>20</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop">Driftwood <br /> Table Decor</Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/svg/cat02.svg" alt="" className="fn__svg" />
                                <span>12</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop">Floor Driftwood <br /> Sculpture</Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/svg/cat03.svg" alt="" className="fn__svg" />
                                <span>03</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop">Driftwood <br /> Christmas Tree </Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/svg/cat04.svg" alt="" className="fn__svg" />
                                <span>09</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop"> Wooden <br /> Bluetooth Speaker </Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/svg/cat05.svg" alt="" className="fn__svg" />
                                <span>10</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop">Receivers <br />  Amplifiers</Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/svg/cat06.svg" alt="" className="fn__svg" />
                                <span>05</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/shop">Appetizer <br /> Plate Set </Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
