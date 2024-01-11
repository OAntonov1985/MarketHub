"use client"
import Cookies from 'js-cookie'
import { useState } from 'react';
import { useSession } from 'next-auth/react'

export default function Header() {
    // const [token, setToket] = useState(null);
    const getToken = Cookies.get('jwtToken');
    // console.log(getToken)
    // setToket(getToken);
    // const session = useSession();
    // console.log(session)

    return (
        <>
            <div className="header">
                Компонент Хедер. Навбар, кнопка логін кошик і так далі
            </div>
            <div> {getToken === null ? "Log In" : "Log out"}</div>
        </>
    );
}
