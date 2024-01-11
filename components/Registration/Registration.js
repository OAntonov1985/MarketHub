import React from 'react';

function Registration({ toggleMode }) {
    return (
        <>
            <div className="sing-in-left-column">
                <h4 className='right-column-paragraph'>Реєстрація</h4>
                <form action="" className='registration-form'>
                    <label htmlFor="userName" className='label-title'>Ім`я</label>
                    <input
                        id="userName"
                        type="text"
                        className='userName'
                        placeholder='Введіть своє і`мя'
                        required />

                    <label htmlFor="userSurname" className='label-title'>Прізвище</label>
                    <input
                        id="userSurname"
                        type="text"
                        className='userSurname'
                        placeholder='Введіть своє прізвище'
                        required
                    />
                    <label htmlFor="userTel" className='label-title'>Номер телефону</label>
                    <input
                        id="userTel"
                        type="number"
                        className='userTel'
                        placeholder='Введіть свій телефон'
                        required
                    />
                    <label htmlFor="userEmail" className='label-title'>Електронна пошта</label>
                    <input
                        id="userEmail"
                        type="email"
                        className='userEmail'
                        placeholder='Введіть електронну пошту'
                        required
                    />
                    <label htmlFor="userPassword" className='label-title'>Пароль</label>
                    <input
                        id="userPassword"
                        type="password"
                        className='userPassword'
                        placeholder='Придумайте пароль'
                        required
                    />
                    {/* <label htmlFor="userPasswordAgain" className='label-title'>Пароль</label>
                    <input
                        id="userPasswordAgain"
                        type="password"
                        className='userPasswordAgain'
                        placeholder='Повторно введіть пароль'
                        required
                    /> */}
                    <div className='button-singin'>
                        <button className='button-singin-push btn-login-page'>Зареєструватися</button>
                    </div>
                </form>
            </div>
            <div className='sing-in-right-column'>
                <p className='singin-paragraph login-page-text'>Привіт!</p>
                <p className='singin-paragraph login-page-text'>Якщо ти вже маєш акаутн, то можеш увійти тут.</p>
                <div className='button-singin'>
                    <button className='button-singin-push btn-login-page' onClick={toggleMode}>Увійти</button>
                </div>
            </div>
        </>
    );
}
export default React.memo(Registration)