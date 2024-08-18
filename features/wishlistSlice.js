import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    wishlist: [],
};

export const shopSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addWishlist: (state, { payload }) => {
            const isWishlistExist = state.wishlist.some(
                (item) => item.id === payload.product.id
            );
            if (!isWishlistExist) {
                state.wishlist.push({
                    ...payload.product,
                    qty: payload?.qty ? payload.qty : 1,
                });
                toast.success("This item added to Wishlist.");
            } else {
                toast.error("This item is already in the Wishlist.");
            }
            localStorage.setItem("local-wishlist", JSON.stringify(state.wishlist));
        },
        deleteWishlist: (state, { payload }) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== payload);
            localStorage.setItem("local-wishlist", JSON.stringify(state.wishlist));
            toast.error(`Item ${payload} has been deleted.`);
        },
        addQty: (state, { payload }) => {
            state.wishlist = state.wishlist.filter((item) => {
                if (item.id === payload.id) {
                    item.qty = payload.qty;
                }
                return item;
            });
            localStorage.setItem("local-wishlist", JSON.stringify(state.wishlist));
        },
        reloadWishlist: (state, { payload }) => {
            const wishlist = JSON.parse(localStorage.getItem("local-wishlist"));
            if (wishlist) {
                state.wishlist = wishlist;
            }
        },
    },
});

export const { addWishlist, deleteWishlist, addQty, reloadWishlist } = shopSlice.actions;
export default shopSlice.reducer;
