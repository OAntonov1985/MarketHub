import Link from 'next/link';

export default function ProductsPage() {
    return (
        <div className="wrapper">
            <p>Сторінка результату пошуку</p>
            <Link href="/producstpage/oneproductpage/">
                <button>Продукт 1</button> <br />
            </Link>

            <Link href="/producstpage/oneproductpage/">
                <button>Продукт 2</button> <br />
            </Link>

            <Link href="/producstpage/oneproductpage/">
                <button>Продукт 3</button> <br />
            </Link>
        </div>
    );
}
