import { URLADRESS } from '@/components/Constants';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SubcategoriesInCatPage from '@/components/SubCategoriesInCategoryPage/SubCategoriesInCategoryPage';
import BreadCrumps from '@/components/Breadcrumps/Breadcrumps';
import GoodsList from '@/components/GoodsList/GoodsList';
import Head from 'next/head';
import React from 'react';
import { useState } from 'react';


function CategoryPage({ subCategories, goods }) {


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
                    <GoodsList props={goods} />
                </div>
                <Footer />
            </div>
        </>
    );
}
export async function getServerSideProps(context) {

    let id;
    if (context.query.category === "Комп’ютерна техніка") id = 100;
    else if (context.query.category === "Мобільні телефони") id = 175;
    else if (context.query.category === "Побутова техніка") id = 250;
    else if (context.query.category === "Ігрові приставки") id = 325;
    else if (context.query.category === "Аудіотехніка") id = 400;

    const res = await fetch(URLADRESS + `categories/${id}/sub-categories`);
    const subCategories = await res.json();

    // const resGoods = await fetch(`https://fakestoreapi.com/products`);
    const resGoods = await fetch(`https://dummyjson.com/products?limit=12`);
    const goods = await resGoods.json();

    return {
        props: {
            subCategories,
            goods
        }
    };
};
export default React.memo(CategoryPage);