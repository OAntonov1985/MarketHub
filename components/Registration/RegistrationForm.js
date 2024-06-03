import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import RegistrationFunction from '@/pages/api/RegistrationFunction';
import { signIn } from 'next-auth/react';


function RegistrationForm({ props }) {
    const { setLoading } = props;
    const router = useRouter();
    //////////   userName    //////////
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

    //////////   userPassword    //////////
    const [userPassword, setUserPassword] = useState('');
    const [inputPasswordClass, setInputPasswordClass] = useState("user-password");
    const [showErrorPassword, setShowErrorPassword] = useState(false);

    function validatePassword() {
        if (userPassword.length <= 5) {
            setShowErrorPassword(true);
            setInputPasswordClass("user-password border-red");
        }
        else {
            setInputPasswordClass("user-password border-green");
            setShowErrorPassword(false)
        }
    };

    //////////   userPasswordSecondField    //////////
    const [userConfirmPassword, setUserConfirmPassword] = useState('');
    const [inputConfirmPasswordClass, setInputConfirmPasswordClass] = useState("user-passwordAgain");
    const [showErrorConfirmPassword, setShowErrorConfirmPassword] = useState(false);

    function validateComfirmPassword() {
        if (userConfirmPassword.length <= 5) {
            setShowErrorConfirmPassword(true);
            setInputConfirmPasswordClass("user-password border-red");
        }
        else {
            setInputConfirmPasswordClass("user-password border-green");
            setShowErrorConfirmPassword(false)
        }
    };


    //////////   togglePassword Icons and type    //////////
    const [pass, setPass] = useState("/eyeclosed.png");
    const [typeInput, setTypeInput] = useState("password");

    const togglePass = () => {
        setPass(pass => (pass === "/eyeclosed.png" ? "/eyeopen.png" : "/eyeclosed.png"));
        setTypeInput(typeInput =>
            typeInput === "password" ? "text" : "password",
        );
    };

    async function singInWithGoogle() {

        try {
            const result = await signIn('google1', {
                redirect: true,
                callbackUrl: "/userpage"
            });
            if (result) {
                router.push('/userpage');
            } else {
                setTimeout(() => {
                    alert('Користувача з такою поштою не знайдено.');
                }, 1000);
            }

        } catch (error) {
            alert('помилка входу:', error);
        }
    }



    async function handleclick(event) {
        event.preventDefault();
        if (userPassword !== userConfirmPassword) {
            alert("Значення поля Пароль та поля Підтвердження паролю не співпадають!")
        }

        else if (showErrorName === false && showErrorSurname === false && showErrorEmail === false && showErrorPhone === false && showErrorPassword === false && showErrorConfirmPassword === false) {
            setLoading(true)
            const body = {
                "firstname": userName,
                "lastname": userSurname,
                "email": userEmail,
                "phone": userPhone,
                "password": userPassword
            };

            const { JWTToken, Errormasage } = await RegistrationFunction(body);
            if (Errormasage) {
                setLoading(false);
            }
            else if (JWTToken) {
                setLoading(false);
                router.push('/userpage');
            };
        }
        else alert('Помилка заповнення одного з полів');
    };


    return (
        <>
            <form
                onSubmit={handleclick}
                className='singin-form'>
                <label htmlFor="user-name" className='label-title'>Ім`я</label>
                <div className='container-to-field'>
                    <input
                        id="user-name"
                        type="text"
                        className={inputNameClass}
                        placeholder='Введіть своє і`мя'
                        onChange={(e) => setUserName(e.target.value)}
                        onBlur={validateUserName}
                        required />
                    {showErrorName !== false ? <p className='paragraf-buttom'>Мінімальна кількість символів має 3</p> : null}
                </div>

                <label htmlFor="user-surname" className='label-title'>Прізвище</label>
                <div className='container-to-field'>
                    <input
                        id="user-surname"
                        type="text"
                        className={inputSurnameClass}
                        placeholder='Введіть своє прізвище'
                        onChange={(e) => setUserSurname(e.target.value)}
                        onBlur={validateUserSurname}
                        required
                    />
                    {showErrorSurname !== false ? <p className='paragraf-buttom'>Мінімальна кількість символів має 3</p> : null}
                </div>

                <label htmlFor="userTel" className='label-title'>Номер телефону</label>
                <div className='container-to-field'>
                    <input
                        id="userTel"
                        type="number"
                        className={inputPhoneClass}
                        placeholder='380771234567'
                        onChange={(e) => setUserPfone(e.target.value)}
                        onBlur={validateUserTel}
                        required
                    />
                    {showErrorPhone !== false ? <p className='paragraf-buttom'>В номері телефону має бути 12 символів</p> : null}
                </div>

                <label htmlFor="userEmail" className='label-title' >Електронна пошта</label>
                <div className='container-to-field'>
                    <input
                        id="userEmail"
                        type="text"
                        className={inputEmailClass}
                        placeholder='Введіть свою пошту'
                        onChange={(e) => setUserEmail(e.target.value)}
                        value={userEmail}
                        onBlur={validateEmail}
                        required />
                    {showErrorEmail !== false ? <p className='paragraf-buttom'>Невірний формат пошти. example123@gmail.com</p> : null}
                </div>

                <label htmlFor="userPassword" className='label-title'>Пароль</label>
                <div className='container-to-field'>
                    <input
                        id="userPassword"
                        type={typeInput}
                        className={inputPasswordClass}
                        placeholder='Введіть свій пароль'
                        onInput={(e) => setUserPassword(e.target.value)}
                        min={6}
                        value={userPassword}
                        onBlur={validatePassword}
                        required
                    />
                    <div className='icon-show-password'></div>
                    <Image
                        className='icon-show-password'
                        alt='pass logo'
                        src={pass}
                        width={24}
                        height={18}
                        onClick={togglePass}
                    />
                    {showErrorPassword !== false ? <p className='paragraf-buttom'>Довжина паролю має бути 6 символів мінімум</p> : null}
                </div>

                <label htmlFor="userPasswordAgain" className='label-title label-title-last'>Підтвердження паролю</label>
                <div className='container-to-field'>
                    <input
                        id="userPasswordAgain"
                        type={typeInput}
                        className={inputConfirmPasswordClass}
                        placeholder='Повторно введіть пароль'
                        onInput={(e) => setUserConfirmPassword(e.target.value)}
                        min={6}
                        value={userConfirmPassword}
                        onBlur={validateComfirmPassword}
                        required
                    />
                    <div className='icon-show-password'></div>
                    <Image
                        className='icon-show-password'
                        alt='pass logo'
                        src={pass}
                        width={24}
                        height={18}
                        onClick={togglePass}
                    />
                    {showErrorConfirmPassword !== false ? <p className='paragraf-buttom'>Довжина паролю має бути 6 символів мінімум</p> : null}
                </div>


                <div className='button-singin'>
                    <button type='submit' className='button-singin-push btn-login-page'>Зареєструватися</button>
                </div>
                {/* <p className='politcik-registration'>Створюючи обліковий запис, ви погоджуєтеся з нашими
                    <a href="#" className='politcik-registration-link'>  Умовами обслуговування</a> та
                    <a href="#" className='politcik-registration-link'>  Політикою конфіденційності</a>
                </p> */}
            </form>
            <p className='use-social-network-par'>Або скористайся соціальними мережами</p>
            <div className='social-buttons'>
                <button onClick={() => singInWithFacebook()} className='social-button'>
                    <p>Facebook</p>
                    <div className='icon-container'>
                        <Image
                            alt="logo image social fase"
                            src='/social_icon/Social Icons.svg'
                            sizes="(max-width: 100%)"
                            quality={100}
                            width={16}
                            height={16}
                            className='social_logo'
                            priority
                        />
                    </div>
                </button>
                <button className='social-button'
                    onClick={() => singInWithGoogle()}>
                    <p>Google</p>
                    <div className='icon-container'>
                        <Image
                            alt="logo image social fase"
                            src='/social_icon/Vector.svg'
                            sizes="(max-width: 100%)"
                            quality={100}
                            width={16}
                            height={16}
                            className='social_logo'
                            priority
                        />
                    </div>
                </button>
            </div >
        </>
    );
};

export default React.memo(RegistrationForm);