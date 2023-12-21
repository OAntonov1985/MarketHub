import { Link } from 'react-router-dom';

export default function ProductsPage() {
    return (
        <>
            Тут буде список товарів по результатам пошуку <br />
            <Link className="mainNav__logo" to="/">
                <button>Повернутися на головну</button>
            </Link>
            <ul>
                <li>Картка товару 1
                    <Link className="mainNav__logo" to="/productslist/oneproductlist">
                        <button>До картки товару 1</button>
                    </Link>
                </li>
                <li>Картка товару 2
                    <Link className="mainNav__logo" to="/productslist/oneproductlist">
                        <button>До картки товару 2</button>
                    </Link>
                </li>
                <li>Картка товару 3
                    <Link className="mainNav__logo" to="/productslist/oneproductlist">
                        <button>До картки товару 3</button>
                    </Link>
                </li>
                <li>Картка товару 4
                    <Link className="mainNav__logo" to="/productslist/oneproductlist">
                        <button>До картки товару 4</button>
                    </Link>
                </li>

            </ul>
        </>
    )
}