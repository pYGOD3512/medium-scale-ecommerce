'use client'
import Layout from "@/components/layout/Layout"
import FilterShopBox from "@/components/shop/FilterShopBox"
import FilterSidebar from "@/components/shop/FilterSidebar"
import { useState } from "react"
export default function Shop2() {
    const [activeIndex, setActiveIndex] = useState(2)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Shop">
                <div className="product-area pt-70 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-12">
                                <div className="product-sidebar__product-item">
                                    <FilterShopBox itemStart={10} itemEnd={18} />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <div className="tpsidebar product-sidebar__product-category">
                                    <FilterSidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}