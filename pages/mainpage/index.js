import Link from 'next/link';

export default function MainPage() {
    return (
        <div className='wrapper'>
            <h1>Головна сторінка</h1>
            <Link href="/">
                <button>Повернутись на головну</button>
            </Link>
        </div>
    );
}