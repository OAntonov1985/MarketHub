"use client"
import { createSlice } from "@reduxjs/toolkit";



let userNameInCookies



const initialState = {
    name: "MarketHub",
    userBasket: [],
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
        setUserBasket: (state, action) => {
            const arrayIndex = state.userBasket.findIndex(item => {
                return item.id === action.payload.id
            })
            if (arrayIndex === -1) {
                state.userBasket.push(action.payload);
            }
            else {
                state.userBasket[arrayIndex].number = state.userBasket[arrayIndex].number + 1;
                state.userBasket[arrayIndex].totalPrice = state.userBasket[arrayIndex].number * state.userBasket[arrayIndex].price;
            }



            console.log(action.payload.id)
            console.log(arrayIndex)
            // console.log(state.userBasket)
        }
    }

});

export const { increaseGood, totalGoods, reduceGood, setUserInfo, setUserName, setTotalPriseInAllBasket, setUserBasket } = userSlice.actions;

export default userSlice.reducer;