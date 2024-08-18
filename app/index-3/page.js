
import Layout from "@/components/layout/Layout"
import Banner2 from "@/components/sections/Banner2"
import Blog2 from "@/components/sections/Blog2"
import Brand2 from "@/components/sections/Brand2"
import DealProduct2 from "@/components/sections/DealProduct2"
import Product3 from "@/components/sections/Product3"
import Services from "@/components/sections/Services"
import Slider3 from "@/components/sections/Slider3"
import WhiteProduct from "@/components/sections/WhiteProduct"
import Link from "next/link"
export default function Home3() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Slider3 />
                <Services />
                <Product3 />
                <Banner2 />
                <DealProduct2 />
                <WhiteProduct />
                <Brand2 />
                <Blog2 />
            </Layout>
        </>
    )
}