"use client";

import Cookies from 'js-cookie';
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
    const router = useRouter();
    const [headerName, setHeaderName] = useState('');
    const userName = Cookies.get('userName');


    useEffect(() => {
        if (userName) {
            setHeaderName(<div className='header-user-name'>Привіт, {userName}!</div>);
        }
        else if (userName === undefined) {
            setHeaderName(null);
        }
    }, [userName]);


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
                    placeholder='Я шукаю ...'
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
                {headerName}
                <Link href='/userpage/'>
                    <Image
                        alt="logo image client"
                        src='/clienticon.svg'
                        quality={100}
                        width={24}
                        height={24}
                        title='Перейти в особистий кабінет'
                        className='logo-image-client'
                        priority
                    />
                </Link>
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
