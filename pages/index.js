import Link from 'next/link';
import Head from "next/head";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';




export default function Home() {
    return (
        <>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub' />
            </Head>

            <main className='main'>
                <div className="header-in-main">
                    <Header />
                    <Image
                        alt="background image in header"
                        src='/bgimagemain.jpg'
                        quality={100}
                        width={1440}
                        height={770}
                        // className='logo-image'
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
                    <h2>Обирай найкраще, не виходячи з дому</h2>
                </div>

                <div className="main-content">
                    <div className='header-title'>Домашня сторінка</div>
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
