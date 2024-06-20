import React from 'react';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import ChangeUserInfo from '@/pages/api/ChangeUserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, setActiveSpinner } from '@/slices/userSlice';


function RightColumnUserInfo() {
    const dispatch = useDispatch();
    let name = Cookies.get('userName');
    let surName = Cookies.get('userSurname');
    let pfone = Cookies.get('userPhone');
    let email = Cookies.get('userEmail');
    let idString = Cookies.get('userID');
    let id = parseInt(idString, 10);

    const [isActiveFields, setIsActiveFields] = useState(false);
    const [userSurname, setUserSurname] = useState(surName);
    const [userName, setUserNameIn] = useState(name);
    const [userPassword, setUserPassword] = useState('XXXXXXXX');
    const [userPhone, setUserPfone] = useState(pfone);
    const [isChangeClientInfo, setIsChangeClientInfo] = useState(false);


    //////////   userEmail    //////////
    const [userEmail, setUserEmail] = useState(email);
    const [inputEmailClass, setInputEmailClass] = useState("user-email");
    const [showErrorEmail, setShowErrorEmail] = useState(false);

    function validateEmail() {
        const emailRegex = /^[^\s@]{3,}@.{3,}\..{2,}$/;

        if (emailRegex.test(userEmail)) {
            setShowErrorEmail(false);
            setInputEmailClass("user-email border-green");
        } else {
            setShowErrorEmail(true);
            setInputEmailClass("user-email border-red");
        }
    }



    async function saveChanges() {
        if (userName.trim().length <= 2) alert("Їм'я має містити більше ніж 2 символи");
        else if (userSurname.trim().length <= 2) alert("Прізвище має містити більше ніж 2 символи");
        else if (userPhone.length < 12) alert("Невірно введений телефон. Спробуйте ще");
        else if (userPassword.trim().length <= 6) alert("Мінімальна кількість символів в паролі має бути більше шести!");
        else if (userName.trim().length > 2 && userSurname.trim().length > 2 && userPhone.length !== 12 && userPassword.trim().length > 6) setIsActiveFields(!isActiveFields);
        const newUserInfo = {
            userId: id,
            newUserName: userName.trim(),
            newUserSurname: userSurname.trim(),
            newUserPhone: userPhone.trim(),
            newUserEmail: userEmail.trim(),
            ...(userPassword !== 'XXXXXXXX' && { newUserPassword: userPassword.trim() })
        };
        dispatch(setActiveSpinner(true));
        const { result } = await ChangeUserInfo(newUserInfo);
        if (result.status == 200) {
            if (name !== userName) {
                dispatch(setUserName(userName));
                Cookies.set('userName', userName, { path: '/' });
            }
            if (surName !== userSurname) {
                Cookies.set('userSurname', userSurname, { path: '/' });
            }
            if (pfone !== userPhone) {
                Cookies.set('userPhone', userPhone, { path: '/' });
            }
            if (email !== userEmail) {
                Cookies.set('userEmail', userEmail, { path: '/' });
            }
            dispatch(setActiveSpinner(false));
            alert("Облікові дані успішно змінено");
        }
        dispatch(setActiveSpinner(false));
        setIsActiveFields(false);
    }

    function changeUserData() {
        setIsActiveFields(true);
    }

    function deleteChanges() {
        setIsActiveFields(!isActiveFields);
        setUserName(name);
        setUserSurname(surName);
        setUserPfone(pfone);
        setUserEmail(email);
        setUserPassword('XXXXXXXX');
    }
    console.log(isChangeClientInfo)

    useEffect(() => {
        if (name !== userName || surName !== userSurname || userPassword !== 'XXXXXXXX' || pfone !== userPhone) {
            setIsChangeClientInfo(true);
        } else {
            setIsChangeClientInfo(false);
        }
    }, [name, surName, userPassword, pfone, userName, userSurname]);

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
                    onChange={(e) => setUserNameIn(e.target.value)}
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
                    className={`user-info-button button-save 
                        ${isActiveFields ? "" : "button-display-none"} 
                        ${!isChangeClientInfo ? "unactive-button" : ""}`}
                    onClick={saveChanges}
                    disabled={isChangeClientInfo}
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