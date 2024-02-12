import { useEffect, useState } from 'react';
import React from 'react';
import BaskerGoodRow from './BaskerGoodRow';

export default function BasketFirstRow({ setTotalGoods, setTotalQuantityOfGoods, totalGoods }) {
    const [basket, setBasket] = useState([]);



    useEffect(() => {
        const BASKET = localStorage.getItem("BASKET");
        const basketArr = JSON.parse(BASKET);
        setBasket(basketArr);
        setTotalGoods(basketArr.reduce((accum, item) => accum = accum + item.number, 0));
        setTotalQuantityOfGoods(basketArr.reduce((accum, item) => accum = accum + item.number, 0) * basketArr.reduce((accum, item) => accum = accum + item.price, 0));
        console.log(totalGoods)
        // setTotal(
        //     {
        //         totalCount: basketArr.reduce((accum, item) => accum = accum + item.number, 0),
        //         totalPrice: basketArr.reduce((accum, item) => accum = accum + item.number, 0) * basketArr.reduce((accum, item) => accum = accum + item.price, 0)
        //     }
        // )
    }, [totalGoods])







    return (
        <div className='basket-first-row'>
            <h4 className='basket-with-goods-title'>Кошик</h4>
            <div className="basket-with-goods-list">
                {basket ?
                    basket.map((item, index) => (
                        <BaskerGoodRow key={index} props={item} setBasket={setBasket} basket={basket} />
                    ))
                    : ""}
            </div>
        </div>
    )
};


// export default React.memo(BasketFirstRow);

