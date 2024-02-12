"use client"

import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import EmptyBasket from '@/components/EmptyBasket/EmptyBasket';
import BasketWithGoods from '@/components/BasketWithGoods/BasketWithGoods';




export default function Basket() {

    return (
        <>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
            </Head>
            <div className='basket-page'>
                <Header />
                <div className="basket-page-content">
                    {/* <EmptyBasket /> */}
                    <BasketWithGoods />

                </div>
                <Footer />
            </div>
        </>

    )
}

// export async function getServerSideProps() {
//     const BASKET = localStorage.getItem("BASKET");
//     const basketArr = JSON.parse(BASKET);


//     return {
//         props: {
//             basketArr
//         }
//     };
// };