'use client'
import { useDispatch, useSelector } from "react-redux"
import { addBrand } from "../../features/filterSlice"
import { brandCheck } from "../../features/productSlice"

const BrandLevel = () => {
    const { brandList } = useSelector((state) => state.product) || {}
    const dispatch = useDispatch()

    // dispatch product-type
    const brandHandler = (e, id) => {
        dispatch(addBrand(e.target.value))
        dispatch(brandCheck(id))
    }

    return (
        <>
            {brandList?.map((item) => (
                <div className="form-check" key={item.id}>
                    <input
                        className="form-check-input"
                        id={`brand${item.id}`}
                        type="checkbox"
                        value={item.value}
                        checked={item.isChecked || false}
                        onChange={(e) => brandHandler(e, item.id)}
                    />
                    <label className="form-check-label" htmlFor={`brand${item.id}`}>
                        {item.name}
                    </label>
                </div>
            ))}
        </>
    )
}

export default BrandLevel
