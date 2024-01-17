import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';

import * as Yup from 'yup';


const validationSchema = Yup.object({
    email: Yup.string()
        .matches(/^[a-zA-Z0-9]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/, 'Невірний формат введення пошти. Будь ласка викирстайте наступний формат: example@gmail.com')
        .required('Це поле обов`язково має бути заповнене'),
    password: Yup.string().min(6, 'Мінімальна довжина паролю складає 6 сімволів').required('Це поле обов`язково має бути заповнене'),
});

// const validationSchema = Yup.object({
//     email: Yup.string()
//         .test('email-validation', 'Невірний формат введення пошти. Будь ласка використайте наступний формат: example@gmail.com', function (value) {
//             // Ваша логика для проверки формата email
//             if (/^[a-zA-Z0-9]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/.test(value)) {
//                 return true; // Вернуть true для успешной валидации
//             } else {
//                 // Возвращаем объект ошибки с пользовательским сообщением
//                 return this.createError({ message: this.message });
//             }
//         })
//         .required('Це поле обов`язково має бути заповнене'),
//     password: Yup.string()
//         .min(6, 'Мінімальна довжина паролю складає 6 сімволів')
//         .required('Це поле обов`язково має бути заповнене'),
// });

// const validationSchema = Yup.object({
//     email: Yup.string()
//         .when('nextField', {
//             is: (nextFieldValue) => nextFieldValue !== undefined && nextFieldValue !== null,
//             then: Yup.string()
//                 .matches(/^[a-zA-Z0-9]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/, 'Невірний формат введення пошти. Будь ласка використайте наступний формат: example@gmail.com')
//                 .required('Це поле обов`язково має бути заповнене'),
//             otherwise: Yup.string().nullable(),
//         }),
//     password: Yup.string().min(6, 'Мінімальна довжина паролю складає 6 сімволів').required('Це поле обов`язково має бути заповнене'),
//     nextField: Yup.string(), // Замените 'nextField' на реальное имя следующего поля
// });

const FormSingIn = () => {
    const [email, setEmail] = useState("")

    const handleInputFocus = (event) => {
        setEmail(event.target.value)
        const value = event.target.value;
        const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;

        if (emailPattern.test(value)) {
            console.log('Email соответствует паттерну');
        } else {
            console.log('Email не соответствует паттерну');
        }

    };

    const handleInputBlur = (event) => {
        console.log(777)
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {

                console.log(values);
            }}
        >
            {({ errors, touched, isValidating }) => (
                <Form className='singin-form'>
                    <div className={`div-input ${touched.email && !errors.email && 'success'}`}>
                        <label htmlFor="email" className='label-title'>Електронна пошта:</label>
                        <Field
                            type="email"
                            onChange={handleInputFocus}
                            id="email"
                            name="email"
                            value={email}
                            className={`input-login-page customBorder customBackground customBorderColorOnInvalid user-email ${touched.email && !errors.email && 'success-border'}`}
                            onBlur={handleInputBlur}
                        />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    <div className={`div-input ${touched.password && !errors.password && 'success'}`}>
                        <label htmlFor="email" className='label-title'>Пароль</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            className="input-login-page customBorder customBackground customBorderColorOnInvalid user-password"
                        />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>

                    <div className='button-singin'>
                        <button type='submit' className='button-singin-push btn-login-page'>Увійти</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FormSingIn;