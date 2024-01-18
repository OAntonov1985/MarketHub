import React from 'react';
import RegistrationForm from './RegistrationForm';


function Registration({ props }) {
    const { loading, setLoading, toggleMode } = props;
    const obj = { setLoading };


    return (
        <>
            <div className="sing-in-left-column">
                <h4 className='right-column-paragraph'>Реєстрація</h4>
                {/* <form action="" className='registration-form' onSubmit={handleclick}>
                    <label htmlFor="userName" className='label-title'>Ім`я</label>
                    <input
                        id="userName"
                        type="text"
                        className='user-name'
                        placeholder='Введіть своє і`мя'
                        onChange={(e) => setUserName(e.target.value)}
                        required />

                    <label htmlFor="userSurname" className='label-title'>Прізвище</label>
                    <input
                        id="user-surname"
                        type="text"
                        className='user-surname'
                        placeholder='Введіть своє прізвище'
                        onChange={(e) => setUserSurname(e.target.value)}
                        required
                    />
                    <label htmlFor="userTel" className='label-title'>Номер телефону</label>
                    <input
                        id="userTel"
                        type="number"
                        className='user-tel'
                        placeholder='Введіть свій телефон'
                        onChange={(e) => setUserPfone(e.target.value)}
                        required
                    />
                    <label htmlFor="userEmail" className='label-title'>Електронна пошта</label>
                    <input
                        id="userEmail"
                        type="email"
                        className='user-email'
                        placeholder='Введіть електронну пошту'
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="userPassword" className='label-title'>Пароль</label>
                    <input
                        type={showPassword}
                        className='user-password'
                        placeholder='Придумайте пароль'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="userPasswordAgain" className='label-title label-title-last'>Підтвердження паролю</label>
                    <input
                        id="userPasswordAgain"
                        type={showPassword}
                        className='user-passwordAgain'
                        placeholder='Повторно введіть пароль'
                        onChange={(e) => setUserConfirmPassword(e.target.value)}
                        required
                    />
                    <div className='button-singin'>
                        <button className='button-singin-push btn-login-page'>Зареєструватися</button>
                    </div>
                    <p className='politcik-registration'>Створюючи обліковий запис, ви погоджуєтеся з нашими
                        <a href="#" className='politcik-registration-link'>  Умовами обслуговування</a> та
                        <a href="#" className='politcik-registration-link'>  Політикою конфіденційності</a></p>
                </form> */}
                <RegistrationForm props={obj} />
            </div>
            <div className='sing-in-right-column'>
                <p className='singin-paragraph login-page-text'>Привіт!</p>
                <p className='singin-paragraph login-page-text'>Якщо ти вже маєш аккаунт, то можеш увійти тут.</p>
                <div className='button-singin'>
                    <button className='button-singin-push secondary-button' onClick={toggleMode}>Увійти</button>
                </div>
                <div className='forgot-password-link' >
                    <a className='forgot-link' href='#'>Забули пароль</a>
                </div>
            </div>
        </>
    );
}
export default React.memo(Registration)