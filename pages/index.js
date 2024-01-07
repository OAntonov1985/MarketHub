import Link from 'next/link';
import Head from "next/head";
import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default function Home() {
    return (
        <>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin
                />
                <meta name='MarketHub' content='MarketHub' />
            </Head>
            <Header />
            <main className='main main-part'>
                <h1>Домашня сторінка</h1>
                <Link legacyBehavior href='/loginpage/'>
                    <button>Сторінка авторизації</button>
                </Link>

                <Link href='/mainpage/'>
                    <p>Головна сторінка з категоріями і пошуком</p>
                </Link>

                <Link href='/producstpage/'>
                    <p>Сторінка з результатами пошуку</p>
                </Link>
            </main>
            <Footer />
        </>
    );
}
