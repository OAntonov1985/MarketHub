import Link from 'next/link';
import { useState } from 'react';
import GetInputInfo from '../servises/GetInputFromLoginPage';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Authorization() {
    const helloTextMod1 = `Hello! If you dont have an account yet, you can create one here.`;
    const helloTextMod2 = `Hello! If you already have an account, you can log in here.`;
    const [singInText, setSingInText] = useState('Sign in');
    const [singUpText, setSingUpText] = useState('Sign up');
    const [logInText, setLogInText] = useState('Log in');
    const [displaySecondPassField, setDisplaySecondPassField] =
        useState('none');
    const [helloText, setHelloText] = useState(helloTextMod1);
    const router = useRouter();

    const [pass, setPass] = useState('/nopass.png');
    const [typeInput, setTypeInput] = useState('password');

    const toggleTemp = () => {
        setSingInText(singInText =>
            singInText === 'Sign in' ? 'Sign up' : 'Sign in',
        );
        setSingUpText(singUpText =>
            singUpText === 'Sign up' ? 'Sign in' : 'Sign up',
        );
        setLogInText(logInText =>
            logInText === 'Log in' ? 'Sign up' : 'Log in',
        );
        setHelloText(helloText =>
            helloText === helloTextMod1 ? helloTextMod2 : helloTextMod1,
        );
        setDisplaySecondPassField(displaySecondPassField =>
            displaySecondPassField === 'none' ? 'flex' : 'none',
        );
    };

    const togglePass = () => {
        setPass(pass => (pass === '/nopass.png' ? '/pass.png' : '/nopass.png'));
        setTypeInput(typeInput =>
            typeInput === 'password' ? 'text' : 'password',
        );
    };

    return (
        <>
            <div className="sing__in__wondow flex">
                <div className="sing__in__left__column">
                    <h4 className="author__title left__column__title">
                        {singInText}
                    </h4>
                    <form
                        action=""
                        method="POST"
                        className="login__form"
                        onSubmit={event =>
                            GetInputInfo(event, router, singInText)
                        }
                    >
                        <div className="left__column__row__one input__row">
                            <label htmlFor="input__email" className="label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="input__email input__log"
                                placeholder="Enter your email"
                                pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                                required
                            />
                        </div>
                        <div className="left__column__row__two input__row">
                            <label htmlFor="input__password" className="label">
                                Password
                            </label>
                            <input
                                type={typeInput}
                                className="input__password input__log"
                                minLength={7}
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                className="button__show__pass"
                            >
                                <Image
                                    alt="pass logo"
                                    src={pass}
                                    width={28}
                                    height={28}
                                    onClick={togglePass}
                                />
                            </button>
                        </div>

                        <div
                            className="left__column__row__three input__row"
                            style={{ display: displaySecondPassField }}
                        >
                            <label
                                htmlFor="confirm__password"
                                className="label confirm__password"
                            >
                                Confirm Password
                            </label>
                            <input
                                type={typeInput}
                                className="input__password input__log confirm__password"
                                minLength={7}
                                placeholder="Confirm your password"
                                required={
                                    singInText === 'Sign in' ? false : true
                                }
                            />

                            <button
                                type="button"
                                className="button__show__pass"
                            >
                                <Image
                                    alt="pass logo"
                                    src={pass}
                                    width={28}
                                    height={28}
                                    onClick={togglePass}
                                />
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="author__submit__button login__page__btn"
                        >
                            {logInText}
                        </button>
                    </form>

                    <div className="anowter__way__author">
                        <p className="hello">or</p>
                        <button className="anowter__way__author__bth__google log__btn">
                            Continue with Google
                            <Image
                                src="/googleicon.png"
                                alt="google logo"
                                className="img__logo"
                                width={28}
                                height={28}
                            />
                        </button>
                        <button className="anowter__way__author__bth__fb log__btn">
                            Continue with Facebook
                            <Image
                                src="/fb.png"
                                alt="facebook logo"
                                className="img__logo"
                                width={28}
                                height={28}
                            />
                        </button>
                    </div>

                    <div
                        className="looser__button"
                        style={{
                            display:
                                displaySecondPassField === 'flex'
                                    ? 'none'
                                    : 'flex',
                        }}
                    >
                        <Link href="/">
                            <p className="looser__orgot__password">
                                Forgot password
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="sing__in__right__column">
                    <div className="wrapper__for__right_info">
                        <div className="sing__in__right__column__info">
                            <p className="sing__up__hello_paragraf">
                                {helloText}
                            </p>
                        </div>
                        <div className="sing__up__right__column__btn">
                            <button
                                className="login__page__btn singup__btn"
                                onClick={toggleTemp}
                            >
                                {singUpText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
