"use client"
import { useState } from 'react'

export default function AsideFilter() {
    const [prciseStart, setPriceStart] = useState('');
    const [prciseEnd, setPriceEnd] = useState('');

    function ChekcInputValue(event, inputType) {
        const inputSymbol = event.target.value;
        const onlyNumber = /^[0-9]*$/.test(inputSymbol);
        if (onlyNumber || inputSymbol === ' ') {
            if (inputType === 'start') {
                setPriceStart(inputSymbol);
            } else if (inputType === 'end') {
                setPriceEnd(inputSymbol);
            }
        }
    };

    return (
        <div className="goods-list-filter-column">
            <p className='aside-filter-price'>Ціна:</p>
            <div className="filter-range">
                <input className="filter-price-start" type="text" placeholder='Від:' maxLength={5} value={prciseStart} onChange={(event) => ChekcInputValue(event, 'start')} /> -
                <input className="filter-price-end" type="text" placeholder='До:' maxLength={5} value={prciseEnd} onChange={(event) => ChekcInputValue(event, 'end')} />
            </div>
            <div className="goods-producer">
                <p className='goods-producer-title'>Виробник:</p>
                <ul className='goods-producer-list'>
                    <li key="lenovo">
                        <label className='input-label'>
                            <input type='checkbox' id='lenovo' className='checkbox' />
                            <span className='span-input'></span>
                            Lenovo
                        </label>
                    </li>
                    <li key="samsung">
                        <label className='input-label'>
                            <input type='checkbox' id='samsung' className='checkbox' />
                            <span className='span-input'></span>
                            Samsing
                        </label>
                    </li>
                    <li key="apple">
                        <label className='input-label'>
                            <input type='checkbox' id='apple' className='checkbox' />
                            <span className='span-input'></span>
                            Apple
                        </label>
                    </li>
                    <li key="dell">
                        <label className='input-label'>
                            <input type='checkbox' id='dell' className='checkbox' />
                            <span className='span-input'></span>
                            Dell
                        </label>
                    </li>
                    <li key="asus">
                        <label className='input-label' >
                            <input type='checkbox' id='asus' className='checkbox' />
                            <span className='span-input'></span>
                            Asus
                        </label>
                    </li>
                </ul>
                <div>
                    <label className='input-label mb-label' >
                        <input type="checkbox" id="isAvailable" name="scales" className='checkbox' />
                        <span className='span-input'></span>
                        Є в наявності
                    </label>
                </div>
                <button className='aside-filter-button'>Застосувати</button>
            </div>
        </div>
    )
}