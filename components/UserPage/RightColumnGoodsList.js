import React, { useState, useEffect } from 'react';
import RightColumnAddNewGood from './RightColumnAddNewGood';
import { useSelector } from 'react-redux';
import RightColumnUsersGoodsListToRender from './RightColumnUsersGoodsListToRender';
import data from "../../data.json"
import GetusersGoodsToSale from '@/pages/api/GetusersGoodsToSale';
import { useDispatch } from 'react-redux';
import { setActiveSpinner } from '@/slices/userSlice';


function RightColumnGoodsList() {
    const [userGoodsToSale, setUserGoodsToSale] = useState([]);
    const [totalUserGoodsToSale, setTotalUserGoodsToSale] = useState(0);
    const { activeSubItemInGood } = useSelector((state) => state.user);

    const dataFromJson = data;
    const dispatch = useDispatch();

    console.log(activeSubItemInGood)

    const fetchData = async () => {
        dispatch(setActiveSpinner(true));
        try {
            const result = await GetusersGoodsToSale(1002, activeSubItemInGood === "Активні товари" ? true : activeSubItemInGood === "Неактивні товари" ? false : undefined);
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
    }, [activeSubItemInGood])

    return (
        <>
            {activeSubItemInGood === "Додати товар" ? < RightColumnAddNewGood /> : < RightColumnUsersGoodsListToRender dataFromJson={dataFromJson} />}
        </>
    )
}

export default React.memo(RightColumnGoodsList);