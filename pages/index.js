import { URLADRESS } from '@/components/Constants';
import Head from "next/head";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Categories from '@/components/CategoriesOnMainPage/CategoriesOnMain';
import TopSellers from '@/components/TopSellersMain/TopSellers';
import PromotionsOnMain from '@/components/PromotionsInMain/PromosionsOnMain';
import React from 'react';
import { useRouter } from 'next/router';




function Home({ categories, topSellers, promotionGoods }) {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    return (
        <>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
            </Head>

            <main className='main'>
                <div className="header-in-main">
                    {isHomePage ? <Header transparentBackground /> : <Header coloredBackground />}
                    <Image
                        alt="background image in header"
                        src='/bgimagemain.png'
                        quality={100}
                        width={1440}
                        height={770}
                        className='logo-image-in-main'
                        priority
                        style={{
                            position: 'absolute',
                            top: "-24px",
                            zIndex: -1,
                            marginTop: "2.4rem",
                            width: '100vw',
                            maxWidth: '192rem'
                        }}
                    />
                    <h1>Market hub</h1>
                    <p className='duplicate-h1'>MARKET HUB</p>
                    <h2>Обирай найкраще, не виходячи з дому</h2>
                </div>

                <div className="main-content">
                    <Categories categories={categories} />
                    <TopSellers props={topSellers} />
                    <PromotionsOnMain promotionGoods={promotionGoods} />
                </div>
                <Footer />
            </main >
        </>
    );
}

export async function getServerSideProps() {

    const resCategories = await fetch("https://market-hub-backend-dat4.vercel.app/categories");
    const categories = await resCategories.json();

    const resTopSellers = await fetch("https://market-hub-backend-dat4.vercel.app/goods/top-sellers");
    const topSellers = await resTopSellers.json();

    const resPromotionGoods = await fetch("https://market-hub-backend-dat4.vercel.app/sales");
    const promotionGoods = await resPromotionGoods.json();
    return {
        props: {
            categories,
            topSellers,
            promotionGoods
        }
    };
};


export default React.memo(Home);
