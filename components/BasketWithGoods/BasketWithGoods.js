import React from 'react';
import BasketFirstRow from './BasketFirstRow';
import BasketPlacingOrder from './BasketPlacingOrder';
import BasketDeliveryInfo from './BasketDeliveryInfo';
import BasketRecepientInfo from './BasketRecepientInfo';
import BasketTotalRow from './BasketTotalRow';

function BasketWithGoods() {
    return (
        <div className='basket-with-goods'>
            <BasketFirstRow />
            <BasketPlacingOrder />
            <BasketDeliveryInfo />
            <BasketRecepientInfo />
            <BasketTotalRow />
        </div>
    )
};

export default React.memo(BasketWithGoods);