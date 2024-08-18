
import Link from "next/link"
import Countdown from "../elements/CountDown"

export default function DealProduct1() {
    const currentTime = new Date()
    return (
        <>
            <section className="dealproduct-area pb-95">
                <div className="container">
                    <div className="theme-bg pt-40 pb-40">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="tpdealproduct">
                                    <div className="tpdealproduct__thumb p-relative text-center">
                                        <img src="/assets/img/floded/floded-01.png" alt="dealproduct-thumb" />
                                        <div className="tpdealproductd__offer">
                                            <h5 className="tpdealproduct__offer-price"><span>From</span>$49</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="tpdealcontact pt-30">
                                    <div className="tpdealcontact__price mb-5">
                                        <span>$49.00</span>
                                        <del>$59.00</del>
                                    </div>
                                    <div className="tpdealcontact__text mb-30">
                                        <h4 className="tpdealcontact__title mb-10"><Link href="/shop-details">Pro2 Abstract
                                            Folded Pots</Link></h4>
                                        <p>Elegant pink origami design three-dimensional view and decoration co-exist. Great
                                            for adding a decorative touch to any room’s decor. Wonderful accent piece for
                                            coffee tables or side tables.</p>
                                    </div>
                                    <div className="tpdealcontact__progress mb-30">
                                        <div className="progress">
                                            <div className="progress-bar w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="tpdealcontact__count">
                                        <div className="tpdealcontact__countdown">
                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                        </div>
                                        <i>Remains until the <br /> end of the offer</i>
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
