
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useSession } from 'next-auth/react'

export default function Header() {
    // const [token, setToket] = useState(null);
    const getToken = Cookies.get('jwtToken');
    const userName = Cookies.get('userName');
    // console.log(getToken)
    // setToket(getToken);
    // const session = useSession();
    const router = useRouter();
    // console.log(getToken)
    const deleteToken = () => {
        Cookies.remove('jwtToken');
        Cookies.remove('userName');
        router.push('/');
    }
    const redirectToLoginPage = () => {
        router.push('/loginpage/');
    }


    useEffect(() => {
        console.log(getToken)
        console.log(userName)
    }, [getToken]);


    return (
        <>
            <div className="header">
                <p>  {userName === undefined ? 'Компонент Хедер.' : `Привіт, ${userName}`}</p>
            </div>
            <div> {getToken === undefined ?

                <button className='main-link' onClick={redirectToLoginPage}>Push to log in</button>

                // <button className='main-link' onClick={redirectToLoginPage}>Log out</button>
                // console.log('no toket must login')
                :

                // <button className='main-link' onClick={deleteToken}>Log in</button>
                <button className='main-link' onClick={deleteToken}>Push to log out</button>

            }</div>
        </>
    );
}
