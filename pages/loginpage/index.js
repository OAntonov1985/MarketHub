import Link from 'next/link';

export default function LogInPage() {
    return (
        <div className='wrapper'>
            <h1>Сторінка авторизації</h1>
            <Link href="/">
                <button>Повернутись на головну</button>
            </Link>
        </div>
    );
};