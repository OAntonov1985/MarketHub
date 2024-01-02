import '@/styles/globals.css';
// import Head from 'next/head';
import Layout from '@/components/Layout';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
