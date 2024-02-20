"use client"
import { createSlice } from "@reduxjs/toolkit";



let userNameInCookies



const initialState = {
    name: "MarketHub",
    userInfo: {},
    userName: userNameInCookies === undefined ? 0 : userNameInCookies,
    loading: false,
    totalPriseInAllBasket: 0,
    quantityOfGoods: 0
};

const userSlice = createSlice({
    name: "MarketHub",
    initialState,
    reducers: {
        increaseGood: (state) => {
            state.quantityOfGoods++;
        },
        totalGoods: (state, action) => {
            state.quantityOfGoods = action.payload;
        },
        reduceGood: (state, action) => {
            console.log(action.payload)
            if (state.quantityOfGoods >= 1) {
                state.quantityOfGoods = state.quantityOfGoods - action.payload;
            }
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setTotalPriseInAllBasket: (state, action) => {
            state.totalPriseInAllBasket = action.payload
        },
    }

});

export const { increaseGood, totalGoods, reduceGood, setUserInfo, setUserName, setTotalPriseInAllBasket } = userSlice.actions;

export default userSlice.reducer;