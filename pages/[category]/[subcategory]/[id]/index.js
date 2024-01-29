import Link from "next/link";
import Head from "next/head";
import GoodCard from '@/components/GoodCard/GoodCard';

export default function ProductPage() {
    return (
        <div className='wrapper'>
            <Head>
                <title>Опис продукту</title>
                <meta
                    name='description675688'
                    content='Описание вашего товара здесь'
                />
            </Head>
            <main>
                <GoodCard />
            </main>
        </div>
    );
}
