import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeftColumnOrdersList from './LeftColumnOrdersList';
import LeftColumnGoodsList from './LeftColumnGoodsList';
import LeftColumnUserInfo from './LeftColumnUserInfo';
import LeftColumnUserOrders from './LeftColumnUserOrders';
import { useState } from 'react';
import { setCategorieToRender } from '@/slices/userSlice';

function UserPageLeftColumn() {
    const { userName } = useSelector((state) => state.user);
    const { categoryToRender } = useSelector((state) => state.user);
    const [isActiveCategorie, setIsActiveCatogorie] = useState(categoryToRender)
    // const [isOpenGoods, setIsOpenGoods] = useState(true);
    // const [isOpenOrders, setIsOpenOrders] = useState(true);

    const objToSend = { setIsActiveCatogorie, setActiveItem, isActiveCategorie };

    const dispatch = useDispatch();

    function setActiveItem(event) {
        setIsActiveCatogorie(event);
        dispatch(setCategorieToRender(event));
    }


    // console.log(categoryToRender)
    return (
        <div className='userPage-left-column'>
            <h4 className={'left-column-title'}>Привіт, {userName}</h4>
            <LeftColumnUserInfo isActiveCategorie={isActiveCategorie} setActiveItem={setActiveItem} />
            <LeftColumnOrdersList objToSend={objToSend} />
            <LeftColumnGoodsList objToSend={objToSend} />
            <LeftColumnUserOrders isActiveCategorie={isActiveCategorie} setActiveItem={setActiveItem} />
        </div>
    )
}

export default React.memo(UserPageLeftColumn);