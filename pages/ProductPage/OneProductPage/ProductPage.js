import Link from 'next/link';
import Head from 'next/head';

export default function ProductPage() {
    return (
        <>
            <Head>
                <title>Описание товара</title>
                <meta name="description" content="Описание вашего товара здесь" />
            </Head>
            <h3>Опис продукту 1</h3>

            <Link href="/">
                <button>На головну</button> <br />
            </Link>

            <Link href="/ProductsPage/ProductsPage">
                <button>На сторінку пошуку продуктів</button> <br />
            </Link><br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iste in veniam beatae. Qui minima possimus, perspiciatis voluptatibus suscipit assumenda consequuntur dolorem neque, delectus eius facilis hic. Quod, incidunt a?</p>
        </>
    )
}