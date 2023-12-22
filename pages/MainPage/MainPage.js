import Link from 'next/link';

export default function mainpage() {
    return (
        <>
            <h1>Працює</h1>
            <Link href="/">
                <button>повернутись на головну</button>
            </Link>
        </>
    );
}