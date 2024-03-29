import React from 'react';
import { useState } from 'react';
import Image from 'next/image';


function PageIndexserSmall({ total, setActivePage, activePage }) {

    const [startNumberToArray, setStartNumberToArray] = useState(1);
    // const [activePage, setActivePage] = useState(1);
    const maxPageRenderInString = Math.ceil(total / 6); // встановлення кількості айтемів для відображення

    const arrayPages = Array.from({ length: maxPageRenderInString }, (_, index) => startNumberToArray + index);
    const lastPage = Math.ceil(total / 6);

    const changeIndex = (event) => {
        if (event.target.id === "minus-one") {
            if (activePage > 1) {
                if (activePage === startNumberToArray) {
                    setStartNumberToArray(activePage - 1);
                    setActivePage(activePage - 1);
                }
                else {
                    setActivePage(activePage - 1);
                }
            }
        }

        else if (event.target.id === "plus-one") {
            if (activePage < lastPage) {
                if (activePage === startNumberToArray + maxPageRenderInString - 1) {
                    setStartNumberToArray(activePage - maxPageRenderInString + 2);
                    setActivePage(activePage + 1);
                } else {
                    setActivePage(activePage + 1);
                }
            }
        };
    };

    const ArrowDiv = () => {
        return (
            <div className='arrow-container'
                id='plus-one'
                onClick={changeIndex}>
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
                onClick={changeIndex}>
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
    };

    return (
        <div className='page-selector selector-bottom'>
            <ArrowDiv />
            {arrayPages.map((item) => (
                <div key={item} onClick={(event) => { handleClick(event) }} id={item}
                    className={activePage === item ? 'active-page' : 'unactive-page'}
                >{item}</div>
            ))}
            <ArrowDivRotate />
        </div>
    )
}

export default React.memo(PageIndexserSmall);