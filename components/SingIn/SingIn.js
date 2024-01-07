// import Link from "next/link";
// import { useState } from "react";
// import GetInputInfo from "../servises/GetInputFromLoginPage";
// import Image from "next/image";
// import { useRouter } from "next/router";

export default function SingIn() {


    return (
        <>
            <div className='sing-in-left-column'>
                <p className='singin-paragraph'>Привіт!</p>
                <p className='singin-paragraph'>Якщо ти ще не маєш акаунту, то  можеш створити його тут.</p>
                <div className='button-singin'>
                    <button className='button-singin-push btn-login-page'>Зареєструватися</button>
                </div>
            </div>

            <div className='sing-in-right-column'>
                <p className='right-column-paragraph'>Вхід</p>
                <form action="" className='singin-form'>
                    <label htmlFor="userEmail" className='label-title'>Електронна пошта</label>
                    <input type="email"
                        className='userEmail'
                        placeholder='Введіть свою електронну пошту'
                        required />

                    <label htmlFor="userPassword" className='label-title'>Пароль</label>
                    <input
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
