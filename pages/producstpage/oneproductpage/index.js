import Link from 'next/link';
import Head from 'next/head';

export default function ProductPage() {
    return (
        <div className='wrapper'>
            <Head>
                <title>Опис продукту</title>
                <meta name="description675688" content="Описание вашего товара здесь" />
            </Head>
            <main>
                <h3>Опис продукту 1</h3>


                <Link href="/">
                    <button>На головну</button> <br />
                </Link>

                <Link href="/producstpage/">
                    <button>На сторінку пошуку продуктів</button> <br />
                </Link><br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iste in veniam beatae. Qui minima possimus, perspiciatis voluptatibus suscipit assumenda consequuntur dolorem neque, delectus eius facilis hic. Quod, incidunt a?</p>
            </main>

        </div>
    )
}