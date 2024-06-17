"use client"
import Head from "next/head";
import GoodCard from '@/components/GoodCard/GoodCard';
import React from 'react';
import BreadCrumps from '@/components/Breadcrumps/Breadcrumps';
import { MaketHubURL } from "../../../../components/Constants"


function ProductPage({ good, breadCrumpData }) {

    return (
        <>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
            </Head>
            <div className='wrapper'>
                <div>
                    <GoodCard props={good} breadCrumpData={breadCrumpData} />
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps(context) {
    let id = context.query.id
    let breadCrumpData;

    const resGoods = await fetch(MaketHubURL + `goods/${id}`);
    const good = await resGoods.json();

    if (good) {
        breadCrumpData = {
            category: good ? good.category_details : null,
            subcategory: good ? good.sub_category_detail : null,
            title: good ? good.title : null,
            id: good.id,
            available: good.available,
            seller_id: good ? good.seller_id : null
        };
    }


    return {
        props: {
            good,
            breadCrumpData
        }
    };
};

export default React.memo(ProductPage);
