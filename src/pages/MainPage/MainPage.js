import { Link } from 'react-router-dom';

export default function MainPage() {


    return (
        <>
            Вiтаю в нашому додатку MakertHub <br />
            Це головна сторінка додатку
            <ul>
                <li>
                    Перейти до сторінки клієнта
                    <Link to="/userpage">
                        <button>UserPage</button>
                    </Link>
                </li>
                <li>
                    Перейти до сторінки реєстрації/ авторизації
                    <Link to="/authorization">
                        <button>Login Page</button>
                    </Link>
                </li>
                <li>
                    Перейти до сторінки результату пошуку товарів
                    <Link to="/productslist">
                        <button>Search result</button>
                    </Link>
                </li>
            </ul>

        </>
    )
}