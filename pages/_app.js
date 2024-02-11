import "@/styles/globals.css";
import { Ubuntu, Poppins } from 'next/font/google';
// import Layout from '@/components/Layout/Layout';



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
        <>
            {/* <Layout> */}
            <div className={ubuntu.className}>
                <Component {...pageProps} />
            </div>
            {/* </Layout> */}
        </>

    )

}
