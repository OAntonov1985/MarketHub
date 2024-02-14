"use client"
import { createSlice } from "@reduxjs/toolkit";


let basketArr
let quantityOfGoods
if (typeof window !== 'undefined') {
    const BASKET = localStorage.getItem("BASKET");
    basketArr = JSON.parse(BASKET);
    if (basketArr) {
        quantityOfGoods = basketArr.reduce((accum, item) => accum = accum + item.number, 0)
    }
}


const initialState = {
    name: "MarketHub",
    entities: [],
    loading: false,
    value: 10,
    quantityOfGoods: quantityOfGoods === undefined ? 0 : quantityOfGoods
    // quantityOfGoods: 0
};

const userSlice = createSlice({
    name: "MarketHub",
    initialState,
    reducers: {
        increaseGood: (state) => {
            state.quantityOfGoods++;
        },
        totalGoods: (state, action) => {
            // console.log(action.payload)
            state.quantityOfGoods = action.payload;
        },
        reduceGood: (state) => {
            console.log(state.quantityOfGoods)
            if (state.quantityOfGoods > 1) {
                state.quantityOfGoods--;
            }

        }
    }

});

export const { increaseGood, totalGoods, reduceGood } = userSlice.actions;

export default userSlice.reducer;