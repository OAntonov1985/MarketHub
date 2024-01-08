import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MainPage() {
    return (
        <>

            <div className="main">
                <Header />
                <h2 >Головна сторінка</h2>
                <p className="flex center"></p>
                <Link href='/'>
                    <button>Повернутись на головну</button>
                </Link>
                <Footer />
            </div>

        </>
    );
}
