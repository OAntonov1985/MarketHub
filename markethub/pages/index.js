import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <h1>Домашняя страница</h1>
            <Link legacyBehavior href="/LogInPage/LogInPage">
                <a>LogInPage</a>
            </Link>

            {/* Кнопка для перехода на LoginPage */}
            {/* <Link href="/LoginPage">
                <p>Login Page</p>
            </Link> */}

            {/* Кнопка для перехода на MainPage */}
            <Link href="/MainPage/MainPage">
                <p>Main Page</p>
            </Link>

            {/* Кнопка для перехода на ProductsPage */}
            <Link href="/ProductsPage/ProductsPage">
                <p>Products Page</p>
            </Link>
        </>

    );
}
