import { Link } from 'react-router-dom';

export default function LogInPage() {
    return (
        <>
            На цій сторфінці буде відбуватися авторизація(реїстрація) клієнта <br />
            <Link className="mainNav__logo" to="/">
                <button>Повернутися на головну</button>
            </Link>
        </>
    );
}