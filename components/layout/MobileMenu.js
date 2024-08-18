'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu mean-container">
                <div className="mean-bar">
                    <Link href="#" className="meanmenu-reveal">
                        <span><span><span /></span></span>
                    </Link>
                    <nav className="mean-nav">
                        <ul>
                            <li className="has-dropdown">
                                <Link href="/">Home</Link>
                                <ul className="submenu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <li><Link href="/">Wooden  Home</Link></li>
                                    <li><Link href="/index-2">Fashion Home</Link></li>
                                    <li><Link href="/index-3">Furniture Home</Link></li>
                                    <li><Link href="/index-4">Cosmetics Home</Link></li>
                                    <li><Link href="/index-5">Food Grocery</Link></li>
                                </ul>
                                <Link className="mean-expand" onClick={() => handleClick(1)} href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></Link>
                            </li>
                            <li className="has-dropdown">
                                <Link href="/shop">Shop</Link>
                                <ul className="submenu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <li><Link href="/shop">Shop</Link></li>
                                    <li><Link href="/shop-2">Shop 2</Link></li>
                                    <li><Link href="/shop-details">Shop Details </Link></li>
                                    <li><Link href="/shop-details-2">Shop Details 2</Link></li>
                                    <li><Link href="/shop-location">Shop Location</Link></li>
                                    <li><Link href="/cart">Cart</Link></li>
                                    <li><Link href="/sign-in">Sign In</Link></li>
                                    <li><Link href="/checkout">Checkout</Link></li>
                                    <li><Link href="/wishlist">Wishlist</Link></li>
                                    <li><Link href="/track">Product Track</Link></li>
                                </ul>
                                <Link className="mean-expand" onClick={() => handleClick(2)} href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></Link>
                            </li>
                            <li className="has-dropdown has-megamenu">
                                <Link href="/about">Pages</Link>
                                <ul className="submenu mega-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>

                                    <li><Link href="/shop">Shop filters v1</Link></li>
                                    <li><Link href="/shop-2">Shop filters v2</Link></li>
                                    <li><Link href="/shop-details">Shop sidebar</Link></li>
                                    <li><Link href="/shop-details-2">Shop Right sidebar</Link></li>
                                    <li><Link href="/shop-location">Shop List view</Link></li>

                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/cart">Cart</Link></li>
                                    <li><Link href="/checkout">Checkout</Link></li>
                                    <li><Link href="/sign-in">Sign In</Link></li>
                                    <li><Link href="/sign-in">Log In</Link></li>

                                    <li><Link href="/track">Product Track</Link></li>
                                    <li><Link href="/wishlist">Wishlist</Link></li>
                                    <li><Link href="/not-found">404 / Error</Link></li>
                                    <li><Link href="/coming-soon">Coming Soon</Link></li>

                                </ul>
                                <Link className="mean-expand" onClick={() => handleClick(3)} href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></Link>
                            </li>
                            <li className="has-dropdown">
                                <Link href="/blog">Blog</Link>
                                <ul className="submenu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/blog-details">Blog Details</Link></li>
                                </ul>
                                <Link className="mean-expand" onClick={() => handleClick(4)} href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></Link></li>
                            <li className="mean-last"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav></div></div>

        </>
    )
}
