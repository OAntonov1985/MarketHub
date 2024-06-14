"use client";

import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import EmptyBasket from '@/components/EmptyBasket/EmptyBasket';
import BasketWithGoods from '@/components/BasketWithGoods/BasketWithGoods';
import { useSelector } from 'react-redux';



function Basket() {
    const quantityOfGoods = useSelector(state => state.user.quantityOfGoods);

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
                    {quantityOfGoods == 0 ? <EmptyBasket /> : <BasketWithGoods />}
                </div>
                <Footer />
            </div>
        </>

    )
};




export default React.memo(Basket);

