import CartShow from "@/components/elements/CartShow"
import Link from "next/link"
import HeaderMobSticky from "../HeaderMobSticky"
import HeaderSticky from "../HeaderSticky"
import HeaderTabSticky from "../HeaderTabSticky"

export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    return (
        <>
            <header className="platinam-light">
                <div className="header-top platinam-bg platinam-header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="header-welcome-text">
                                    <span>Free shipping on all U.S orders</span>
                                    <b>$50+</b>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 d-none d-sm-block">
                                <div className="headertoplag d-flex align-items-center justify-content-end">
                                    <div className="menu-top-social">
                                        <Link href="#">Fb.</Link>
                                        <Link href="#">Tw.</Link>
                                        <Link href="#">Be.</Link>
                                        <Link href="#">Yu.</Link>
                                        <Link href="#">Ln.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainmenuarea platinam-menuarea mt-30 d-none d-xl-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="mainmenu d-flex align-items-center">
                                    <div className="mainmenu__search">
                                        <form action="#">
                                            <div className="mainmenu__search-bar p-relative">
                                                <button className="mainmenu__search-icon"><i className="fal fa-search" /></button>
                                                <input type="text" placeholder="Search products..." />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="mainmenu__main text-center">
                                    <div className="main-logo">
                                        <Link href="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="header-meta d-flex align-items-center justify-content-end ml-25">
                                    <div className="header-meta__social d-flex align-items-center">
                                        <button className="header-cart p-relative tp-cart-toggle" onClick={handleCartSidebar}>
                                            <i className="fal fa-shopping-cart" />
                                            <CartShow />
                                        </button>
                                        <Link href="/sign-in"><i className="fal fa-user" /></Link>
                                        <Link href="/wishlist"><i className="fal fa-heart" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-menu-area mt-15 d-none d-xl-block">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="menu-area-4">
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
