import { useEffect, useState } from 'react';
import React from 'react';
import BaskerGoodRow from './BaskerGoodRow';
import EmptyBasket from '../EmptyBasket/EmptyBasket';

function BasketFirstRow() {
    const [basket, setBasket] = useState([]);


    useEffect(() => {
        const BASKET = localStorage.getItem("BASKET");
        const basketArr = JSON.parse(BASKET);
        if (basketArr) {
            setBasket(basketArr);
        };
    }, []);




    return (
        <div className='basket-first-row'>
            <h4 className='basket-with-goods-title'>Кошик</h4>
            <div className="basket-with-goods-list">
                {basket.length ?
                    basket.map((item, index) => (
                        <BaskerGoodRow key={index} props={item} setBasket={setBasket} basket={basket} />
                    )) : <EmptyBasket />
                }
            </div>
        </div>
    )
};


export default React.memo(BasketFirstRow);

