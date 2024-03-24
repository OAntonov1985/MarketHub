import React, { useState, useEffect } from 'react';
import RightColumnAddNewGood from './RightColumnAddNewGood';
import { useSelector } from 'react-redux';
import RightColumnUsersGoodsListToRender from './RightColumnUsersGoodsListToRender';
import GetusersGoodsToSale from '@/pages/api/GetusersGoodsToSale';
import { useDispatch } from 'react-redux';
import { setActiveSpinner } from '@/slices/userSlice';


function RightColumnGoodsList() {
    const [userGoodsToSale, setUserGoodsToSale] = useState([]);
    const [totalUserGoodsToSale, setTotalUserGoodsToSale] = useState(0);
    const { activeSubItemInGood } = useSelector((state) => state.user);
    const [activePage, setActivePage] = useState(1);
    const [activeItem, setActiveItem] = useState(null);
    const dispatch = useDispatch();

    // console.log(userGoodsToSale)
    const fetchData = async () => {
        dispatch(setActiveSpinner(true));
        try {
            const result = await GetusersGoodsToSale(1003, activePage - 1, activeSubItemInGood === "Активні товари" ? true : activeSubItemInGood === "Неактивні товари" ? false : undefined);
            // console.log(result)
            setUserGoodsToSale(result.result.data);
            setTotalUserGoodsToSale(result.result.total);
            dispatch(setActiveSpinner(false));
        } catch (error) {
            alert('Упс.... Щось пішло не так. зверніться до розробників');
        }
    };
    useEffect(() => {
        if (activeSubItemInGood === "Всі товари" || activeSubItemInGood === "Активні товари" || activeSubItemInGood === "Неактивні товари") {
            fetchData();
        }
    }, [activeSubItemInGood, activePage]);

    useEffect(() => {
        setActivePage(1);
        setActiveItem(null);
    }, [activeSubItemInGood]);

    return (
        <>
            {activeSubItemInGood === "Додати товар" ? < RightColumnAddNewGood /> : < RightColumnUsersGoodsListToRender
                userGoodsToSale={userGoodsToSale} totalUserGoodsToSale={totalUserGoodsToSale}
                setActivePage={setActivePage} activePage={activePage} setActiveItem={setActiveItem} activeItem={activeItem} />}
        </>
    )
}

export default React.memo(RightColumnGoodsList);