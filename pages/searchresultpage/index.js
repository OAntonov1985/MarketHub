import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import GoodsList from '@/components/GoodsList/GoodsList';
import { useSelector } from 'react-redux';
import GetSearchResult from '@/pages/api/GetSearchResult';

export default function SearchResultPage() {
    const [goods, setGoods] = useState([]);
    const [total, setTotal] = useState([]);

    const { searchPhrase } = useSelector((state) => state.user);


    useEffect(() => {
        async function searchingFunction() {
            if (searchPhrase.length >= 1) {
                try {
                    const result = await GetSearchResult(searchPhrase);
                    console.log(result)
                    setGoods(result.result.data);
                    setTotal(result.result.total);

                } catch (error) {
                    alert('Упс.... Щось пішло не так. зверніться до розробників');
                }
            }
            else if (searchPhrase.length === 0) {

            }
        }
        searchingFunction()
    }, [searchPhrase])


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
                    <div className=''>
                    </div>
                    {(goods && goods.length > 0) ? <GoodsList props={goods} id={100} total={total} /> : null}

                </div>

                <Footer />
            </div>
        </>
    );
}

// export default React.memo(SearchResultPage)
