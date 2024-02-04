// import Link from "next/link";
import Head from "next/head";
import GoodCard from '@/components/GoodCard/GoodCard';
import React from 'react';

function ProductPage({ good }) {
    // console.log(good)
    return (
        <>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
            </Head>
            <div className='wrapper'>
                <div>
                    <GoodCard props={good} />
                </div>
            </div>
        </>

    );
};

export async function getServerSideProps(context) {
    // console.log(context.query.id)
    let id = context.query.id
    // const resGoods = await fetch(`https://fakestoreapi.com/products/${id}`);
    const resGoods = await fetch(`https://dummyjson.com/products/${id}`);
    // const resGoods = await fetch(`https://fakestoreapi.com/products/1`);
    const good = await resGoods.json();

    return {
        props: {
            good
        }
    };
};

export default React.memo(ProductPage);
