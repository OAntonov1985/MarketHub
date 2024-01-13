import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
// import singInFunction from '../FunctionHelpers/SingInFunction';
import singInFunction from '@/pages/api/SingInFunction';




function SingIn({ toggleMode }) {
    const router = useRouter();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');


    async function handleclick(event) {
        event.preventDefault();
        const body = {
            "email": userEmail,
            "password": userPassword
        };
        // singInFunction(body);

        const { JWTToken } = await singInFunction(body);
        if (JWTToken) {
            router.push('/userpage');
        }
    }


    // useEffect(() => {
    //     console.log(userEmail);
    //     console.log(userPassword);
    //     // const token = Cookies.get('jwtToken')
    //     // console.log(token)
    //     // console.log(body)
    // }, [userEmail, userPassword]);

    return (
        <>
            <div className='sing-in-left-column'>
                <h4 className='right-column-paragraph'>Вхід</h4>
                <form
                    onSubmit={handleclick}
                    className='singin-form'>
                    <label htmlFor="userEmail" className='label-title' >Електронна пошта</label>
                    <input
                        id="userEmail"
                        type="email"
                        className='userEmail'
                        placeholder='Введіть свою електронну пошту'
                        onChange={(e) => setUserEmail(e.target.value)}
                        pattern='^[^\s@]+@[^\s@]+\.[^\s@]{2,}$'
                        value={userEmail}
                        required />
                    <label htmlFor="userPassword" className='label-title'>Пароль</label>
                    <input
                        id="userPassword"
                        type="password"
                        className='userPassword'
                        placeholder='Введіть свій пароль'
                        onInput={(e) => setUserPassword(e.target.value)}
                        pattern='^[^\-+=\s]{2,}$'
                        title="Некорректные символы: -, +, =, или пробел"
                        value={userPassword}
                        min={8}
                        required
                    />
                    <div className='button-singin'>
                        <button type='submit' className='button-singin-push btn-login-page'>Увійти</button>
                    </div>
                    <div className='forgot-password-link'>
                        <a className='forgot-link' href='#'>Забули пароль</a>
                    </div>
                </form>
            </div>
            <div className='sing-in-right-column'>
                <p className='singin-paragraph login-page-text'>Привіт!</p>
                <p className='singin-paragraph login-page-text'>Якщо ти ще не маєш акаунту, то  можеш створити його тут.</p>
                <div className='button-singin'>
                    <button className='button-singin-push btn-login-page' onClick={toggleMode} >Зареєструватися</button>
                </div>
            </div>
        </>
    );
}

export default React.memo(SingIn);


