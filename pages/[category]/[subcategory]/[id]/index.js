// import Link from "next/link";
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
    console.log(id)
    const resGoods = await fetch(MaketHubURL + `goods/${id}`);
    const good = await resGoods.json();

    const breadCrumpData = {
        category: good.category_details.name,
        subcategory: good.sub_category_detail.name,
        title: good.title,
        id: good.id,
        available: good.available
    };

    console.log(good.category_details.name)

    return {
        props: {
            good,
            breadCrumpData
        }
    };
};

export default React.memo(ProductPage);
