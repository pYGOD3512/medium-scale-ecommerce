import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <section className="breadcrumb__area pt-60 pb-60 tp-breadcrumb__bg" data-background="/assets/img/banner/breadcrumb-01.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-12 col-md-12 col-12">
                            <div className="tp-breadcrumb">
                                <div className="tp-breadcrumb__link mb-10">
                                    <span className="breadcrumb-item-active"><Link href="/">Home</Link></span>
                                    <span>{breadcrumbTitle}</span>
                                </div>
                                <h2 className="tp-breadcrumb__title">{breadcrumbTitle}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
