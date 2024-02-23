"use client";

import React from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { totalGoods, setTotalPriseInAllBasket, setInitialBasket } from '@/slices/userSlice';



function Header({ transparentBackground }) {

    const [headerName, setHeaderName] = useState('');
    const [imagePath, setimagePath] = useState("/basket.svg");
    const [isVisible, setIsVisible] = useState("quantityOfGoods is-wisible");

    const dispatch = useDispatch();
    const { quantityOfGoods } = useSelector((state) => state.user);
    const { userBasket } = useSelector((state) => state.user);

    let userName;

    useEffect(() => {

        const userBasketInLocal = localStorage.getItem("BASKET");

        if (userBasketInLocal.length > 0 && userBasket.length === 0) {
            const userBasket = JSON.parse(userBasketInLocal);
            dispatch(setInitialBasket(userBasket));

            const newTotalGoods = userBasket.reduce((accum, item) => accum = accum + item.number, 0);
            dispatch(totalGoods(newTotalGoods));
            localStorage.setItem('totalGoods', newTotalGoods);

            const newTotalPriseInAllBasket = userBasket.reduce((accum, item) => accum = accum + (item.price * item.number), 0);
            dispatch(setTotalPriseInAllBasket(newTotalPriseInAllBasket));
            localStorage.setItem('totalPriseInAllBasket', newTotalPriseInAllBasket);

        }

        userName = Cookies.get('userName');
    }, []);



    useEffect(() => {
        if (userName) {
            setHeaderName(<div className='header-user-name'>Привіт, {userName}!</div>);
        }
        else if (userName === undefined) {
            setHeaderName(null);
        }

    }, [userName]);


    useEffect(() => {
        if (quantityOfGoods === 0 || quantityOfGoods === null) {
            setimagePath('/basket.svg');
            setIsVisible("quantityOfGoods  is-wisible");
        }
        else {
            setimagePath('/basket_green.svg');
            setIsVisible("quantityOfGoods");
        }
    }, [quantityOfGoods])


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
                <Link href='/userpage/'>
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
                        src={imagePath}
                        sizes="(max-width: 100%)"
                        quality={100}
                        width={24}
                        height={24}
                        className='logo-image-basket'
                        priority
                    />
                </Link>
                <div className={isVisible}>{quantityOfGoods}</div>
            </div>
        </div>
    );
};



Header.getInitialProps = ({ req }) => {
    const localState = parseLocalStorage({ req })
    return {

    }
}
export default React.memo(Header)
