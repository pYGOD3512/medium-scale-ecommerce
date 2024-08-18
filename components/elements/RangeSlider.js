'use client'
import { useState } from "react"

export default function RangeSlider() {
    const [value, setValue] = useState(25000)

    const handleChange = e => {
        setValue(Math.ceil(e.target.value / 5) * 5)
    }
    return (
        <>
            <div className="productsidebar__range">
                <div className="price-filter mt-10">
                    <input
                        type="range"
                        min="1"
                        max="50000"
                        value={value}
                        className="range"
                        onChange={e => handleChange(e)}
                    />
                    <p>{value}</p>
                </div>
            </div>
        </>
    )
}
