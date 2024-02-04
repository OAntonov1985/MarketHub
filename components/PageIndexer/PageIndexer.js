"use client"
// import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import React from 'react';

function PageIndexer() {
    const [activePage, setActivePage] = useState(1);
    const [startNumberToArray, setStartNumberToArray] = useState(1)
    const maxPageRenderInString = 5; // встановлення кількості айтемів для відображення

    const arrayPages = Array.from({ length: maxPageRenderInString }, (_, index) => startNumberToArray + index);

    const changeIndex = (event) => {
        if (event.target.id === "minus-one") {
            if (activePage > 1) {
                if (activePage === startNumberToArray) {
                    setStartNumberToArray(activePage - 1);
                    setActivePage(activePage - 1);
                }
                else setActivePage(activePage - 1);
            } else setActivePage(activePage)
        }

        if (event.target.id === "plus-one") {
            if (activePage === startNumberToArray + 4) {
                setStartNumberToArray(activePage - 3);
                setActivePage(activePage + 1);
            }
            else setActivePage(activePage + 1);
        };
    };





    const ArrowDiv = () => {
        return (
            <div className='arrow-container'
                id='plus-one'
                onClick={changeIndex}
            >
                <Image
                    alt="image of arrow logo"
                    src="/arrow1.svg"
                    quality={100}
                    fill
                    id='minus-one'
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
            <div className='arrow-container'
                onClick={changeIndex}
            >
                <Image
                    alt="image of arrow logo"
                    src="/arrow2.svg"
                    quality={100}
                    fill
                    id='plus-one'
                    style={{
                        objectFit: 'contain',
                        width: '100%'
                    }}
                />
            </div>
        )
    };

    const handleClick = (event) => {
        setActivePage(parseFloat(event.target.id));
    }




    return (
        <div className='page-selector'>
            <ArrowDiv />
            {arrayPages.map((item) => (
                <div key={item} onClick={handleClick} id={item}
                    className={activePage === item ? 'active-page' : 'unactive-page'}
                >{item}</div>
            ))}
            <ArrowDivRotate />
        </div>
    );
};

export default React.memo(PageIndexer);