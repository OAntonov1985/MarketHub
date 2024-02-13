"use client"


import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import EmptyBasket from '@/components/EmptyBasket/EmptyBasket';
import BasketWithGoods from '@/components/BasketWithGoods/BasketWithGoods';
import { useEffect, useState } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { increment } from '@/slices/userSlice';
// import { useAppDispatch, useAppSelector } from '@/store/hooks';




function Basket() {
    const [basketLength, setBasketLength] = useState(0);


    // const currentTheme = useAppSelector((state) => state.theme);
    const dispatch = useDispatch();
    console.log(dispatch)
    const { value } = useSelector((state) => state.user)
    console.log(value)


    useEffect(() => {
        const BASKET = localStorage.getItem("BASKET");
        const arr = JSON.parse(BASKET);
        if (arr !== null) setBasketLength(arr.length);

    }, [basketLength])


    return (
        <>
            <Head>
                <title>MarketHub -Кошик</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
            </Head>
            <div className='basket-page'>
                <Header />
                <div className="basket-page-content">
                    <button onClick={() => dispatch(increment())}>Тест</button>
                    {/* <p>{currentTheme}</p> */}
                    {basketLength == 0 ? <EmptyBasket /> : <BasketWithGoods setBasketLength={setBasketLength} />}

                </div>
                <Footer />
            </div>
        </>

    )
};

export default React.memo(Basket);

