"use client"

import { useState } from 'react';
import login from '../../pages/api/auth'
import axios from 'axios';
// import { FormEvent } from 'react'
const url = 'https://markethub-mfbw.onrender.com/markethub/users/8';
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJub3R5b3VyYnVzaW5lc3R0LmdtYWlsLmNvbSIsImlzcyI6InRva2VuIiwiaWF0IjoxNzA0ODEzMzE2LCJleHAiOjE3MDQ4OTk3MTZ9.C68eqXFlqQoi5eX_Q2Ndvq-OOqLH78nDPLV-_N6FLcNkiitR65XZOulBSxn1N_b98CoiqWNLAePo6O4zVZnHlA';


export default function SingIn({ toggleMode }) {

    async function handleclick(event) {
        event.preventDefault();
        console.log('go')
        try {
            const response = await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log('Успех:', response.data);
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
