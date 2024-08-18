
import Layout from "@/components/layout/Layout"
import Banner3 from "@/components/sections/Banner3"
import Blog3 from "@/components/sections/Blog3"
import Brand3 from "@/components/sections/Brand3"
import DealProduct3 from "@/components/sections/DealProduct3"
import Features from "@/components/sections/Features"
import PlatinamProduct from "@/components/sections/PlatinamProduct"
import Slider4 from "@/components/sections/Slider4"
import Testimonial1 from "@/components/sections/Testimonial1"
import Link from "next/link"
export default function Home4() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Slider4 />
                <Brand3 />
                <Banner3 />
                <PlatinamProduct />
                <Features />
                <DealProduct3 />
                <Testimonial1 />
                <Blog3 />
            </Layout>
        </>
    )
}