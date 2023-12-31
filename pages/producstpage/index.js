import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProductsPage() {
    return (
        <>
            <Header />
            <div className='main-part'>
                <p>Сторінка результату пошуку</p>
                <Link href='/producstpage/oneproductpage/'>
                    <button>Продукт 1</button> <br />
                </Link>

                <Link href='/producstpage/oneproductpage/'>
                    <button>Продукт 2</button> <br />
                </Link>

                <Link href='/producstpage/oneproductpage/'>
                    <button>Продукт 3</button> <br />
                </Link>
            </div>
            <Footer />
        </>
    );
}
