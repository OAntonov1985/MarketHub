import React from 'react';
import RegistrationForm from './RegistrationForm';
import Link from 'next/link';


function Registration({ props }) {
    const { isRegistration, setLoading, toggleMode } = props;



    return (
        <>
            <div className={`sing-in-left-column ${isRegistration ? null : "padding-top"}`}>
                <h4 className='right-column-paragraph'>Реєстрація</h4>
                <RegistrationForm props={setLoading} />
            </div>
            <div className='sing-in-right-column'>
                <p className='singin-paragraph login-page-text'>Привіт!</p>
                <p className='singin-paragraph login-page-text'>Якщо ти вже маєш аккаунт, то можеш увійти тут.</p>
                <div className='button-singin'>
                    <button className='button-singin-push secondary-button' onClick={toggleMode}>Увійти</button>
                </div>
            </div>
        </>
    );
};
export default React.memo(Registration);