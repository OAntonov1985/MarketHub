import SingInForm from './SingInForm';
import React from 'react';



function SingIn({ props }) {
    const { loading, setLoading, toggleMode } = props;
    const obj = { setLoading };

    return (
        <>
            <div className='sing-in-left-column'>
                <h4 className='right-column-paragraph'>Вхід</h4>
                <SingInForm props={obj} />
            </div>
            <div className='sing-in-right-column'>
                <p className='singin-paragraph login-page-text'>Привіт!</p>
                <p className='singin-paragraph login-page-text'>Якщо ти ще не маєш аккаунту, то  можеш створити його тут.</p>
                <div className='button-singin'>
                    <button className='button-singin-push secondary-button' onClick={toggleMode} >Зареєструватися</button>
                </div>
            </div>
        </>
    );
};

export default React.memo(SingIn);