import "@/styles/globals.css";
import { Ubuntu, Poppins } from 'next/font/google';

const ubuntu = Ubuntu({
    subsets: ['cyrillic'],
    weight: ["300", "400", "500", '700'],
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["300", "400", "500", '700'],
});
export default function MyApp({ Component, pageProps }) {
    return (
        <div className={ubuntu.className}>
            <Component {...pageProps} />
        </div>
    )

}
