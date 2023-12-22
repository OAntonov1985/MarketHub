// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Link from 'next/link';
import Head from 'next/head';


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Описание товара</title>
                <meta name="5678jghjy" content="Описание вашего товара здесь456456456756" />
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
