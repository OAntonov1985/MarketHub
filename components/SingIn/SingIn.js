"use client"

import { useState } from 'react';
import login from '../../pages/api/auth'
import axios from 'axios';
// import { FormEvent } from 'react'
const url = 'https://markethub-mfbw.onrender.com/markethub/login';
const data = {
    email: 'notyourbusinestt.gmail.com',
    password: 'pass777333'
};


export default function SingIn({ toggleMode }) {

    async function handleclick(event) {
        event.preventDefault();
        console.log('go')
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            setResponseMessage(responseData);
        } catch (error) {
            console.error('Ошибка:', error);
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
