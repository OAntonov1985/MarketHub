import BreadCrumps from '@/components/Breadcrumps/Breadcrumps';
import GoodsList from '@/components/GoodsList/GoodsList';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import React from 'react';


function SubCategoryPage({ goods, id, total }) {

    return (
        <>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
            </Head>
            <div className='subcategory-page'>
                <Header />
                <div className="subcategory-main-content">
                    <BreadCrumps subID={id} />
                    <GoodsList props={goods} total={total} id={id} />
                </div>
                <Footer />
            </div>
        </>
    )
};

export async function getServerSideProps(context) {

    let id;
    if (context.query.subcategory === "Настільні комп’ютери") id = 110;
    else if (context.query.subcategory === "Планшети") id = 120;
    else if (context.query.subcategory === "Ноутбуки") id = 130;

    else if (context.query.subcategory === "Смартфони") id = 210;
    else if (context.query.subcategory === "Розумні годинники") id = 220;
    else if (context.query.subcategory === "Аксесуари") id = 230;

    else if (context.query.subcategory === "Дрібна побутова техніка") id = 310;
    else if (context.query.subcategory === "Велика побутова техніка") id = 320;
    else if (context.query.subcategory === "Кліматична побутова техніка") id = 330;

    else if (context.query.subcategory === "Приставки") id = 410;
    else if (context.query.subcategory === "Аксесуари") id = 420;
    else if (context.query.subcategory === "Аксесуари") id = 430;

    else if (context.query.subcategory === "Наушники") id = 510;
    else if (context.query.subcategory === "Акустичні системи") id = 520;
    else if (context.query.subcategory === "Медіаплеєри") id = 530;

    const resGoods = await fetch(`https://market-hub-backend-dat4.vercel.app/goods/subcategories/${id}/0/12`);
    const goods = await resGoods.json();

    return {
        props: {
            goods: goods.data,
            id: id,
            total: goods.total
        }
    };
};

export default React.memo(SubCategoryPage);