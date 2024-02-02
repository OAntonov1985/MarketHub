import {
    createSlice,
    configureStore,
    createAsyncThunk,
} from "@reduxjs/toolkit";

const MarketHub = createSlice({
    name: "markethub__store",
    initialState: {
        currentPage: 1,
        prePage: 5,
        totalNumberGoods: null,
    },
    reducers: {
        currentPage: {
            reducer: (state, action) => {
                state.userInfo = action.payload;
            },
        },

        totalNumberGoods: {
            reducer: (state, action) => {
                console.log(action.payload);
                state.userMoney = action.payload;
            },
        },
    },
});

export const { currentPage, totalNumberGoods } = MarketHub.actions;

export const store = configureStore({
    reducer: MarketHub.reducer,
    devTools: true,
});
// store.dispatch(fetchActualCourse());
// setInterval(() => {
//     store.dispatch(fetchActualCourse());
// }, 10000);
