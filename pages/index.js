// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Link from 'next/link';
import Head from 'next/head';


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
                {/* <meta name="5678jghjy" content="Опис товару" /> */}
            </Head>
            <main className='wrapper'>
                <h1>Домашня сторінка</h1>
                <Link legacyBehavior href="/loginpage/">
                    <button>Сторінка авторизації</button>
                </Link>

                <Link href="/mainpage/">
                    <p>Головна сторінка з категоріями і пошуком</p>
                </Link>


                <Link href="/producstpage/">
                    <p>Сторінка з результатами пошуку</p>
                </Link>
            </main>

        </>

    );
}
