import React from 'react';
import BasketFirstRow from './BasketFirstRow';
import BasketPlacingOrder from './BasketPlacingOrder';
import BasketDeliveryInfo from './BasketDeliveryInfo';
import BasketTotalRow from './BasketTotalRow';


function BasketWithGoods() {

    return (
        <div className='basket-with-goods'>
            <BasketFirstRow />
            <BasketPlacingOrder />
            <BasketDeliveryInfo />
            <BasketTotalRow />
        </div>
    )
};

export default React.memo(BasketWithGoods);