import * as types from '../constants/actionTypes';
import { getStorage } from 'next-persist';
// или
// import { getCookies } from 'next-persist/src/next-persist-cookies'

const initialState = {
    quantityOfGoods: 0
};

const persistedState = getStorage('reducerOne', initialState);


const firstReducer = (state = persistedState, action) => {
    // логика установки состояния, основанная на анализе типа действия
    switch (action.type) {
        default:
            return state;
    }
};

export default firstReducer;