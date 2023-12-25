import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className='wrapper__one'>{children}</main>
            <Footer />
        </>
    )
}