import Link from "next/link";
import Head from "next/head";
import GoodCard from '@/components/GoodCard/GoodCard';

export default function ProductPage() {
    return (
        <>
            <Head>
                <title>MarketHub - знайденться все!</title>
                <link rel="icon" href="/frame380.png" sizes="any" />
                <meta name='MarketHub' content='MarketHub - тут може бути Ваша реклама' />
            </Head>
            <div className='wrapper'>
                <main>
                    <GoodCard />
                </main>
            </div>
        </>

    );
}
