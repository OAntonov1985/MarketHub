"use client"


import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import EmptyBasket from '@/components/EmptyBasket/EmptyBasket';
import BasketWithGoods from '@/components/BasketWithGoods/BasketWithGoods';
import { useEffect, useState } from 'react';



function Basket() {
    const [basketLength, setBasketLength] = useState(0);


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
                    {basketLength == 0 ? <EmptyBasket /> : <BasketWithGoods setBasketLength={setBasketLength} />}
                </div>
                <Footer />
            </div>
        </>

    )
};




export default React.memo(Basket);

