import React from 'react';
import BasketForm from './BasketForm';


function BasketRecepientInfo() {
    return (
        <div className='basket-recepient-info'>
            <h4 className='basket-with-goods-title'>Отримувач</h4>
            <BasketForm />
        </div>
    )
};

export default React.memo(BasketRecepientInfo);