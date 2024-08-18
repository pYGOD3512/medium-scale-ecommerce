'use client'
import { reloadWishlist } from "@/features/wishlistSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function WishListShow() {
    const { wishlist } = useSelector((state) => state.wishlist) || {}
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(reloadWishlist())
    }, [dispatch, reloadWishlist])
    return (
        <>
            <span className="tp-product-count">{wishlist?.length}</span>
        </>
    )
}
