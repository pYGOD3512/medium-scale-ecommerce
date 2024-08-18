import Link from "next/link"
import Countdown from "../elements/CountDown"
import VideoPopup from "../elements/VideoPopup"


export default function DealProduct4() {
    const currentTime = new Date()
    return (
        <>
            <section className="dealproduct-area tp-fourth-deal video-area platinam-light p-relative">
                <div className="tpvideo-bg" data-background="assets/img/slider/video-bg-01.jpg">
                    <VideoPopup style={2} />
                </div>
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-xxl-5 col-lg-6 col-md-12">
                            <div className="tpdealcontact pt-130 pb-140">
                                <div className="tpdealcontact__price mb-5">
                                    <span>$49.00</span>
                                    <del>$59.00</del>
                                </div>
                                <div className="tpdealcontact__text mb-30">
                                    <h4 className="tpdealcontact__title mb-20"><Link href="/shop-details-2">Packet Grocery Products</Link></h4>
                                    <p>Elegant pink origami design three-dimensional view and decoration co-exist.
                                        Great for adding a decorative touch to any room’s decor.</p>
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
                        <div className="col-xxl-7 col-lg-6 col-md-12" />
                    </div>
                </div>
            </section>
        </>
    )
}
