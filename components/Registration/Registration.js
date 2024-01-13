import React from 'react';
import { useState } from 'react';
import ShowOrHidePasswordIcon from '../ShowOrHidePasswordIcon/ShowOrHidePasswordIcon';

function Registration({ toggleMode }) {

    const [showPassword, setShowPassword] = useState('password');
    const propsForPass = { showPassword, setShowPassword }

    return (
        <>
            <div className="sing-in-left-column">
                <h4 className='right-column-paragraph'>Реєстрація</h4>
                <form action="" className='registration-form'>
                    <label htmlFor="userName" className='label-title'>Ім`я</label>
                    <input
                        id="userName"
                        type="text"
                        className='user-name'
                        placeholder='Введіть своє і`мя'
                        required />

                    <label htmlFor="userSurname" className='label-title'>Прізвище</label>
                    <input
                        id="user-surname"
                        type="text"
                        className='user-surname'
                        placeholder='Введіть своє прізвище'
                        required
                    />
                    <label htmlFor="userTel" className='label-title'>Номер телефону</label>
                    <input
                        id="userTel"
                        type="number"
                        className='user-tel'
                        placeholder='Введіть свій телефон'
                        required
                    />
                    <label htmlFor="userEmail" className='label-title'>Електронна пошта</label>
                    <input
                        id="userEmail"
                        type="email"
                        className='user-email'
                        placeholder='Введіть електронну пошту'
                        required
                    />
                    <label htmlFor="userPassword" className='label-title'>Пароль</label>
                    <input
                        type={showPassword}
                        className='user-password'
                        placeholder='Придумайте пароль'
                        required
                    />
                    {/* <ShowOrHidePasswordIcon props={propsForPass} /> */}
                    <label htmlFor="userPasswordAgain" className='label-title label-title-last'>Підтвердження паролю</label>
                    <input
                        id="userPasswordAgain"
                        type={showPassword}
                        className='user-passwordAgain'
                        placeholder='Повторно введіть пароль'
                        required
                    />
                    {/* <ShowOrHidePasswordIcon props={propsForPass} /> */}
                    <div className='button-singin'>
                        <button className='button-singin-push btn-login-page'>Зареєструватися</button>
                    </div>
                </form>
            </div>
            <div className='sing-in-right-column'>
                <p className='singin-paragraph login-page-text'>Привіт!</p>
                <p className='singin-paragraph login-page-text'>Якщо ти вже маєш аккаутн, то можеш увійти тут.</p>
                <div className='button-singin'>
                    <button className='button-singin-push btn-login-page' onClick={toggleMode}>Увійти</button>
                </div>
                <div className='forgot-password-link'>
                    <a className='forgot-link' href='#'>Забули пароль</a>
                </div>
            </div>
        </>
    );
}
export default React.memo(Registration)