import { useState, useEffect } from 'react';

export default function FormDouble() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [showparagraf, setShowParagraf] = useState(false)
    const [error1, setError1] = useState(false)

    function handleclick() {
        console.log(777)
    }


    function chekcEmailString(event) {
        setUserEmail(event.target.value)
        console.log(event.target.value)

        if (/^[a-zA-Z0-9]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/.test(event.target.value)) {
            console.log('true')
            setError1(true)
            // setShowParagraf(false)
        }
        else {
            console.log('false');
            setError1(false)
        }
    }


    return (
        <>
            <form
                onSubmit={handleclick}
                className='singin-form'>
                <label htmlFor="userEmail" className='label-title' >Електронна пошта</label>
                <div>
                    <input
                        id="userEmail"
                        type="email"
                        className={error1 === false ? "user-email-test border-red" : "user-email-test border-green"}
                        // className={error1 === false ? "user-email-test border-red" : "user-email-test border-green"}
                        placeholder='Введіть свою електронну пошту'
                        // onChange={(e) => setUserEmail(e.target.value)}
                        // pattern='^[^\s@]+@[a-zA-Z]+(?:\.[a-zA-Z]{2,})+$'
                        value={userEmail}
                        onChange={chekcEmailString}
                        required />
                    {showparagraf !== false ? <p className='paragraf-buttom'>Невірний формат пошти. example123@gmail.com</p> : null}
                    {/* <p className='paragraf-buttom'>Невірний формат пошти. example123@gmail.com</p> */}
                </div>

                <label htmlFor="userPassword" className='label-title'>Пароль</label>

                <input
                    id="userPassword"
                    type='password'
                    className='user-password'
                    placeholder='Введіть свій пароль'
                    onInput={(e) => setUserPassword(e.target.value)}
                    min={8}
                    pattern='^[^\-+=\s]{2,}$'
                    title="Некоректні символи: -, +, =, або пробіл"
                    value={userPassword}
                    required
                />
            </form>
        </>
    )
}