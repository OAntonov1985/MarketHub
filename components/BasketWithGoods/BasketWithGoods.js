import React from 'react';
import BasketFirstRow from './BasketFirstRow';
import BasketPlacingOrder from './BasketPlacingOrder';
import BasketDeliveryInfo from './BasketDeliveryInfo';
import BasketRecepientInfo from './BasketRecepientInfo';
import BasketTotalRow from './BasketTotalRow';
import { useState } from 'react';

function BasketWithGoods() {
    // const [total, setTotal] = useState(
    //     {
    //         totalCount: 0,
    //         totalPrice: 0
    //     }
    // )
    const [totalGoods, setTotalGoods] = useState(0)
    const [totalQuantityOfGoods, setTotalQuantityOfGoods] = useState(0)
    // console.log(total.totalCount)
    // const 


    return (
        <div className='basket-with-goods'>
            <BasketFirstRow setTotalGoods={setTotalGoods} setTotalQuantityOfGoods={setTotalQuantityOfGoods} totalGoods={totalGoods} />
            <BasketPlacingOrder />
            <BasketDeliveryInfo />
            <BasketRecepientInfo />
            <BasketTotalRow totalGoods={totalGoods} totalQuantityOfGoods={totalQuantityOfGoods} />
        </div>
    )
};

export default React.memo(BasketWithGoods);