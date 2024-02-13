import React from 'react';
import BasketFirstRow from './BasketFirstRow';
import BasketPlacingOrder from './BasketPlacingOrder';
import BasketDeliveryInfo from './BasketDeliveryInfo';
import BasketRecepientInfo from './BasketRecepientInfo';
import BasketTotalRow from './BasketTotalRow';
import { useState } from 'react';

function BasketWithGoods({ setBasketLength }) {

    const [totalGoods, setTotalGoods] = useState(0);
    const [totalQuantityOfGoods, setTotalQuantityOfGoods] = useState(0);

    return (
        <div className='basket-with-goods'>
            <BasketFirstRow setTotalGoods={setTotalGoods} setTotalQuantityOfGoods={setTotalQuantityOfGoods} totalGoods={totalGoods} setBasketLength={setBasketLength} />
            <BasketPlacingOrder />
            <BasketDeliveryInfo />
            <BasketRecepientInfo />
            <BasketTotalRow totalGoods={totalGoods} totalQuantityOfGoods={totalQuantityOfGoods} />
        </div>
    )
};

export default React.memo(BasketWithGoods);