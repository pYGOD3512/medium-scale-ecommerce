import Link from "next/link"
const ShopCardList = ({ item, addToCart, addToWishlist }) => {
    return (
        <>
            <div className="row mb-40">
                <div className="col-lg-4 col-md-12">
                    <div className="tpproduct__thumb">
                        <div className="tpproduct__thumbitem p-relative">
                            <Link href="/shop-details">
                                <img src={`/assets/img/product/${item.imgf}`} alt="product-thumb" />
                                <img className="thumbitem-secondary" src={`/assets/img/product/${item.imgb}`} alt="product-thumb" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12">
                    <div className="filter-product ml-20 pt-30">
                        <h3 className="filter-product-title"><Link href="/shop-details">Miko Wooden Bluetooth Shirt</Link></h3>
                        <div className="tpproduct__ammount">
                            <span>$31.00</span>
                            <del>$25.00</del>
                        </div>
                        <div className="tpproduct__rating mb-15">
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
                        <p>Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusa ntium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volup tatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione volup tatem sequi nesciunt.</p>
                        <p>Once that's determined, you need to come up with a name and set up a legal structure, such as a corporation. Next, set an ecommerce site with a payment gateway. For instance, a small business owner who runs a dress shop can set up a website promoting their clothing and other related products online and allow customers to make payments with a credit card or through a payment processing service, such as PayPal.</p>
                        <div className="tpproduct__action">
                            <Link className="comphare" href="#"><i className="fal fa-exchange" /></Link>
                            <Link className="quckview" href="#"><i className="fal fa-eye" /></Link>
                            <a onClick={() => addToWishlist(item.id)} className="wishlist" ><i className="fal fa-heart" /></a>
                            <a onClick={() => addToCart(item.id)}><i className="fal fa-shopping-basket" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCardList