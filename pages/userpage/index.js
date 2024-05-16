"use client";
import Head from "next/head";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import UserPageLeftColumn from '@/components/UserPage/UserPageLeftColumn';
import UserPageRightColumn from '@/components/UserPage/UserPageRightColumn';
import Spinner from '@/components/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


export default function UserPage() {
    const { loading } = useSelector((state) => state.user);
    const isSession = useSession();
    const { status } = isSession;
    const router = useRouter();
    // console.log(isSession)


    if (status === "authenticated" || status === "loading") {
        return (
            <div className='userPage'>
                {loading ? <Spinner /> : null}
                <Head>
                    <title>MarketHub - знайденться все!</title>
                    <link rel="icon" href="/frame380.png" sizes="any" />
                    <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
                </Head>
                <Header />
                <div className='userPage-content'>
                    <UserPageLeftColumn />
                    <UserPageRightColumn />
                </div>
                <Footer />
            </div>
        )
    } else return (
        <>
            <div className="modal-overlay" >
                <div className="modal-content" >
                    <h4 className='modal-title'>Вітаємо!</h4>
                    <h4 className='modal-title'>Виконайте авторизацію або реєстрацію  щоб продовжити як користувач!</h4>
                    <button className='modal-button' onClick={() => router.push("/loginpage")}>До сторінки авторизації</button>
                </div>
            </div>
        </>
    );
}



















