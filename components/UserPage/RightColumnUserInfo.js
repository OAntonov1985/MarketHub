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


    //////////   userPassword    //////////
    const [userPassword, setUserPassword] = useState('XXXXXXXX');

    //////////   userEmail    //////////
    const [userEmail, setUserEmail] = useState(email);
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
    // console.log(userPhone.length)

    function saveChanges() {
        if (userName.trim().length <= 2) alert("Їм'я має містити більше ніж 2 символи");
        else if (userSurname.trim().length <= 2) alert("Прізвище має містити більше ніж 2 символи");
        else if (userPhone.length < 12) alert("Невірно введений телефон. Спробуйте ще");
        else if (userPassword.trim().length <= 6) alert("Мінімальна кількість символів в паролі має бути більше шести!");
        else if (userName.trim().length > 2 && userSurname.trim().length > 2 && userPhone.length !== 12 && userPassword.trim().length > 6) setIsActiveFields(!isActiveFields);
        const newUserInfo = {
            newUserName: userName,
            newUserSurname: userSurname,
            newUserPhone: userPhone,
            newUserPassword: userPassword
        }

        console.log(newUserInfo)
        // console.log(userSurname)
        // console.log(userPhone)
        // console.log(userPassword)
    }

    function changeUserData() {
        setIsActiveFields(true);
    }

    function deleteChanges() {
        setIsActiveFields(!isActiveFields);
        setUserName(name);
        setUserSurname(surName);
        setUserPfone(pfone);
        setUserPassword('XXXXXXXX');
    }

    return (
        <div className='right-culumn-user-info-container'>
            <h4 className='user-info-title'>Мій профіль</h4>
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
                    className={isActiveFields ? (`user-info-form-input ${userPhone.trim().length < 12 ? "form-input-border-red" : "form-input-border-green"}`) : `user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    type="number"
                    onChange={(e) => setUserPfone(e.target.value)}
                    placeholder="Введіть ваш номер телефону"
                    value={userPhone} />

                <label htmlFor="userEmail"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Електрона пошта</label>
                <input name="userEmail" id="userEmail"
                    className={isActiveFields ? (`user-info-form-input ${showErrorEmail ? "form-input-border-red" : "form-input-border-green"}`) : `user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    placeholder="Введіть вашу пошту"
                    autoComplete="userEmail"
                    onChange={(e) => setUserEmail(e.target.value)}
                    onBlur={(e) => validateEmail(e.target.value)}
                    value={userEmail} />

                <label htmlFor="userPassword"
                    className={`user-info-form-label ${isActiveFields ? "" : "form-input-unactive-text"}`}>
                    Пароль</label>
                <input name="userPassword"
                    type={!isActiveFields ? "password" : "text"}
                    id="userPassword"
                    className={isActiveFields ? (`user-info-form-input ${userPassword.trim().length <= 6 ? "form-input-border-red" : "form-input-border-green"}`) : `user-info-form-input ${isActiveFields ? "" : "form-input-unactive"}`}
                    disabled={!isActiveFields}
                    onClick={() => setUserPassword("")}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder="Введіть вашпароль"
                    autoComplete="current-password"
                    value={userPassword} />
            </form>
            <div className='user-info-buttons-container'>
                <button
                    className={`user-info-button button-cansel  ${isActiveFields ? "" : "button-display-none"}`}
                    disabled={!isActiveFields}
                    onClick={deleteChanges}>
                    Відмінити</button>
                <button
                    className={`user-info-button button-save ${isActiveFields ? "" : "button-display-none"}`}
                    onClick={saveChanges}
                >Зберегти</button>
            </div>
            <div className='user-info-buttons-container-edit'>
                <button className={`user-info-button button-edit ${isActiveFields ? "button-display-none" : ""}`}
                    onClick={changeUserData}
                >Редагувати дані</button>
            </div>

        </div>
    )
}

export default React.memo(RightColumnUserInfo);