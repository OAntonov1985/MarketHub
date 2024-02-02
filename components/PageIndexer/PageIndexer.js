"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function PageIndexer({ props }) {
    console.log(props);
    const arrayNumbers = [];

    useEffect(() => {
        const num = Math.ceil(props / 12)
        function fillArray(num) {
            for (let i = 0; i <= num; i++) {
                console.log(i);
                arrayNumbers.push(i);
            }
            console.log(arrayNumbers)
        }
        fillArray(num)
    }, [props])

    const [activePage, setActivePage] = useState(1);
    const [unActivePage, setunActivePage] = useState(2)



    const ArrowDiv = () => {
        return (
            <div className='arrow-container'>
                <Image
                    alt="image of arrow logo"
                    src="/arrow1.svg"
                    quality={100}
                    fill
                    style={{
                        objectFit: 'contain',
                        width: '100%'
                    }}
                />
            </div>
        )
    };

    const ArrowDivRotate = () => {
        return (
            <div className='arrow-container'>
                <Image
                    alt="image of arrow logo"
                    src="/arrow2.svg"
                    quality={100}
                    fill
                    style={{
                        objectFit: 'contain',
                        width: '100%'
                    }}
                />
            </div>
        )
    };

    const ActivePage = () => {
        return (
            <>
                <div className='active-page'>{activePage}</div>
            </>
        )
    }

    const UnActivePage = () => {
        return (
            <>
                <div className='unactive-page'>{unActivePage}</div>
            </>
        )
    }

    return (
        <div className='page-selector'>
            <ArrowDiv />
            <ActivePage />
            <UnActivePage />
            <UnActivePage />
            <UnActivePage />
            <UnActivePage />
            <ArrowDivRotate />
        </div>
    )
}