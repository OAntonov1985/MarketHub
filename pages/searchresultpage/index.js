import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import GoodsList from '@/components/GoodsList/GoodsList';
import { useSelector } from 'react-redux';

export default function SearchResultPage() {
    const [goods, setGoods] = useState([]);
    const { searchResult } = useSelector((state) => state.user);
    // console.log(searchResult);

    useEffect(() => {
        setGoods(searchResult.data)
        // console.log(searchResult);
    }, [searchResult])


    return (
        <>
            <Head>
                <title>MarketHub - Сторінка результату пошуку</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
            </Head>
            <div className='category-page'>
                <Header />
                <div className='category-main-content'>
                    <GoodsList props={goods} id={100} total={searchResult.total} />
                </div>

                {/* <GoodCard /> */}
                <Footer />
            </div>
        </>
    );
}

// export default React.memo(SearchResultPage)
