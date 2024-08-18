'use client'
import { useDispatch, useSelector } from "react-redux"
import { addCategory } from "../../features/filterSlice"
import { categoryCheck } from "../../features/productSlice"

const CategoryLevel = () => {
    const { categoryList } = useSelector((state) => state.product) || {}
    const dispatch = useDispatch()

    // dispatch product-type
    const categoryHandler = (e, id) => {
        dispatch(addCategory(e.target.value))
        dispatch(categoryCheck(id))
    }

    return (
        <>
            {categoryList?.map((item) => (
                <div className="form-check" key={item.id}>
                    <input
                        className="form-check-input"
                        id={`category${item.id}`}
                        type="checkbox"
                        value={item.value}
                        checked={item.isChecked || false}
                        onChange={(e) => categoryHandler(e, item.id)}
                    />
                    <label className="form-check-label" htmlFor={`category${item.id}`}>
                        {item.name}
                    </label>
                </div>
            ))}
        </>
    )
}

export default CategoryLevel
