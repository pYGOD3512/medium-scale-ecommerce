import CartShow from "@/components/elements/CartShow"
import WishListShow from "@/components/elements/WishListShow"
import Link from "next/link"
import HeaderMobSticky from "../HeaderMobSticky"
import HeaderSticky from "../HeaderSticky"
import HeaderTabSticky from "../HeaderTabSticky"

export default function Header5({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    return (
        <>
            <header>
                <div className="header-top theme-bg-2 red-header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 d-none  d-lg-block">
                                <div className="headertoplag ">
                                    <div className="menu-top-social">
                                        <Link href="/about">About Us</Link>
                                        <Link href="/sign-in">My account</Link>
                                        <Link href="/wishlist">Wishlist </Link>
                                        <Link href="/track">Order Tracking</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="header-welcome-text text-end">
                                    <span>Enjoy free shipping on orders $100  up.</span>
                                    <Link href="/shop-2">Shop Now<i className="fal fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className="logo-area d-none d-xl-block mainmenu-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3">
                                <div className="logo">
                                    <Link href="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="has-dropdown">
                                                <Link href="/">Home</Link>
                                                <ul className="submenu">
                                                    <li><Link href="/">Wooden  Home</Link></li>
                                                    <li><Link href="/index-2">Fashion Home</Link></li>
                                                    <li><Link href="/index-3">Furniture Home</Link></li>
                                                    <li><Link href="/index-4">Cosmetics Home</Link></li>
                                                    <li><Link href="/index-5">Food Grocery</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link href="/shop">Shop</Link>
                                                <ul className="submenu">
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
                                            </li>
                                            <li className="has-dropdown has-megamenu">
                                                <Link href="/about">Pages</Link>
                                                <ul className="submenu mega-menu">
                                                    <li>
                                                        <a className="mega-menu-title">Page layout</a>
                                                        <ul>
                                                            <li><Link href="/shop">Shop filters v1</Link></li>
                                                            <li><Link href="/shop-2">Shop filters v2</Link></li>
                                                            <li><Link href="/shop-details">Shop sidebar</Link></li>
                                                            <li><Link href="/shop-details-2">Shop Right sidebar</Link></li>
                                                            <li><Link href="/shop-location">Shop List view</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="mega-menu-title">Page layout</a>
                                                        <ul>
                                                            <li><Link href="/about">About</Link></li>
                                                            <li><Link href="/cart">Cart</Link></li>
                                                            <li><Link href="/checkout">Checkout</Link></li>
                                                            <li><Link href="/sign-in">Sign In</Link></li>
                                                            <li><Link href="/sign-in">Log In</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="mega-menu-title">Page type</a>
                                                        <ul>
                                                            <li><Link href="/track">Product Track</Link></li>
                                                            <li><Link href="/wishlist">Wishlist</Link></li>
                                                            <li><Link href="/not-found">404 / Error</Link></li>
                                                            <li><Link href="/coming-soon">Coming Soon</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link href="/blog">Blog</Link>
                                                <ul className="submenu">
                                                    <li><Link href="/blog">Blog</Link></li>
                                                    <li><Link href="/blog-details">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-9">
                                <div className="header-meta-info d-flex align-items-center justify-content-end">
                                    <div className="header-meta__social  d-flex align-items-center">
                                        <button className="header-cart p-relative tp-cart-toggle" onClick={handleCartSidebar}>
                                            <i className="fal fa-shopping-cart" />
                                            <CartShow />
                                        </button>
                                        <Link href="/sign-in"><i className="fal fa-user" /></Link>
                                        <Link href="/wishlist" className="header-cart p-relative tp-cart-toggle">
                                            <i className="fal fa-heart" />
                                            <WishListShow />
                                        </Link>
                                    </div>
                                    <div className="header-meta__search-5 ml-25">
                                        <div className="header-search-bar-5">
                                            <form action="#">
                                                <div className="search-info-5 p-relative">
                                                    <button className="header-search-icon-5"><i className="fal fa-search" /></button>
                                                    <input type="text" placeholder="Search products..." />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <HeaderSticky scroll={scroll} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderTabSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderMobSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
        </>
    )
}
