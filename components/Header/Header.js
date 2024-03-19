"use client";

import React from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { totalGoods, setTotalPriseInAllBasket, setInitialBasket, setUserName, setinitialFavorite, setTotalFavorite } from '@/slices/userSlice';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';




function Header({ transparentBackground }) {

    const [headerName, setHeaderName] = useState('');
    const [isVisible, setIsVisible] = useState("quantityOfGoods is-wisible");
    const [isVisibleFavorite, setIsVisibleFavorite] = useState("quantityOfFavorite is-wisible");

    const dispatch = useDispatch();
    const { quantityOfGoods } = useSelector((state) => state.user);
    const { userBasket } = useSelector((state) => state.user);
    const { userFavorite } = useSelector((state) => state.user);
    const { quantityOfFavorite } = useSelector((state) => state.user);
    let { userName } = useSelector((state) => state.user);

    const pathname = usePathname();
    const router = useRouter();
    const userNameCookie = userName = Cookies.get('userName');

    useEffect(() => {
        if (pathname === "/userpage") {
            if (!userNameCookie) {
                router.push('/loginpage');
            }
        }
    }, [userNameCookie]);

    useEffect(() => {

        const userBasketInLocal = localStorage.getItem("BASKET");

        if (userBasketInLocal && userBasket.length === 0) {
            const userBasket = JSON.parse(userBasketInLocal);
            dispatch(setInitialBasket(userBasket));

            const newTotalGoods = userBasket.reduce((accum, item) => accum = accum + item.number, 0);
            dispatch(totalGoods(newTotalGoods));
            localStorage.setItem('totalGoods', newTotalGoods);

            const newTotalPriseInAllBasket = userBasket.reduce((accum, item) => accum = accum + (item.price * item.number), 0);
            dispatch(setTotalPriseInAllBasket(newTotalPriseInAllBasket));
            localStorage.setItem('totalPriseInAllBasket', newTotalPriseInAllBasket);

        };

        const userFavoriteInLocal = localStorage.getItem("FAVORITE");
        if (userFavoriteInLocal && userFavorite.length === 0) {
            const userFavorite = JSON.parse(userFavoriteInLocal);
            dispatch(setinitialFavorite(userFavorite));
        }

        const userTotalFavoriteInLocal = localStorage.getItem("totalFavorite");
        if (userTotalFavoriteInLocal) {
            const userFavorite = JSON.parse(userFavoriteInLocal);
            dispatch(setTotalFavorite(userFavorite.length));
        }

        userName = Cookies.get('userName');
    }, []);



    useEffect(() => {
        if (userName) {
            dispatch(setUserName(userName));
            setHeaderName(<div className='header-user-name'>Привіт, {userName}!</div>);
        }
        else if (userName === undefined) {
            dispatch(setUserName(''));
            setHeaderName(null);
        }
    }, [userName]);


    useEffect(() => {
        if (quantityOfGoods === 0 || quantityOfGoods === null) {
            setIsVisible("quantityOfGoods  is-wisible");
        }
        else {
            setIsVisible("quantityOfGoods");
        }

        if (quantityOfFavorite === 0 || quantityOfFavorite === null) {
            setIsVisibleFavorite("quantityOfFavorite  is-wisible");
        }
        else {
            setIsVisibleFavorite("quantityOfFavorite");
        }
    }, [quantityOfGoods, quantityOfFavorite])

    // useEffect(() => {
    //     if (userName) {
    //         dispatch(setUserName(userName));
    //         setHeaderName(<div className='header-user-name'>Привіт, {userName}!</div>);
    //     }
    //     else if (userName === undefined) {
    //         dispatch(setUserName(''));
    //         setHeaderName(null);
    //     }
    // }, [userName]);


    return (
        <div className='header-component' style={{ backgroundColor: transparentBackground ? 'transparent' : '#010101' }}>
            <Link href={"/"}>
                <Image
                    alt="logo image in header component"
                    src='/logoheaderinmainpage.svg'
                    sizes="(max-width: 100%)"
                    quality={100}
                    width={110}
                    height={56}
                    className='logo-image'
                    priority
                />
            </Link>

            <div className='header-search-field'>
                <input
                    type="text"
                    className='header-input-field'
                    placeholder='Я шукаю ...'
                />
                <Image
                    alt="logo image search in input field"
                    src='/iconserach.svg'
                    sizes="(max-width: 100%)"
                    quality={100}
                    width={18}
                    height={18}
                    className='search-input-field'
                    priority
                />
            </div>
            <div className='header-icons'>
                {headerName}
                <Link href={userName ? `/userpage` : `/loginpage`}>
                    {/* <Link href={'/userpage/'}> */}
                    <Image
                        alt="logo image client"
                        src='/clienticon.svg'
                        quality={100}
                        width={24}
                        height={24}
                        sizes="(max-width: 100%)"
                        title='Перейти в особистий кабінет'
                        className='logo-image-client'
                        priority
                    />
                </Link>
                <Link href="/basket/" className="logo-image-basket">
                    <Image
                        alt="logo image basket"
                        src="/basket.svg"
                        sizes="(max-width: 100%)"
                        quality={100}
                        width={24}
                        height={24}
                        className='photo-image-basket'
                        priority
                    />
                </Link>
                <div className={isVisible}>{quantityOfGoods}</div>
                <Link href="/favorite/" className="logo-image-favorite">
                    <Image
                        alt="logo image favorite"
                        src="/heardinheader.png"
                        sizes="(max-width: 100%)"
                        quality={100}
                        width={24}
                        height={30}
                        className='logo-image-favorite'
                        priority
                    />
                </Link>
                <div className={isVisibleFavorite}>{quantityOfFavorite}</div>

            </div>
        </div>
    );
};
export async function getServerSideProps({ req }) {
    const requestURL = req.url;
    console.log('Запрошенный URL:', requestURL);

    // Другая логика...

    return {
        props: {
            // данные для передачи в компонент
        },
    };
}

export default React.memo(Header)
