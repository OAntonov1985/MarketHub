import Link from 'next/link';

export default function LoginPage() {
    return (
        <div>
            <h1>Login Page</h1>
            <Link href="/">
                <button>повернутись на головну</button>
            </Link>
        </div>
    );
};

