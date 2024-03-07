import React from 'react';
import { useSelector } from 'react-redux';
import LeftColumnOrdersList from './LeftColumnOrdersList';
import LeftColumnGoodsList from './LeftColumnGoodsList';
import Image from 'next/image';
import { useState } from 'react';

function UserPageLeftColumn() {
    const { userName } = useSelector((state) => state.user);
    const [isActiveCategorie, setIsActiveCatogorie] = useState("Особисті дані")
    const [isOpenGoods, setIsOpenGoods] = useState(true);
    const [isOpenOrders, setIsOpenOrders] = useState(true);

    const objToSend = { isOpenGoods, setIsOpenGoods, isOpenOrders, setIsOpenOrders, setIsActiveCatogorie };

    function setActiveItem(event) {
        setIsActiveCatogorie(event.target.id);
        setIsOpenGoods(true);
        setIsOpenOrders(true);
    }

    return (
        <div className='userPage-left-column'>
            <h4 className={'left-column-title'}>Привіт, {userName}</h4>
            <div className={`left-column-item ${isActiveCategorie === "Особисті дані" ? "active-color" : ""}`} id="Особисті дані"
                onClick={(event) => setActiveItem(event)}
            >Особисті дані</div>
            <LeftColumnOrdersList objToSend={objToSend} />
            <LeftColumnGoodsList objToSend={objToSend} />
            <div className={`left-column-item ${isActiveCategorie === "Покупки" ? "active-color" : ""}`} id="Покупки"
                onClick={(event) => setActiveItem(event)}
            >Покупки</div>
        </div>
    )
}

export default React.memo(UserPageLeftColumn);