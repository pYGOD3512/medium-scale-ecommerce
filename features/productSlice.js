import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    latestJob: [],
    categoryList: [
        { id: 1, name: "Kids", value: "kids", isChecked: false, },
        { id: 2, name: "Mens", value: "mens", isChecked: false, },
        { id: 3, name: "Womens", value: "womens", isChecked: false, }
    ],
    colorList: [
        { id: 1, name: "Black", value: "black", isChecked: false, },
        { id: 2, name: "Blue", value: "blue", isChecked: false, },
        { id: 3, name: "Gray", value: "gray", isChecked: false, },
        { id: 4, name: "Green", value: "green", isChecked: false, },
        { id: 5, name: "Red", value: "red", isChecked: false, }
    ],
    brandList: [
        { id: 1, name: "Adidas", value: "adidas", isChecked: false, },
        { id: 2, name: "Balenciaga", value: "balenciaga", isChecked: false, },
        { id: 3, name: "Balmain", value: "balmain", isChecked: false, },
        { id: 4, name: "Burberry", value: "burberry", isChecked: false, },
        { id: 5, name: "Chloe", value: "chloe", isChecked: false, }
    ]
}

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        clearCategoryToggle: (state) => {
            state?.categoryList?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },
        categoryCheck: (state, { payload }) => {
            state?.categoryList?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },

        clearColorToggle: (state) => {
            state?.colorList?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },
        colorCheck: (state, { payload }) => {
            state?.colorList?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearBrandToggle: (state) => {
            state?.brandList?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },
        brandCheck: (state, { payload }) => {
            state?.brandList?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },

    },
})

export const {
    clearCategoryToggle,
    categoryCheck,
    clearColorToggle,
    colorCheck,
    clearBrandToggle,
    brandCheck,
} = jobSlice.actions
export default jobSlice.reducer
