
import Link from 'next/link';

export default function errorPageAuth() {

    return (
        <div className='error-page-auth-container'>
            <div className="error-message">
                <p className='first-message'>У доступі відмовлено</p>
                <p className='second-message'>Юзер з такою поштою вже існує!</p>

                <Link className='error-auth-buttom' href="/loginpage" >Повернутись на сторінку авторизації</Link>
            </div>

        </div>
    )
}