import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import singInFunction from '@/pages/api/SingInFunction';
import Image from "next/image";


function SingInForm({ props }) {
    const { setLoading } = props;
    const router = useRouter();

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
            setLoading(true);
            const body = {
                "email": userEmail,
                "password": userPassword
            };

            const { JWTToken, Errorflag } = await singInFunction(body);
            if (Errorflag) {
                setLoading(false);
            }
            else if (JWTToken) {
                setLoading(false)
                router.push('/userpage');
            };
        }
        else alert('Помилка заповнення одного з полів');
    };


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
                    <div className='icon-show-password'></div>
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
                    <button type='submit' className='button-singin-push btn-login-page'>Увійти</button>
                </div>
                <div className='forgot-password-link'>
                    <a className='forgot-link' href='#'>Забули пароль</a>
                </div>
            </form>
        </>
    );
};

export default React.memo(SingInForm)