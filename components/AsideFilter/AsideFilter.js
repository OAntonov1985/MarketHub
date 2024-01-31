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
                    <li><input type='checkbox' id='lenovo' /><label for='lenovo'>Lenovo</label></li>
                    <li><input type='checkbox' id='samsung' /><label for='samsung'>Samsung</label></li>
                    <li><input type='checkbox' id='apple' /><label for='apple'>Apple</label></li>
                    <li><input type='checkbox' id='dell' /><label for='dell'>Dell</label></li>
                    <li><input type='checkbox' id='asus' /><label for='asus'>Asus</label></li>
                </ul>
                <div>
                    <input type="checkbox" id="isAvailable" name="scales" className='filter-availability' />
                    <label for="isAvailable">Є в наявності</label>
                </div>
                <button className='aside-filter-button'>Застосувати</button>
            </div>
        </div>
    )
}