import { useEffect, useState } from 'react';
import React from 'react';
import BaskerGoodRow from './BaskerGoodRow';
// import EmptyBasket from '../EmptyBasket/EmptyBasket';
import { useSelector } from 'react-redux';

function BasketFirstRow() {
    const [basket, setBasket] = useState([]);
    const { userBasket } = useSelector((state) => state.user);
    console.log(userBasket)

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
                {userBasket.map((item, index) => (
                    <BaskerGoodRow key={index} props={item} setBasket={setBasket} />
                ))}
            </div>
        </div>
    )
};


export default React.memo(BasketFirstRow);

