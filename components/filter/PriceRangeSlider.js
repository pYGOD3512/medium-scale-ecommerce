'use client'
import { useEffect, useState } from "react"
import InputRange from "react-input-range"
import { useDispatch, useSelector } from "react-redux"
import { addprice } from "../../features/filterSlice"

const PriceRangeSlider = () => {
    const { shopList } = useSelector((state) => state.filter)

    const [price, setprice] = useState({
        min: shopList.price.min,
        max: shopList.price.max,
    })

    const dispatch = useDispatch()

    // price handler
    const handleOnChange = ({ min, max }) => {
        dispatch(addprice({ min, max }))
    }

    useEffect(() => {
        setprice({
            min: shopList.price.min,
            max: shopList.price.max,
        })
    }, [setprice, shopList])

    return (
        <div className="range-slider-one">
            <InputRange
                formatLabel={(value) => ``}
                minValue={0}
                maxValue={100}
                value={{ min: price.min, max: price.max }}
                onChange={(value) => handleOnChange(value)}
            />

            <div className="input-outer">
                <div className="amount-outer">
                    <span className="area-amount">{price.max}$ </span>

                </div>
            </div>
        </div>
    )
}

export default PriceRangeSlider
