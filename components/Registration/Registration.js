import React from 'react';
import RegistrationForm from './RegistrationForm';
import Link from 'next/link';


function Registration({ props }) {
    const { loading, setLoading, toggleMode } = props;
    const obj = { setLoading };


    return (
        <>
            <div className="sing-in-left-column">
                <h4 className='right-column-paragraph'>Реєстрація</h4>
                <RegistrationForm props={obj} />
            </div>
            <div className='sing-in-right-column'>
                <p className='singin-paragraph login-page-text'>Привіт!</p>
                <p className='singin-paragraph login-page-text'>Якщо ти вже маєш аккаунт, то можеш увійти тут.</p>
                <div className='button-singin'>
                    <button className='button-singin-push secondary-button' onClick={toggleMode}>Увійти</button>
                </div>
                {/* <Link href='/forgetpassword/' className='forgot-link'>
                    <div className='forgot-password-link'>
                        <p className='forgot-link'>Забули пароль</p>
                    </div>
                </Link> */}
            </div>
        </>
    );
};
export default React.memo(Registration);