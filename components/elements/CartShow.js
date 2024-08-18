'use client'
import { reloadCart } from "@/features/shopSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function CartShow() {
    const { cart } = useSelector((state) => state.shop) || {}
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(reloadCart())
    }, [dispatch, reloadCart])
    return (
        <>
            <span className="tp-product-count">{cart?.length}</span>
        </>
    )
}
