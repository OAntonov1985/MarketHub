import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MainPage() {
    return (
        <>
            <Header />
            <div className="main-part">
                <h1>Головна сторінка</h1>
                <p className="flex center"></p>
                <Link href='/'>
                    <button>Повернутись на головну</button>
                </Link>
            </div>
            <Footer />
        </>
    );
}
