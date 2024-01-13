"use client"
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useSession } from 'next-auth/react'

export default function Header() {
    // const [token, setToket] = useState(null);
    const getToken = Cookies.get('jwtToken');
    // console.log(getToken)
    // setToket(getToken);
    // const session = useSession();
    const router = useRouter();
    // console.log(getToken)
    const deleteToken = () => {
        Cookies.remove('jwtToken');
        router.push('/');
    }


    // useEffect(() => {

    // }, [getToken]);


    return (
        <>
            <div className="header">
                Компонент Хедер. Навбар, кнопка логін кошик і так далі
            </div>
            <div> {getToken === undefined && getToken !== Cookies.remove('jwtToken') ?
                <Link legacyBehavior href='/loginpage/' className='main-link'>
                    <button >Log out</button>
                </Link>
                :
                <Link legacyBehavior href='/loginpage/' className='main-link'>
                    <button href='/loginpage/'>Log in</button>
                </Link>

            }</div>
        </>
    );
}
