"use client";

import React from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Header({ transparentBackground }) {
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
                <Link href="/basket/">
                    <Image
                        alt="logo image search in input field"
                        src='/basket.svg'
                        sizes="(max-width: 100%)"
                        quality={100}
                        width={24}
                        height={24}
                        className='logo-image-basket'
                        priority
                    />
                </Link>

            </div>
        </div>
    );
};

export default React.memo(Header)
