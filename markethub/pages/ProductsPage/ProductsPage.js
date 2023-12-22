import Link from 'next/link';

export default function ProductsPage() {
    return (
        <>
            <p>Products Page</p >
            <Link href="/ProductsPage/OneProductPage/ProductPage">
                <button>Product 1</button> <br />
            </Link>
            <button>Product 1</button> <br />
            <button>Product 2</button> <br />
            <button>Product 3</button> <br />
        </>

    );
}