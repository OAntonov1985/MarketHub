"use client"
import { useState, useEffect } from 'react';
import React from 'react';
import GetdBrands from '@/pages/api/GetBrands';
import { useRouter } from 'next/router';

function AsideFilter({ id }) {
    const [prciseStart, setPriceStart] = useState('');
    const [prciseEnd, setPriceEnd] = useState('');
    const [brandsArray, setBrandsArray] = useState([]);

    const router = useRouter();
    const subCategoryName = router.query.subcategory;

    async function GetdBrandsFromDB() {
        const { result } = await GetdBrands(id, subCategoryName);
        setBrandsArray(result.sort());
    };


    useEffect(() => {
        GetdBrandsFromDB();
    }, []);


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


    function check(event) {
        console.log(event.target.checked)
        console.log(event.target.id)
    }

    return (
        <div className="goods-list-filter-column">
            <p className='aside-filter-price'>Ціна:</p>
            <div className="filter-range">
                <input className="filter-price-start" type="text" placeholder='Від:' maxLength={6} value={prciseStart} onChange={(event) => ChekcInputValue(event, 'start')} /> -
                <input className="filter-price-end" type="text" placeholder='До:' maxLength={6} value={prciseEnd} onChange={(event) => ChekcInputValue(event, 'end')} />
            </div>
            <div className="goods-producer">
                <p className='goods-producer-title'>Виробник:</p>
                <ul className='goods-producer-list'>
                    {brandsArray.map(item => {
                        return <li key={item}>
                            <label className='input-label'>
                                <input type='checkbox' id={item} className='checkbox' onClick={check} />
                                <span className='span-input'></span>
                                {item}
                            </label>
                        </li>
                    })}
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
};

export default React.memo(AsideFilter);