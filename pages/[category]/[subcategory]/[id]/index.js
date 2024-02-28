// import Link from "next/link";
import Head from "next/head";
import GoodCard from '@/components/GoodCard/GoodCard';
import React from 'react';
import BreadCrumps from '@/components/Breadcrumps/Breadcrumps';


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
    const resGoods = await fetch(`https://market-hub-backend-dat4.vercel.app/goods/U0837652`);
    const good = await resGoods.json();

    const breadCrumpData = {
        category: good.parent_caregory,
        subcategory: good.paretn_subcategory,
        title: good.title,
        id: good.id,
        available: good.available
    };

    // console.log(breadCrumpData)

    return {
        props: {
            good,
            breadCrumpData
        }
    };
};

export default React.memo(ProductPage);
