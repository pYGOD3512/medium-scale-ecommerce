import { configureStore } from "@reduxjs/toolkit"
import filterSlice from "./filterSlice"
import productSlice from "./productSlice"
import shopSlice from "./shopSlice"
import wishlistSlice from "./wishlistSlice"

export const store = configureStore({
    reducer: {
        product: productSlice,
        filter: filterSlice,
        shop: shopSlice,
        wishlist: wishlistSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
