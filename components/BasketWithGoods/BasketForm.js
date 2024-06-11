"use client"
import React from 'react';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


function BasketForm() {
    const { userInfo } = useSelector((state) => state.user);

    const [userName, setUserName] = useState('');
    const [inputNameClass, setInputNameClass] = useState("user-name");
    const [showErrorName, setShowErrorName] = useState(false);

    function validateUserName() {
        if (userName.length <= 2) {
            setShowErrorName(true);
            setInputNameClass("user-name border-red");
        }
        else {
            setInputNameClass("user-name border-green");
            setShowErrorName(false);
        };
    };

    //////////   userSurname    //////////
    const [userSurname, setUserSurname] = useState('');
    const [inputSurnameClass, setInputSurnameClass] = useState("user-surname");
    const [showErrorSurname, setShowErrorSurname] = useState(false);

    function validateUserSurname() {
        if (userSurname.length <= 2) {
            setShowErrorSurname(true);
            setInputSurnameClass("user-name border-red");
        }
        else {
            setInputSurnameClass("user-name border-green");
            setShowErrorSurname(false);
        };
    };

    //////////   userPhone    //////////
    const [userPhone, setUserPfone] = useState('');
    const [inputPhoneClass, setInputPhoneClass] = useState("user-tel");
    const [showErrorPhone, setShowErrorPhone] = useState(false);

    function validateUserTel() {
        if (userPhone.length === 12) {
            setInputPhoneClass("user-tel border-green");
            setShowErrorPhone(false);
        }
        else if (userPhone.length !== 12) {
            setInputPhoneClass("user-tel border-red");
            setShowErrorPhone(true)
        }
    };
    //////////   userEmail    //////////
    const [userEmail, setUserEmail] = useState('');
    const [inputEmailClass, setInputEmailClass] = useState("user-email");
    const [showErrorEmail, setShowErrorEmail] = useState(false);

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

    const userNameInCookies = Cookies.get('userName');
    const userSurnameInCookies = Cookies.get('userSurname');
    const userPhoneInCookies = Cookies.get('userPhone');
    const userEmailInCookies = Cookies.get('userEmail');



    useEffect(() => {
        if (userNameInCookies) {
            setUserName(userNameInCookies);
            setUserSurname(userSurnameInCookies);
            setUserEmail(userEmailInCookies);
            if (userPhoneInCookies) setUserPfone(userPhoneInCookies);

        }
        else {
            setUserName("");
            setUserSurname("");
            setUserEmail("");
            setUserPfone("");
        }
    }, [userNameInCookies]);


    const handleChange = async (event) => {
        console.log(event.target.value)
        setUserName(event.target.value);
        // const cityName = event.target.value;
        // console.log(event.target.value)

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         apiKey: 'e89bd5854276bb600236d063f5e2c119',
        //         modelName: 'Address',
        //         calledMethod: 'searchSettlements',
        //         methodProperties: {
        //             CityName: cityName,
        //             Limit: '50',
        //             Page: '2'
        //         }
        //     })
        // };
        // // console.log(777)
        // try {
        //     const response = await fetch('https://api.novaposhta.ua/v2.0/json/', requestOptions);
        //     const data = await response.json();
        //     console.log(data.data[0].Addresses); // Вывод результата в консоль
        // } catch (error) {
        //     console.error('Error:', error);
        // }
    };


    return (
        <form className='basket-user-form'>
            <div className='basket-with-goods-columns'>
                <div className='basket-with-goods-left-column'>
                    <label htmlFor="userName"
                        className='basket-label-title'
                    >Ім`я</label>
                    <input
                        id="userName"
                        type="text"
                        className={`${inputNameClass} input-in-basket`}
                        placeholder="Введіть своє ім’я"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        onBlur={validateUserName}
                        required
                    />
                    {showErrorName !== false ? <p className='paragraf-buttom basket-form-massage'>Мінімальна кількість символів має 3</p> : null}



                    <label htmlFor="userSurname"
                        className='basket-label-title'
                    >Прізвище</label>
                    <input
                        id="userSurname"
                        type="text"
                        className={`${inputSurnameClass} input-in-basket`}
                        placeholder="Введіть своє прізвище"
                        value={userSurname}
                        onChange={(e) => setUserSurname(e.target.value)}
                        onBlur={validateUserSurname}
                        required
                    />
                    {showErrorSurname !== false ? <p className='paragraf-buttom basket-form-massage'>Мінімальна кількість символів має 3</p> : null}
                </div>

                <div className='basket-with-goods-right-column'>
                    <label htmlFor="userPhone"
                        className='basket-label-title'
                    >Номер телефону</label>
                    <input
                        id="userPhone"
                        type="number"
                        className={`${inputPhoneClass} input-in-basket`}
                        placeholder="Введіть свій номер телефону"
                        value={userPhone}
                        onChange={(e) => setUserPfone(e.target.value)}
                        onBlur={validateUserTel}
                        required
                    />
                    {showErrorPhone !== false ? <p className='paragraf-buttom basket-form-massage'>В номері телефону має бути 12 символів</p> : null}

                    <label htmlFor="userEmail"
                        className='basket-label-title'
                    >Електронна пошта</label>
                    <input
                        id="userEmail"
                        type="text"
                        className={`${inputEmailClass} input-in-basket`}
                        placeholder="Введіть свою пошту"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        onBlur={validateEmail}
                        required />
                    {showErrorEmail !== false ? <p className='paragraf-buttom basket-form-massage'>Невірний формат пошти. example123@gmail.com</p> : null}
                </div>
            </div>



        </form>
    )
};

export default React.memo(BasketForm);