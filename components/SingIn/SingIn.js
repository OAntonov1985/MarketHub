"use client"

import { useState } from 'react';
import login from '../../pages/api/auth'
// import { FormEvent } from 'react'


export default function SingIn({ toggleMode }) {

    async function handleclick(event) {
        event.preventDefault();
        console.log('go')
        try {
            const response = await fetch('https://markethub-mfbw.onrender.com/markethub/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: "notyourbusinestt.gmail.com",
                    password: "pass777333",
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                Cookies.set('jwtToken', token);
                console.log('JWT Token:', token);

            } else {
                console.error('Login failed');

            }
        } catch (error) {
            console.error('Error during login:', error);
        }

    }

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
                <form onSubmit={handleclick} className='singin-form'>
                    <label htmlFor="userEmail" className='label-title'>Електронна пошта</label>
                    <input
                        id="userEmail"
                        type="text"
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
                        <button type='submit' className='button-singin-push btn-login-page'>Увійти</button>
                    </div>
                </form>
            </div>
        </>
    );
}
