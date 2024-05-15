"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import singInFunction from '@/pages/api/SingInFunction';
import Image from "next/image";
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUserName } from '@/slices/userSlice';
import { signIn } from 'next-auth/react';
import SingIn from './SingIn';


// import { useDispatch } from 'react-redux';




function SingInForm({ props }) {
    const { setLoading } = props;
    const router = useRouter();
    const dispatch = useDispatch();



    const [userEmail, setUserEmail] = useState('');
    const [inputEmailClass, setInputEmailClass] = useState("user-email");
    const [showErrorEmail, setShowErrorEmail] = useState(false);

    const [userPassword, setUserPassword] = useState('');
    const [inputPasswordClass, setInputPasswordClass] = useState("user-password");
    const [showErrorPassword, setShowErrorPassword] = useState(false);

    const [pass, setPass] = useState("/eyeclosed.png");
    const [typeInput, setTypeInput] = useState("password");



    async function handleclick(event) {
        event.preventDefault();

        // const currentDate = new Date();
        // currentDate.setTime(currentDate.getTime() + (24 * 60 * 60 * 1000));

        if (showErrorEmail === false && showErrorPassword === false) {
            const body = {
                "email": userEmail,
                "password": userPassword
            };

            try {
                const result = await signIn('credentials', {
                    redirect: false,
                    email: body.email,
                    password: body.password,
                });
                // console.log(result)
                if (result.error) {
                    console.error('Помилка входу:', result.error);
                    alert('Користувача з такою поштою або паролем не знайдено.')
                } else {
                    router.push('/userpage');

                }
            } catch (error) {
                console.error('Помилка входу:', error);
            }
        }
        else alert('Помилка заповнення одного з полів');
    };

    async function singInWithGoogle() {
        try {
            const result = await signIn('google', {
                redirect: true,
                callbackUrl: "/userpage"
            });
            // console.log(result)
            if (result) {
                router.push('/userpage');
            } else {
                setTimeout(() => {
                    alert('Користувача з такою поштою не знайдено.');
                }, 1000);
            }

        } catch (error) {
            alert('помилка входу:', error);
        }
    }


    function validateEmail() {
        if (/^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{2,}$/.test(userEmail)) {
            setShowErrorEmail(false);
            setInputEmailClass("user-email border-green")
        }
        else {
            setShowErrorEmail(true);
            setInputEmailClass("user-email border-red")
        }
    }

    function validatePassword() {
        if (userPassword.length <= 5) {
            setShowErrorPassword(true);
            setInputPasswordClass("user-password border-red");
        }
        else {
            setInputPasswordClass("user-password border-green");
            setShowErrorPassword(false)
        }
    }

    const togglePass = () => {
        setPass(pass => (pass === "/eyeclosed.png" ? "/eyeopen.png" : "/eyeclosed.png"));
        setTypeInput(typeInput =>
            typeInput === "password" ? "text" : "password",
        );
    };


    return (
        <>
            <form
                onSubmit={handleclick}
                className='singin-form'>
                <label htmlFor="userEmail" className='label-title' >Електронна пошта</label>
                <div className='container-to-field'>
                    <input
                        id="userEmail"
                        type="text"
                        className={inputEmailClass}
                        placeholder='Введіть свою пошту'
                        onChange={(e) => setUserEmail(e.target.value)}
                        value={userEmail}
                        onBlur={validateEmail}
                        required />
                    {showErrorEmail !== false ? <p className='paragraf-buttom'>Невірний формат пошти. example123@gmail.com</p> : null}
                </div>

                <label htmlFor="userPassword" className='label-title'>Пароль</label>
                <div className='container-to-field'>
                    <input
                        id="userPassword"
                        type={typeInput}
                        className={inputPasswordClass}
                        placeholder='Введіть свій пароль'
                        onInput={(e) => setUserPassword(e.target.value)}
                        min={6}
                        value={userPassword}
                        onBlur={validatePassword}
                        required
                    />
                    <Image
                        className='icon-show-password'
                        alt='pass logo'
                        src={pass}
                        width={24}
                        height={18}
                        onClick={togglePass}
                    />
                    {showErrorPassword !== false ? <p className='paragraf-buttom'>Довжина паролю має бути 6 символів мінімум</p> : null}
                </div>

                <p className='use-social-network-par'>Або скористайся соціальними мережами</p>
                <div className='social-buttons'>
                    {/* <button onClick={() => signIn('fasebook', {
                        redirect: true,
                        callbackUrl: '/userpage'
                    })} className='social-button'>
                        <p>Facebook</p>
                        <div className='icon-container'>
                            <Image
                                alt="logo image social fase"
                                src='/social_icon/Social Icons.svg'
                                sizes="(max-width: 100%)"
                                quality={100}
                                width={16}
                                height={16}
                                className='logo-image'
                                priority
                            />
                        </div>
                    </button> */}

                </div >
                <div className='button-singin'>
                    <button type='submit' className='button-singin-push btn-login-page' >Увійти</button>
                </div>
                <Link href='/forgetpassword/' className='forgot-link'>
                    <div className='forgot-password-link'>
                        <p className='forgot-link'>Забули пароль</p>
                    </div>
                </Link>
            </form >
            <button className='social-button'
                onClick={() => singInWithGoogle()}>
                <p>Google</p>
                <div className='icon-container'>
                    <Image
                        alt="logo image social fase"
                        src='/social_icon/Vector.svg'
                        sizes="(max-width: 100%)"
                        quality={100}
                        width={16}
                        height={16}
                        className='logo-image'
                        priority
                    />
                </div>
            </button>
        </>
    );
};

export default React.memo(SingInForm);