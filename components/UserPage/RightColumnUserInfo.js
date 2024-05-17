import React from 'react';
import Cookies from 'js-cookie';
import { useState } from 'react';

function RightColumnUserInfo() {
    let name = Cookies.get('userName');
    let surName = Cookies.get('userSurname');
    let pfone = Cookies.get('userPhone');
    let email = Cookies.get('userEmail');

    const [isActiveFields, setIsActiveFields] = useState(false);

    //////////   userName    //////////
    const [userName, setUserName] = useState(name);

    //////////   userSurname    //////////
    const [userSurname, setUserSurname] = useState(surName);

    //////////   userPhone    //////////
    const [userPhone, setUserPfone] = useState(pfone);
    const [showErrorPhone, setShowErrorPhone] = useState(false);
    function validateUserTel(e) {
        setUserPfone(e)
        if (userPhone.length === 12) {
            setShowErrorPhone(true);
        }
        else setShowErrorPhone(false);
    };

    //////////   userEmail    //////////
    const [userEmail, setUserEmail] = useState(email);
    const [showErrorEmail, setShowErrorEmail] = useState(false);

    function validateEmail(e) {
        setUserEmail(e);
        if (/^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{2,}$/.test(userEmail)) setShowErrorEmail(false);
        else setShowErrorEmail(true);
    };

    //////////   userPassword    //////////
    const [userPassword, setUserPassword] = useState('XXXXXXXX');

    function saveChanges() {
        if (userName.trim().length <= 2) alert("Їм'я має містити більше ніж 2 символи")
        else if (userSurname.trim().length <= 2) alert("Прізвище має містити більше ніж 2 символи")
        else if (showErrorPhone) alert("Невірно введений телефон. Спробуйте ще")
        else if (showErrorEmail) alert("Невірно введена пошта. Спробуйте ще")
        else if (userPassword.trim().length <= 6) alert("Мінімальна кількість символів в паролі має бути більше шести!")
        else if (userName.trim().length > 2 && userSurname.trim().length > 2 && !showErrorPhone && !showErrorEmail && userPassword.trim().length > 6) setIsActiveFields(!isActiveFields);
    }

    function changeUserData() {
        setIsActiveFields(true);
    }

    function deleteChanges() {
        setIsActiveFields(!isActiveFields);
        setUserName(name);
        setUserSurname(surName);
        setUserEmail(email);
        setUserPfone(pfone);
        setUserPassword('XXXXXXXX');
    }

    return (
        <div className='right-culumn-user-info-container'>
            <form className="user-info-form">
                <label htmlFor="userName"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Ваше ім’я</label>
                <input name="userName" id="userName"
                    className={isActiveFields ? (`user-info-form-input ${userName.trim().length <= 2 ? "form-input-border-red" : "form-input-border-green"}`) : `user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Введіть ваше ім'я"
                    value={userName} />

                <label htmlFor="userSurname"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Ваше прізвище</label>
                <input name="userSurname" id="userSurname"
                    className={isActiveFields ? (`user-info-form-input ${userSurname.trim().length <= 2 ? "form-input-border-red" : "form-input-border-green"}`) : `user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    onChange={(e) => setUserSurname(e.target.value)}
                    placeholder="Введіть ваше прізвище"
                    value={userSurname} />

                <label htmlFor="userPhone"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Номер телефону</label>
                <input name="userPhone" id="userPhone"
                    className={isActiveFields ? (`user-info-form-input ${showErrorPhone ? "form-input-border-red" : "form-input-border-green"}`) : `user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    type="number"
                    onChange={(e) => validateUserTel(e.target.value)}
                    placeholder="Введіть ваш номер телефону"
                    value={userPhone} />

                <label htmlFor="userEmail"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Електрона пошта</label>
                <input name="userEmail" id="userEmail"
                    className={isActiveFields ? (`user-info-form-input ${showErrorEmail ? "form-input-border-red" : "form-input-border-green"}`) : `user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    onChange={(e) => validateEmail(e.target.value)}
                    placeholder="Введіть вашу пошту"
                    autoComplete="userEmail"
                    value={userEmail} />

                <label htmlFor="userPassword"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Пароль</label>
                <input name="userPassword" type="password" id="userPassword"
                    className={isActiveFields ? (`user-info-form-input ${userPassword.trim().length <= 6 ? "form-input-border-red" : "form-input-border-green"}`) : `user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder="Введіть вашпароль"
                    autoComplete="current-password"
                    value={userPassword} />
            </form>
            <div className='user-info-buttons-container'>
                <button
                    className={`user-info-button button-cansel ${isActiveFields ? "" : "button-display-none"}`}
                    disabled={!isActiveFields}
                    onClick={deleteChanges}>
                    Відмінити</button>
                <button className={`user-info-button button-edit ${isActiveFields ? "button-display-none" : ""}`}
                    onClick={changeUserData}
                >Редагувати дані</button>
                <button
                    className={`user-info-button button-save ${isActiveFields ? "" : "button-display-none"}`}
                    onClick={saveChanges}
                >Зберегти</button>
            </div>

        </div>
    )
}

export default React.memo(RightColumnUserInfo);