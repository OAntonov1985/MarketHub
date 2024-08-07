"use client";
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { signIn } from 'next-auth/react';


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

                console.log(result)
                if (result) {
                    router.push('/userpage');

                }
                if (result.ok == false) {
                    console.error('Помилка входу:', result.error);
                    alert('Користувача з такою поштою або паролем не знайдено.');
                    router.push('/loginpage')
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

            if (result) {
                console.log(result)
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


    async function singInWithFacebook() {
        try {
            const result = await signIn('facebook', {
                redirect: true,
                callbackUrl: "/userpage"
            });
            if (result) {
                router.push('/userpage');
            }
            else {
                setTimeout(() => {
                    alert('Користувача з такою поштою не знайдено.');
                }, 1000);
            }

        } catch (error) {
            alert('Помилка входу:', error);
        }
    }


    function validateEmail() {
        if (/^[a-zA-Z0-9._%+-\u0400-\u04FF]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}$/.test(userEmail)) {
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
                <div className='button-singin'>
                    <button type='submit' className='button-singin-push btn-login-page' >Увійти</button>
                </div>
            </form >
            <p className='use-social-network-par'>Або скористайся соціальними мережами</p>
            <div className='social-buttons'>
                <button onClick={() => singInWithFacebook()} className='social-button'>
                    <p>Facebook</p>
                    <div className='icon-container'>
                        <Image
                            alt="logo image social fase"
                            src='/social_icon/Social Icons.svg'
                            sizes="(max-width: 100%)"
                            quality={100}
                            width={16}
                            height={16}
                            className='social_logo'
                            priority
                        />
                    </div>
                </button>
                <button className='social-button'
                    onClick={() => singInWithGoogle()}>
                    <p>Google</p>
                    <div className='icon-container singin_form'>
                        <Image
                            alt="logo image social fase"
                            src='/social_icon/Vector.svg'
                            sizes="(max-width: 100%)"
                            quality={100}
                            width={16}
                            height={16}
                            className='social_logo'
                            priority
                        />
                    </div>
                </button>
            </div >

        </>
    );
};

export default React.memo(SingInForm);