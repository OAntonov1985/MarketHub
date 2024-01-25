import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import SendEmailForPasswordRecovery from '../api/SendEmailForPasswordRecovery';
import Spinner from '@/components/Spinner/Spinner';

export default function ForgetPassword() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

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
    };

    async function handleclick(event) {
        event.preventDefault();
        setLoading(true)
        if (showErrorEmail === false) {
            const body = {
                "email": userEmail
            };

            const { Errorflag } = await SendEmailForPasswordRecovery(body);
            if (Errorflag) {
                console.log(Errorflag)
                setLoading(false);
            }
            else if (Errorflag === undefined) {
                setLoading(false);
                alert("Вам на вказану пошту надійшов лист, де ми написали подальщі інструкції для відновлення паролю");
                router.push('/loginpage');
            };
        }
        else alert('Помилка заповнення поля електронної пошти');
    }

    return (
        <div className='forget-password'>
            {loading === true ? <Spinner /> : null}
            <Image
                alt="background image"
                src="/Back.png"
                quality={70}
                sizes="100vw"
                fill
                priority
                style={{
                    objectFit: "cover",
                    zIndex: -1,
                }}
            />
            <div className="forget-password-container">
                <Image
                    alt="logo image"
                    src='/logo.png'
                    quality={100}
                    width={146}
                    height={75}
                    className='logo-image'
                    priority
                    style={{
                        top: ".5rem",
                        zIndex: 1,
                        marginTop: "2.4rem"
                    }}
                />
                <div className="forget-password-content">
                    <h3 className='forret-passord-title'>Забули пароль?</h3>
                    <p className='forret-passord-text'>Не турбуйтесь, ми надішлемо Вам повідомлення, щоб допомогти скинути пароль.</p>
                    <form
                        onSubmit={handleclick}
                        className='singin-form'>
                        <label htmlFor="userEmail" className='label-title modify-title' >Електронна пошта</label>
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

                        <div className='button-singin modify-button-singin'>
                            <button type='submit' className='button-singin-push btn-login-page modify-button-singin-push'>Надіслати посилання</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}