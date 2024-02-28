"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "MarketHub",
    userBasket: [],
    userFavorite: [],
    userName: "",
    loading: false,
    totalPriseInAllBasket: 0,
    quantityOfGoods: 0,
    quantityOfFavorite: 0
};


const userSlice = createSlice({
    name: "MarketHub",
    initialState,
    reducers: {
        totalGoods: (state, action) => {
            state.quantityOfGoods = action.payload;
        },
        reduceGood: (state, action) => {
            const arrayIndex = state.userBasket.findIndex(item => {
                return item.id === action.payload
            })

            if (arrayIndex !== -1 && state.userBasket[arrayIndex].number > 1) {
                state.userBasket[arrayIndex].number = state.userBasket[arrayIndex].number - 1
                state.userBasket[arrayIndex].totalPrice = state.userBasket[arrayIndex].number * state.userBasket[arrayIndex].price
            }
            const updatedBasketJSON = JSON.stringify(state.userBasket);
            localStorage.setItem('BASKET', updatedBasketJSON);

            const newTotalGoods = state.userBasket.reduce((accum, item) => accum = accum + item.number, 0);
            state.quantityOfGoods = newTotalGoods;
            localStorage.setItem('totalGoods', newTotalGoods);

            const newTotalPriseInAllBasket = state.userBasket.reduce((accum, item) => accum = accum + (item.price * item.number), 0);
            state.totalPriseInAllBasket = newTotalPriseInAllBasket;
            localStorage.setItem('totalPriseInAllBasket', newTotalPriseInAllBasket);
        },

        deleteItemInBasket: (state, action) => {
            const arrayIndex = state.userBasket.findIndex(item => {
                return item.id === action.payload
            });
            if (arrayIndex !== -1) {
                const newArray = state.userBasket.splice(arrayIndex, 1);

                const updatedBasketJSON = JSON.stringify(state.userBasket);
                localStorage.setItem('BASKET', updatedBasketJSON);

                const newTotalGoods = state.userBasket.reduce((accum, item) => accum = accum + item.number, 0);
                state.quantityOfGoods = newTotalGoods;
                localStorage.setItem('totalGoods', newTotalGoods);

                const newTotalPriseInAllBasket = state.userBasket.reduce((accum, item) => accum = accum + (item.price * item.number), 0);
                state.totalPriseInAllBasket = newTotalPriseInAllBasket;
                localStorage.setItem('totalPriseInAllBasket', newTotalPriseInAllBasket);
            }
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setTotalPriseInAllBasket: (state, action) => {
            state.totalPriseInAllBasket = action.payload
        },
        setInitialBasket: (state, action) => {
            state.userBasket = action.payload
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
            const updatedBasketJSON = JSON.stringify(state.userBasket);
            localStorage.setItem('BASKET', updatedBasketJSON);

            const newTotalGoods = state.userBasket.reduce((accum, item) => accum = accum + item.number, 0);
            state.quantityOfGoods = newTotalGoods;
            localStorage.setItem('totalGoods', newTotalGoods);

            const newTotalPriseInAllBasket = state.userBasket.reduce((accum, item) => accum = accum + (item.price * item.number), 0);
            state.totalPriseInAllBasket = newTotalPriseInAllBasket;
            localStorage.setItem('totalPriseInAllBasket', newTotalPriseInAllBasket);
        },
        setUserFavorite: (state, action) => {
            const arrayIndex = state.userFavorite.findIndex(item => {
                return item.id === action.payload.id
            })
            if (arrayIndex === -1) {
                const newArrayFavorite = state.userFavorite;
                newArrayFavorite.push(action.payload)
                state.userFavorite = newArrayFavorite;

                const updatedUserFavorite = JSON.stringify(state.userFavorite);
                localStorage.setItem('FAVORITE', updatedUserFavorite);

                state.quantityOfFavorite = state.quantityOfFavorite + 1;
                const updatedUserTotalFavorite = JSON.stringify(state.quantityOfFavorite);
                localStorage.setItem('totalFavorite', updatedUserTotalFavorite);
            }
            else if (arrayIndex !== -1) {
                state.userFavorite.splice(arrayIndex, 1);

                const updatedUserFavorite = JSON.stringify(state.userFavorite);
                localStorage.setItem('FAVORITE', updatedUserFavorite);

                state.quantityOfFavorite = state.quantityOfFavorite - 1;
                const updatedUserTotalFavorite = JSON.stringify(state.quantityOfFavorite);
                localStorage.setItem('totalFavorite', updatedUserTotalFavorite);
            }

        },
        setinitialFavorite: (state, action) => {
            state.userFavorite = action.payload;
        },
        setTotalFavorite: (state, action) => {
            state.quantityOfFavorite = action.payload;

            const updatedUserTotalFavorite = JSON.stringify(state.quantityOfFavorite);
            localStorage.setItem('totalFavorite', updatedUserTotalFavorite);
        }
    }
});



export const { increaseGood, totalGoods, reduceGood, setUserInfo, setUserName, setTotalPriseInAllBasket, setUserBasket, setInitialBasket, deleteItemInBasket, setUserFavorite, setinitialFavorite, setTotalFavorite } = userSlice.actions;

export default userSlice.reducer;