import Link from 'next/link';
import Head from "next/head";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';




export default function Home() {
    return (
        <>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin
                /> */}
                <meta name='MarketHub' content='MarketHub' />
            </Head>

            <main className='main'>
                <Header />
                <div className="main-content">
                    <h1 className='header-title'>Домашня сторінка</h1>
                    <Link legacyBehavior href='/loginpage/' className='main-link'>
                        <button className='button-main'>Сторінка авторизації</button>
                    </Link>

                    <Link href='/mainpage/' className='main-link'>
                        <p className='main-link'>Головна сторінка з категоріями і пошуком</p>
                    </Link>

                    <Link href='/producstpage/' className='main-link'>
                        <p className='main-link'>Сторінка з результатами пошуку</p>
                    </Link>
                    <Link href='/userpage/' className='main-link'>
                        <p className='main-link'>Сторінка з інфо про клієнта</p>
                    </Link>
                </div>
                <Footer />
            </main>

        </>
    );
}
