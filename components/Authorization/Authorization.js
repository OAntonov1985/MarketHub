import Link from 'next/link';
import GetInputInfo from '../servises/GetInputFromLoginPage';

export default function Authorization() {
    return (
        <>
            <div className="author__select__window">
                <div className="sing__in__wondow">
                    <div className="sing__in__left__column">
                        <h4 className='author__title left__column__title'>Sign in</h4>
                        <form action="" method='POST' className='login__form' onSubmit={(event) => GetInputInfo(event)}>
                            <div className='left__column__row__one input__row'>
                                <label htmlFor="input__email" className='label'>Email</label>
                                <input type="email" className='input__email input__log' placeholder='Enter your email' pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required />
                            </div>
                            <div className='left__column__row__two input__row'>
                                <label htmlFor="input__password" className='label'>Password</label>
                                <input type="password" className='input__password input__log' placeholder='Enter your password' required />
                            </div>


                            <div className='anowter__way__author'>
                                <p className='hello'>or</p>
                                <button className='anowter__way__author__bth__google log__btn'>
                                    Continue with Google
                                    <img src="/googleicon.png" alt="google logo" className='img__logo' />

                                </button>
                                <button className='anowter__way__author__bth__fb log__btn'>
                                    Continue with Facebook
                                    <img src="/fb.png" alt="" className='img__logo' />
                                </button>

                            </div>
                            <button type='submit' className='author__submit__button login__page__btn' >Log in</button>

                        </form>
                        <div className='looser__button'>
                            <Link href="/">
                                <p className='looser__orgot__password' >Forgot password</p>
                            </Link>
                        </div>

                    </div>
                    <div className="sing__in__right__column">
                        <div className="wrapper__for__right_info">
                            <div className='sing__in__right__column__info'>
                                <p className='sing__up__hello_paragraf'>Hello!
                                    If you don't have an account yet, you can create one here.</p>
                            </div>
                            <div className="sing__up__right__column__btn">
                                <button className='login__page__btn singup__btn'>Sign up</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}