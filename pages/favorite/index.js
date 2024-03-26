import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import GoodCardSmall from '@/components/GoodCardSmall/GoodCardSmall';
import { useSelector } from 'react-redux';
import Emptyfavorite from '@/components/EmptyFavorite/Emptyfavorite';


function Favorite() {
    const { userFavorite } = useSelector((state) => state.user);
    // console.log(userFavorite)
    const isFavorite = true;
    return (
        <>
            <Head>
                <title>Сторінка автентифікації/реєстрації клієнта</title>
                <link rel="icon" href="/frame3810.png" sizes="any" />
                <meta name='MarketHub' content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <div className='favorite-conteiner'>
                <Header />
                <div className='favorite-content'>
                    <h4 className='basket-with-goods-title'>Улюблене</h4>
                    {userFavorite.length === 0 ? <Emptyfavorite /> : <div className='goods-list-goods-items item-favorite'>
                        {!!userFavorite && userFavorite.map(props => {
                            return (
                                <GoodCardSmall key={props.id} props={props} isFavorite={isFavorite} />
                            );
                        })}
                    </div>}
                </div>
                <Footer />
            </div>

        </>
    )
}

export default React.memo(Favorite);