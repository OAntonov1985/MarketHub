"use client";

import Cookies from 'js-cookie'
import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    // const getToken = Cookies.get('jwtToken');
    // const userName = Cookies.get('userName');


    const deleteToken = () => {
        Cookies.remove('jwtToken');
        Cookies.remove('userName');
        router.push('/');
    }
    const redirectToLoginPage = () => {
        router.push('/loginpage/');
    }


    // useEffect(() => {
    //     // console.log(getToken)
    //     // console.log(userName)
    // }, [getToken]);


    return (
        <div className='header-component'>
            <Image
                alt="logo image in header component"
                src='/logoheaderinmainpage.svg'
                quality={100}
                width={110}
                height={56}
                className='logo-image'
                priority
            />
            <div className='header-search-field'>
                <input
                    type="text"
                    className='header-input-field'
                />
                <Image
                    alt="logo image search in input field"
                    src='/iconserach.svg'
                    quality={100}
                    width={18}
                    height={18}
                    className='search-input-field'
                    priority
                />
            </div>
            <div className='header-icons'>
                <Image
                    alt="logo image client"
                    src='/clienticon.svg'
                    quality={100}
                    width={24}
                    height={24}
                    className='logo-image-client'
                    priority
                />
                <Image
                    alt="logo image search in input field"
                    src='/basket.svg'
                    quality={100}
                    width={24}
                    height={24}
                    className='logo-image-basket'
                    priority
                />
            </div>
        </div>
    );
}
