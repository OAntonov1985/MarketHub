import Link from 'next/link';
import Authorization from '@/components/Authorization/Authorization';

export default function LogInPage() {
    return (
        <div className='autorization__window'>
            {/* <h1>Сторінка авторизації</h1>
            <Link href="/">
                <button>Повернутись на головну</button>
            </Link> */}
            <Authorization />
        </div>
    );
};