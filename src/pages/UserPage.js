import { Link } from 'react-router-dom';

export default function UserPage() {

    return (
        <>
            Тут буде інформація про клієнта  і можливо щось інше <br />
            <Link className="mainNav__logo" to="/">
                <button>Повернутися на головну</button>
            </Link>
        </>
    )
}