import Link from "next/link"
const ShopCard = ({ item, addToCart, addToWishlist }) => {
    return (
        <>
            <div className="col">
                <div className="tpproduct tpproductitem mb-15 p-relative">
                    <div className="tpproduct__thumb">
                        <div className="tpproduct__thumbitem p-relative">
                            <Link href={`/shop/${item.id}`}>
                                <img src={`/assets/img/product/${item.imgf}`} alt="product-thumb" />
                                <img className="thumbitem-secondary" src={`/assets/img/product/${item.imgb}`} alt="product-thumb" />
                            </Link>
                            <div className="tpproduct__thumb-bg">
                                <div className="tpproductactionbg">
                                    <a onClick={() => addToCart(item.id)} className="add-to-cart"><i className="fal fa-shopping-basket" /></a>
                                    <Link href="#"><i className="fal fa-exchange" /></Link>
                                    <Link href="#"><i className="fal fa-eye" /></Link>
                                    <a onClick={() => addToWishlist(item.id)} className="wishlist" ><i className="fal fa-heart" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tpproduct__content-area">
                        <h3 className="tpproduct__title mb-5"><Link href={`/shop/${item.id}`}>{item.title}</Link></h3>
                        <div className="tpproduct__priceinfo p-relative">
                            <div className="tpproduct__ammount">
                                <span>${item.price.max}.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="tpproduct__ratingarea">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="tpproductdot">
                                <Link className="tpproductdot__variationitem" href={`/shop/${item.id}`}>
                                    <div className="tpproductdot__termshape">
                                        <span className="tpproductdot__termshape-bg" />
                                        <span className="tpproductdot__termshape-border" />
                                    </div>
                                </Link>
                                <Link className="tpproductdot__variationitem" href={`/shop/${item.id}`}>
                                    <div className="tpproductdot__termshape">
                                        <span className="tpproductdot__termshape-bg red-product-bg" />
                                        <span className="tpproductdot__termshape-border red-product-border" />
                                    </div>
                                </Link>
                                <Link className="tpproductdot__variationitem" href={`/shop/${item.id}`}>
                                    <div className="tpproductdot__termshape">
                                        <span className="tpproductdot__termshape-bg orange-product-bg" />
                                        <span className="tpproductdot__termshape-border orange-product-border" />
                                    </div>
                                </Link>
                                <Link className="tpproductdot__variationitem" href={`/shop/${item.id}`}>
                                    <div className="tpproductdot__termshape">
                                        <span className="tpproductdot__termshape-bg purple-product-bg" />
                                        <span className="tpproductdot__termshape-border purple-product-border" />
                                    </div>
                                </Link>
                            </div>
                            <div className="tpproduct__rating">
                                <ul>
                                    <li>
                                        <Link href="#"><i className="fas fa-star" /></Link>
                                        <Link href="#"><i className="fas fa-star" /></Link>
                                        <Link href="#"><i className="fas fa-star" /></Link>
                                        <Link href="#"><i className="fas fa-star" /></Link>
                                        <Link href="#"><i className="far fa-star" /></Link>
                                    </li>
                                    <li>
                                        <span>(81)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCard