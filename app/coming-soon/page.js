import Countdown from "@/components/elements/CountDown"
import Link from "next/link"

export default function ComingSoon() {
    const currentTime = new Date()
    return (
        <>
            <main>

                <section className="coming-soon-area tpcoming__bg" style={{ backgroundImage: 'url("/assets/img/banner/comming-soon-1.jpg")' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="tpcoming__area text-center">
                                    <div className="tpcoming__logo">
                                        <Link href="/"><img src="/assets/img/logo/c-logo.png" alt="logo" /></Link>
                                    </div>
                                    <div className="tpcoming__content">
                                        <span>Coming Soon!</span>
                                        <h4 className="tpcoming__title mb-50">We are Coming Soon</h4>
                                    </div>
                                    <div className="tpcoming__count">
                                        <div className="tpcoming__countdown">
                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                        </div>
                                    </div>
                                    <div className="tpcoming__submit">
                                        <form action="#">
                                            <input type="email" placeholder="Email address" />
                                            <span><i className="far fa-envelope" /></span>
                                            <button>Subscribe Now <i className="far fa-long-arrow-right" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* coming-soon-area-end */}
            </main>

        </>
    )
}