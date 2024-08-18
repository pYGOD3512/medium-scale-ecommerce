
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Error">
                <section className="erroe-area pt-70 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="eperror__wrapper text-center">
                                    <div className="tperror__thumb mb-35">
                                        <img src="/assets/img/icon/error.png" alt />
                                    </div>
                                    <div className="tperror__content">
                                        <h4 className="tperror__title mb-25">404. Page not found</h4>
                                        <p>Sorry, we couldn’t find the page you where looking for. We suggest that <br /> you return to homepage.</p>
                                        <Link href="/" className="tpsecondary-btn tp-color-btn tp-error-btn"><i className="fal fa-long-arrow-left" /> Back To Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}