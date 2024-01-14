import "@/styles/globals.css";
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
    subsets: ['cyrillic'],
    weight: ["300", "400", "500", '700'],
})

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={ubuntu.className}>
            <Component {...pageProps} />
        </main>
    )

}
