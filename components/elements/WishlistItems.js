'use client'
import { addCart } from "@/features/shopSlice"
import { addQty, deleteWishlist } from "@/features/wishlistSlice"
import Link from "next/link"
import products from "@/data/products"
import { useDispatch, useSelector } from "react-redux"

const WishlistItems = () => {
    const { wishlist } = useSelector((state) => state.wishlist) || {}

    const dispatch = useDispatch()

    const addToCart = (id) => {
        const item = products?.find((item) => item.id === id)
        dispatch(addCart({ product: item }))
    }

    // delete cart item
    const deleteCartHandler = (id) => {
        dispatch(deleteWishlist(id))
    }

    // qty handler
    const qtyHandler = (id, qty) => {
        dispatch(addQty({ id, qty }))
    }

    console.log(wishlist)

    return (
        <>
            {wishlist?.map((item) => (
                <tr className="cart-item" key={item.id}>
                    <td className="product-thumbnail">
                        <Link href={`/shop/${item.id}`}>
                            <img
                                src={`/assets/img/product/${item.imgf}`} alt="cart added product" />
                        </Link>
                    </td>

                    <td className="product-name">
                        <Link href={`/shop/${item.id}`}>
                            {item.title}
                        </Link>
                    </td>

                    <td className="product-price">${item.price.max}</td>

                    <td className="product-quantity">
                        <div className="item-quantity">
                            <input
                                type="number"
                                className="qty"
                                name="qty"
                                defaultValue={item?.qty}
                                min={1}
                                onChange={(e) =>
                                    qtyHandler(item?.id, e.target.value)
                                }
                            />
                        </div>
                    </td>

                    <td className="product-subtotal">
                        <span className="amount">
                            ${(item?.qty * item?.price.max).toFixed(2)}
                        </span>
                    </td>
                    <td className="product-add-to-cart">
                        <a onClick={() => addToCart(item.id)} className="tp-btn tp-color-btn  tp-wish-cart banner-animation">Add To Cart</a>
                    </td>
                    <td className="product-remove">
                        <button
                            onClick={() => deleteCartHandler(item?.id)}
                            className="remove"
                        >
                            <span className="flaticon-dustbin">Remove</span>
                        </button>
                    </td>
                </tr>
            ))}
        </>
    )
}

export default WishlistItems
