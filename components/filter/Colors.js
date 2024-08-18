'use client'
import { useDispatch, useSelector } from "react-redux"
import { addColor } from "../../features/filterSlice"
import { colorCheck } from "../../features/productSlice"

const ColorLevel = () => {
    const { colorList } = useSelector((state) => state.product) || {}
    const dispatch = useDispatch()

    // dispatch product-type
    const colorHandler = (e, id) => {
        dispatch(addColor(e.target.value))
        dispatch(colorCheck(id))
    }

    return (
        <>
            {colorList?.map((item) => (
                <div className="form-check" key={item.id}>
                    <input
                        className="form-check-input"
                        id={`color${item.id}`}
                        type="checkbox"
                        value={item.value}
                        checked={item.isChecked || false}
                        onChange={(e) => colorHandler(e, item.id)}
                    />
                    <label className="form-check-label" htmlFor={`color${item.id}`}>
                        {item.name}
                    </label>
                </div>
            ))}

        </>
    )
}

export default ColorLevel
