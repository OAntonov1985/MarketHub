import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeftColumnOrdersList from './LeftColumnOrdersList';
import LeftColumnGoodsList from './LeftColumnGoodsList';
import LeftColumnUserInfo from './LeftColumnUserInfo';
import LeftColumnUserOrders from './LeftColumnUserOrders';
import { useState, useEffect } from 'react';
import { setCategorieToRender, setPhotoArrayLength, setUserName } from '@/slices/userSlice';
import { signOut } from "next-auth/react";
import Cookies from 'js-cookie';

function UserPageLeftColumn() {
    const { userName } = useSelector((state) => state.user);
    const { categoryToRender } = useSelector((state) => state.user);
    const [isActiveCategorie, setIsActiveCatogorie] = useState(categoryToRender);
    const { pfotoArrayLength } = useSelector((state) => state.user);

    const objToSend = { setIsActiveCatogorie, setActiveItem, isActiveCategorie };

    const dispatch = useDispatch();

    function setActiveItem(event) {
        setIsActiveCatogorie(event);
        dispatch(setCategorieToRender(event));
    }

    useEffect(() => {
        if (pfotoArrayLength !== "Товари") {
            dispatch(setPhotoArrayLength(4));
        }
    }, [pfotoArrayLength]);

    function SingOutFunc() {
        dispatch(setUserName(""));
        Cookies.remove('userName', { path: '/' });
        Cookies.remove('userSurname', { path: '/' });
        Cookies.remove('userEmail', { path: '/' });
        Cookies.remove('userPassword', { path: '/' });
        Cookies.remove('userToken', { path: '/' });
        Cookies.remove('userPhone', { path: '/' });
        Cookies.remove('userID', { path: '/' });
        signOut({ callbackUrl: "/" })
    }

    return (
        <div className='userPage-left-column'>
            <div>
                <h4 className={'left-column-title'}>Привіт, {userName}</h4>
                <LeftColumnUserInfo isActiveCategorie={isActiveCategorie} setActiveItem={setActiveItem} />
                <LeftColumnOrdersList objToSend={objToSend} />
                <LeftColumnGoodsList objToSend={objToSend} />
                <LeftColumnUserOrders isActiveCategorie={isActiveCategorie} setActiveItem={setActiveItem} />
            </div>
            <div>
                <button className="exit-button" onClick={SingOutFunc}>Вийти з аккаунту</button>
            </div>
        </div>
    )
}

export default React.memo(UserPageLeftColumn);