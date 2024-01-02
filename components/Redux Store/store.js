import {
    createSlice,
    configureStore,
    createAsyncThunk,
} from '@reduxjs/toolkit';

const userInfo = createSlice({
    name: 'markethub__store',
    initialState: {
        userID: null,
        userName: null,
    },
    reducers: {
        addUser: {
            reducer: (state, action) => {
                state.userInfo = action.payload;
            },
        },

        addUserMoney: {
            reducer: (state, action) => {
                state.userMoney = action.payload;
            },
        },
    },
});

export const { addUser, addUserMoney } = userInfo.actions;

export const store = configureStore({
    reducer: userInfo.reducer,
    devTools: true,
});
// store.dispatch(fetchActualCourse());
// setInterval(() => {
//     store.dispatch(fetchActualCourse());
// }, 10000);
