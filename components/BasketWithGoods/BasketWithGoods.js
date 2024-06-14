import React from 'react';
import BasketFirstRow from './BasketFirstRow';
import BasketPlacingOrder from './BasketPlacingOrder';
import BasketDeliveryInfo from './BasketDeliveryInfo';
import BasketTotalRow from './BasketTotalRow';
import { useState } from 'react';


function BasketWithGoods() {
    const [clientPersonalInfo, setClientPersonalInfo] = useState({});
    const [clientAdressInfo, setClientAdresslInfo] = useState({});
    // console.log(clientPersonalInfo)
    // console.log(clientAdressInfo)


    return (
        <div className='basket-with-goods'>
            <BasketFirstRow />
            <BasketPlacingOrder setClientPersonalInfo={setClientPersonalInfo} />
            <BasketDeliveryInfo setClientAdresslInfo={setClientAdresslInfo} />
            <BasketTotalRow clientAdressInfo={clientAdressInfo} clientPersonalInfo={clientPersonalInfo} />
        </div>
    )
};

export default React.memo(BasketWithGoods);