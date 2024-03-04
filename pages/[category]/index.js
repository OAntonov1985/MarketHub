import { URLADRESS } from '@/components/Constants';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SubcategoriesInCatPage from '@/components/SubCategoriesInCategoryPage/SubCategoriesInCategoryPage';
import BreadCrumps from '@/components/Breadcrumps/Breadcrumps';
import GoodsList from '@/components/GoodsList/GoodsList';
import Head from 'next/head';
import React from 'react';
import { useState } from 'react';



function CategoryPage({ subCategories, goods, id, total }) {

    return (
        <>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
            </Head>
            <div className='category-page'>
                <Header />
                <div className="category-main-content">
                    <BreadCrumps />
                    <div className="subcategories-row">
                        <SubcategoriesInCatPage subCategories={subCategories} />
                    </div>
                    <GoodsList props={goods} id={id} total={total} />
                </div>
                <Footer />
            </div>
        </>
    );
}
export async function getServerSideProps(context) {

    let id;
    if (context.query.category === "Комп’ютерна техніка") id = 100;
    else if (context.query.category === "Мобільні телефони") id = 200;
    else if (context.query.category === "Побутова техніка") id = 300;
    else if (context.query.category === "Ігрові приставки") id = 400;
    else if (context.query.category === "Аудіотехніка") id = 500;


    const res = await fetch(`https://market-hub-backend-dat4.vercel.app/categorie/${id}`);
    const subCategories = await res.json();

    const resGoods = await fetch(`https://market-hub-backend-dat4.vercel.app/goods/categories/${id}/0/12`);
    const goods = await resGoods.json();

    // console.log(goods)
    return {
        props: {
            subCategories,
            goods: goods.data,
            id: id,
            total: goods.total
        }
    };
};
export default React.memo(CategoryPage);