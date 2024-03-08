import React from 'react';
import Cookies from 'js-cookie';
import { useState } from 'react';

function RightColumnUserInfo() {
    let name = Cookies.get('userName');
    let surName = Cookies.get('userSurname');
    let pfone = Cookies.get('userPhone');
    let email = Cookies.get('userEmail');

    const [isActiveFields, setIsActiveFields] = useState(false);

    function setActive() {
        setIsActiveFields(!isActiveFields);
    }



    // form-input-unactive

    return (
        <div className='right-culumn-user-info-container'>
            <form className="user-info-form">
                <label htmlFor="userPage-userName"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Ваше ім’я</label>
                <input name="userPage-userName" id="userPage-userName"
                    className={`user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    placeholder="Введіть ваше ім'я"
                    value={name} />

                <label htmlFor="userPage-userSurname"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Ваше прізвище</label>
                <input name="userPage-userSurname" id="userPage-userSurname"
                    className={`user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    placeholder="Введіть ваше прізвище"
                    value={surName} />

                <label htmlFor="userPage-userName"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Номер телефону</label>
                <input name="userPage-userName" id="userPage-userName"
                    className={`user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    placeholder="Введіть ваш номер телефону"
                    value={pfone} />

                <label htmlFor="userPage-userName"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Електрона пошта</label>
                <input name="userPage-userName" id="userPage-userName"
                    className={`user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    placeholder="Введіть вашу пошту"
                    value={email} />

                <label htmlFor="userPage-userName"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Пароль</label>
                <input name="userPage-userName" type="password" id="userPage-userName"
                    className={`user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    placeholder="Введіть вашпароль"
                    value={email} />
            </form>
            <div className='user-info-buttons-container'>
                <button
                    className={`user-info-button button-cansel ${isActiveFields ? "" : "button-display-none"}`}
                    disabled={!isActiveFields}
                    onClick={setActive}>
                    Відмінити</button>
                <button className={`user-info-button button-edit ${isActiveFields ? "button-display-none" : ""}`}
                    onClick={setActive}
                >Редагувати дані</button>
                <button
                    className={`user-info-button button-save ${isActiveFields ? "" : "button-display-none"}`}
                    onClick={setActive}
                >Зберегти</button>
            </div>
        </div>
    )
}

export default React.memo(RightColumnUserInfo);