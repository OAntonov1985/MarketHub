import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Spinner from '../Spinner/Spinner';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Input from '@mui/material/Input';

import React from 'react';
import singInFunction from '@/pages/api/SingInFunction';
import ShowOrHidePasswordIcon from '../ShowOrHidePasswordIcon/ShowOrHidePasswordIcon';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function SingIn({ props }) {
    const router = useRouter();
    const { loading, setLoading, toggleMode } = props;
    const [isPlaceholderVisible, setPlaceholderVisibility] = useState(true);



    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [showPassword, setShowPassword] = useState('password');
    const propsForPass = { showPassword, setShowPassword }
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    async function handleclick(event) {
        event.preventDefault();
        console.log(777)
        setLoading(true);
        const body = {
            "email": userEmail,
            "password": userPassword
        };

        const { JWTToken, flag } = await singInFunction(body);
        if (flag) {
            setLoading(false);
        }
        else if (JWTToken) {
            setLoading(false)
            router.push('/userpage');
        }
    }


    // useEffect(() => {
    //     console.log(userEmail);
    //     console.log(userPassword);
    //     // const token = Cookies.get('jwtToken')
    //     // console.log(token)
    //     // console.log(body)
    // }, [userEmail, userPassword]);

    return (
        <>
            <div className='sing-in-left-column'>
                <h4 className='right-column-paragraph'>Вхід</h4>
                <form
                    onSubmit={handleclick}
                    className='singin-form'>
                    <label htmlFor="userEmail" className='label-title' >Електронна пошта</label>
                    <input
                        id="userEmail"
                        type="email"
                        className='user-email'
                        placeholder='Введіть свою електронну пошту'
                        onChange={(e) => setUserEmail(e.target.value)}
                        pattern='^[^\s@]+@[a-zA-Z]+(?:\.[a-zA-Z]{2,})+$'
                        value={userEmail}
                        required />

                    {/* <FormControl className='user-email-test' variant="outlined">
                        <InputLabel className='label-test' htmlFor="outlined-adornment-password"
                            // sx={{ visibility: isPlaceholderVisible ? 'visible' : 'hidden' }} style={{ fontSize: '16px', }} label={'margin="dense"'} id="margin-dense" margin="dense"
                            sx={{ fontSize: '16px', transform: 'translate(14px, 10px) scale(1)', visibility: isPlaceholderVisible ? 'visible' : 'hidden' }}
                        >
                            Введіть свій пароль
                        </InputLabel>
                        <OutlinedInput
                            className='input-test'
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            onFocus={() => setPlaceholderVisibility(false)}
                            onBlur={(e) => setPlaceholderVisibility(e.target.value === '')}
                        />
                    </FormControl> */}

                    <label htmlFor="userPassword" className='label-title'>Пароль</label>

                    <input
                        id="userPassword"
                        type={showPassword}
                        className='user-password'
                        placeholder='Введіть свій пароль'
                        onInput={(e) => setUserPassword(e.target.value)}
                        min={8}
                        pattern='^[^\-+=\s]{2,}$'
                        title="Некоректні символи: -, +, =, або пробіл"
                        value={userPassword}
                        required
                    />
                    {/* <ShowOrHidePasswordIcon props={propsForPass} /> */}

                    <div className='button-singin'>
                        <button type='submit' className='button-singin-push btn-login-page'>Увійти</button>
                    </div>
                    <div className='forgot-password-link'>
                        <a className='forgot-link' href='#'>Забули пароль</a>
                    </div>
                </form>
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
}

export default React.memo(SingIn);


