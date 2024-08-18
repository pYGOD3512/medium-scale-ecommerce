import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    shopList: {
        price: {
            min: 0,
            max: 100,
        },
        category: [],
        categorySelect: "",

        color: [],
        colorSelect: "",

        brand: [],
        brandSelect: "",
    },
    shopSort: {
        sort: "",
        perPage: {
            start: 0,
            end: 0,
        },
    },
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addprice: (state, { payload }) => {
            state.shopList.price.min = payload.min
            state.shopList.price.max = payload.max
        },

        addCategory: (state, { payload }) => {
            const isExist = state.shopList.category.includes(payload)
            if (!isExist) {
                state.shopList.category.push(payload)
            } else {
                state.shopList.category = state.shopList.category.filter(
                    (item) => item !== payload
                )
            }
        },
        clearCategory: (state) => {
            state.shopList.category = []
        },

        addColor: (state, { payload }) => {
            const isExist = state.shopList.color.includes(payload)
            if (!isExist) {
                state.shopList.color.push(payload)
            } else {
                state.shopList.color = state.shopList.color.filter(
                    (item) => item !== payload
                )
            }
        },
        clearColor: (state) => {
            state.shopList.color = []
        },

        addBrand: (state, { payload }) => {
            const isExist = state.shopList.brand.includes(payload)
            if (!isExist) {
                state.shopList.brand.push(payload)
            } else {
                state.shopList.brand = state.shopList.brand.filter(
                    (item) => item !== payload
                )
            }
        },
        clearBrand: (state) => {
            state.shopList.brand = []
        },


        addSort: (state, { payload }) => {
            state.shopSort.sort = payload
        },
        addPerPage: (state, { payload }) => {
            state.shopSort.perPage.start = payload.start
            state.shopSort.perPage.end = payload.end
        },
    },
})

export const {
    addprice,
    addCategory,
    clearCategory,

    addColor,
    clearColor,

    addBrand,
    clearBrand,


    addSort,
    addPerPage,
} = filterSlice.actions
export default filterSlice.reducer
