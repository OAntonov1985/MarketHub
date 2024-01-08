
export default function SingIn({ toggleMode }) {

    return (
        <>
            <div className='sing-in-left-column'>
                <p className='singin-paragraph login-page-text'>Привіт!</p>
                <p className='singin-paragraph login-page-text'>Якщо ти ще не маєш акаунту, то  можеш створити його тут.</p>
                <div className='button-singin'>
                    <button className='button-singin-push btn-login-page' onClick={toggleMode} >Зареєструватися</button>
                </div>
            </div>
            <div className='sing-in-right-column'>
                <h4 className='right-column-paragraph'>Вхід</h4>
                <form action="" className='singin-form'>
                    <label htmlFor="userEmail" className='label-title'>Електронна пошта</label>
                    <input
                        id="userEmail"
                        type="email"
                        className='userEmail'
                        placeholder='Введіть свою електронну пошту'
                        required />

                    <label htmlFor="userPassword" className='label-title'>Пароль</label>
                    <input
                        id="userPassword"
                        type="password"
                        className='userPassword'
                        placeholder='Введіть свій пароль'
                        required
                    />
                    <div className='button-singin'>
                        <button className='button-singin-push btn-login-page'>Увійти</button>
                    </div>
                </form>
            </div>
        </>
    );
}
