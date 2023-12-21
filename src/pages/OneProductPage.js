import { Link } from 'react-router-dom';

export default function OneProductPage() {
    return (
        <>
            Тут буде інформація про товар, який клієнт потенційно захоче купити <br />
            <Link className="mainNav__logo" to="/">
                <button>Повернутися на головну</button>
            </Link>
            <Link className="mainNav__logo" to="/productslist">
                <button>Повернутися на сторінку результату пошуку</button>
            </Link>
            <br />
        </>
    )
}